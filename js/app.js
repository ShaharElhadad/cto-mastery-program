/* ===== CTO Mastery Program - App Logic ===== */

(function() {
  'use strict';

  // State
  const STORAGE_KEY = 'cto_mastery_v1';
  let state = loadState();

  function defaultState() {
    return {
      currentDay: 1,
      completedDays: [],
      quizzesPassed: [],
      lessonsRead: [],
      xp: 0,
      streak: 0,
      lastActiveDate: null,
      selectedDay: 1
    };
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...defaultState(), ...JSON.parse(saved) };
      }
    } catch(e) {}
    return defaultState();
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch(e) {}
  }

  // Streak Logic
  function updateStreak() {
    const today = new Date().toDateString();
    if (state.lastActiveDate === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (state.lastActiveDate === yesterday.toDateString()) {
      state.streak++;
    } else if (state.lastActiveDate !== today) {
      state.streak = 1;
    }
    state.lastActiveDate = today;
    saveState();
  }

  // XP
  function addXP(amount, label) {
    state.xp += amount;
    saveState();
    showXPToast(`+${amount} XP`);
    updateAllUI();
  }

  function showXPToast(text) {
    const toast = document.createElement('div');
    toast.className = 'xp-toast';
    toast.textContent = text;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2200);
  }

  // Level calculation
  function getLevel() {
    return Math.floor(state.xp / 100) + 1;
  }

  // Navigation
  let currentPage = 'home';

  function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));

    const pageEl = document.getElementById(`page-${page}`);
    if (pageEl) {
      pageEl.classList.add('active');
    }

    const tabEl = document.querySelector(`.nav-tab[data-page="${page}"]`);
    if (tabEl) tabEl.classList.add('active');

    currentPage = page;

    if (page === 'lesson') renderLesson();
    if (page === 'quiz') renderQuiz();
    if (page === 'program') renderProgram();
    if (page === 'profile') renderProfile();
    if (page === 'home') renderHome();
  }

  // Render Home
  function renderHome() {
    const day = PROGRAM_DATA.days[state.currentDay - 1];
    if (!day) return;

    document.getElementById('streak-count').textContent = state.streak;
    document.getElementById('current-day-badge').textContent = `יום ${day.id}`;
    document.getElementById('current-day-week').textContent = `שבוע ${day.week}`;
    document.getElementById('current-day-title').textContent = day.title;

    const percent = Math.round((state.completedDays.length / 30) * 100);
    document.getElementById('progress-percent').textContent = `${percent}%`;
    document.getElementById('progress-fill').style.width = `${percent}%`;

    document.getElementById('stat-completed').textContent = state.completedDays.length;
    document.getElementById('stat-xp').textContent = state.xp;
    document.getElementById('stat-quizzes').textContent = state.quizzesPassed.length;
    document.getElementById('header-xp-value').textContent = state.xp;
  }

  // Render Program Grid
  function renderProgram() {
    const grid = document.getElementById('program-grid');
    grid.innerHTML = '';

    PROGRAM_DATA.weeks.forEach((week, wi) => {
      const section = document.createElement('div');
      section.className = 'week-section';

      const title = document.createElement('div');
      title.className = 'week-title';
      title.textContent = `שבוע ${wi + 1}: ${week.name}`;
      section.appendChild(title);

      const daysGrid = document.createElement('div');
      daysGrid.className = 'days-grid';

      week.days.forEach(dayNum => {
        const dayData = PROGRAM_DATA.days[dayNum - 1];
        const card = document.createElement('div');
        card.className = 'day-card';

        const isCompleted = state.completedDays.includes(dayNum);
        const isCurrent = dayNum === state.currentDay;
        const isLocked = dayNum > state.currentDay;

        if (isCompleted) card.classList.add('completed');
        else if (isCurrent) card.classList.add('current');
        else if (isLocked) card.classList.add('locked');

        card.innerHTML = `
          <div class="day-number">${dayNum}</div>
          <div class="day-label">${dayData ? dayData.title : ''}</div>
          ${isCompleted ? '<div class="day-status-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" fill="#34c759"/><path d="M4 7l2 2 4-4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' : ''}
          ${isLocked ? '<div class="day-status-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="3" y="6" width="8" height="6" rx="1" stroke="rgba(255,255,255,0.3)" stroke-width="1.2"/><path d="M5 6V4.5a2 2 0 0 1 4 0V6" stroke="rgba(255,255,255,0.3)" stroke-width="1.2"/></svg></div>' : ''}
        `;

        if (!isLocked) {
          card.addEventListener('click', () => {
            state.selectedDay = dayNum;
            saveState();
            navigateTo('lesson');
          });
        }

        daysGrid.appendChild(card);
      });

      section.appendChild(daysGrid);
      grid.appendChild(section);
    });
  }

  // Render Lesson
  function renderLesson() {
    const day = PROGRAM_DATA.days[state.selectedDay - 1];
    if (!day) return;

    document.getElementById('lesson-badge').textContent = `יום ${day.id}`;
    document.getElementById('lesson-title').textContent = day.lesson.title;
    document.getElementById('lesson-content').innerHTML = day.lesson.content;
    document.getElementById('lesson-task-text').textContent = day.task;

    // Mark lesson as read
    if (!state.lessonsRead.includes(day.id)) {
      state.lessonsRead.push(day.id);
      addXP(10, 'שיעור');
      saveState();
    }
  }

  // Quiz State
  let quizState = {
    currentQuestion: 0,
    answers: [],
    finished: false
  };

  // Render Quiz
  function renderQuiz() {
    const day = PROGRAM_DATA.days[state.selectedDay - 1];
    if (!day) return;

    // Reset quiz state if starting fresh
    if (quizState.finished || quizState.answers.length === 0) {
      quizState = { currentQuestion: 0, answers: [], finished: false };
    }

    document.getElementById('quiz-badge').textContent = `חידון`;
    document.getElementById('quiz-title').textContent = `חידון יום ${day.id}`;
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-body').style.display = 'block';

    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    const day = PROGRAM_DATA.days[state.selectedDay - 1];
    if (!day) return;

    const quiz = day.quiz;
    const qi = quizState.currentQuestion;

    if (qi >= quiz.length) {
      showQuizResult();
      return;
    }

    const q = quiz[qi];
    const total = quiz.length;

    document.getElementById('quiz-progress-fill').style.width = `${((qi + 1) / total) * 100}%`;
    document.getElementById('quiz-progress-text').textContent = `${qi + 1} / ${total}`;
    document.getElementById('quiz-question').textContent = q.question;

    const optionsEl = document.getElementById('quiz-options');
    optionsEl.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.innerHTML = `
        <span class="quiz-option-letter">${letters[i]}</span>
        <span>${opt}</span>
      `;
      btn.addEventListener('click', () => selectAnswer(i, q.correct));
      optionsEl.appendChild(btn);
    });
  }

  function selectAnswer(selected, correct) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, i) => {
      opt.classList.add('disabled');
      if (i === correct) opt.classList.add('correct');
      if (i === selected && selected !== correct) opt.classList.add('wrong');
      if (i === selected) opt.classList.add('selected');
    });

    quizState.answers.push(selected === correct);

    // Auto-advance after delay
    setTimeout(() => {
      quizState.currentQuestion++;
      renderQuizQuestion();
    }, 1200);
  }

  function showQuizResult() {
    quizState.finished = true;
    const day = PROGRAM_DATA.days[state.selectedDay - 1];
    const total = day.quiz.length;
    const correct = quizState.answers.filter(a => a).length;
    const percent = Math.round((correct / total) * 100);
    const passed = percent >= 70;

    document.getElementById('quiz-body').style.display = 'none';
    document.getElementById('quiz-result').classList.remove('hidden');

    const iconEl = document.getElementById('quiz-result-icon');
    const titleEl = document.getElementById('quiz-result-title');
    const textEl = document.getElementById('quiz-result-text');
    const btnEl = document.getElementById('btn-quiz-action');

    if (passed) {
      iconEl.innerHTML = '<svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="30" fill="rgba(52,199,89,0.1)" stroke="#34c759" stroke-width="2"/><path d="M20 32l8 8 16-16" stroke="#34c759" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      titleEl.textContent = 'עברת בהצלחה!';
      titleEl.style.color = '#34c759';
      textEl.textContent = `${correct}/${total} תשובות נכונות (${percent}%)`;
      btnEl.textContent = 'המשך ליום הבא';
      btnEl.onclick = () => completeDay();

      // Add XP if not already passed
      if (!state.quizzesPassed.includes(day.id)) {
        state.quizzesPassed.push(day.id);
        addXP(25, 'חידון');
        saveState();
      }
    } else {
      iconEl.innerHTML = '<svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="30" fill="rgba(255,69,58,0.1)" stroke="#ff453a" stroke-width="2"/><path d="M22 22l20 20M42 22l-20 20" stroke="#ff453a" stroke-width="3" stroke-linecap="round"/></svg>';
      titleEl.textContent = 'נסה שוב';
      titleEl.style.color = '#ff453a';
      textEl.textContent = `${correct}/${total} תשובות נכונות (${percent}%). צריך לפחות 70% כדי לעבור.`;
      btnEl.textContent = 'נסה שוב';
      btnEl.onclick = () => {
        quizState = { currentQuestion: 0, answers: [], finished: false };
        renderQuiz();
      };
    }
  }

  function completeDay() {
    const dayId = state.selectedDay;
    if (!state.completedDays.includes(dayId)) {
      state.completedDays.push(dayId);
    }
    if (state.currentDay === dayId && dayId < 30) {
      state.currentDay = dayId + 1;
      state.selectedDay = dayId + 1;
    }
    updateStreak();
    saveState();
    navigateTo('home');
    updateAllUI();
  }

  // Render Profile
  function renderProfile() {
    document.getElementById('profile-xp').textContent = state.xp;
    document.getElementById('profile-streak').textContent = state.streak;
    document.getElementById('profile-days').textContent = `${state.completedDays.length}/30`;
    document.getElementById('profile-level').textContent = getLevel();

    // Achievements
    const achievements = [
      { id: 'first', name: 'התחלה', condition: state.completedDays.length >= 1 },
      { id: 'week1', name: 'שבוע 1', condition: state.completedDays.length >= 7 },
      { id: 'week2', name: 'שבוע 2', condition: state.completedDays.length >= 14 },
      { id: 'week3', name: 'שבוע 3', condition: state.completedDays.length >= 21 },
      { id: 'all', name: '30 יום', condition: state.completedDays.length >= 30 },
      { id: 'streak3', name: '3 ימים רצף', condition: state.streak >= 3 },
      { id: 'streak7', name: '7 ימים רצף', condition: state.streak >= 7 },
      { id: 'xp100', name: '100 XP', condition: state.xp >= 100 },
      { id: 'xp500', name: '500 XP', condition: state.xp >= 500 }
    ];

    const grid = document.getElementById('achievements-grid');
    grid.innerHTML = '';

    achievements.forEach(a => {
      const div = document.createElement('div');
      div.className = `achievement ${a.condition ? 'unlocked' : ''}`;
      div.innerHTML = `
        <div class="achievement-icon">
          ${a.condition
            ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><polygon points="12,2 15,9 22,9 16.5,13.5 18.5,21 12,16.5 5.5,21 7.5,13.5 2,9 9,9" fill="#e8453c"/></svg>'
            : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><polygon points="12,2 15,9 22,9 16.5,13.5 18.5,21 12,16.5 5.5,21 7.5,13.5 2,9 9,9" stroke="rgba(255,255,255,0.2)" stroke-width="1" fill="none"/></svg>'
          }
        </div>
        <div class="achievement-name">${a.name}</div>
      `;
      grid.appendChild(div);
    });
  }

  // Update All UI
  function updateAllUI() {
    renderHome();
    document.getElementById('header-xp-value').textContent = state.xp;
  }

  // Reset Progress
  function resetProgress() {
    showConfirm('איפוס התקדמות', 'כל ההתקדמות, XP והישגים יימחקו. בטוח?', () => {
      state = defaultState();
      saveState();
      quizState = { currentQuestion: 0, answers: [], finished: false };
      navigateTo('home');
      updateAllUI();
    });
  }

  function showConfirm(title, message, onConfirm) {
    const overlay = document.createElement('div');
    overlay.className = 'confirm-overlay';
    overlay.innerHTML = `
      <div class="confirm-dialog">
        <h3>${title}</h3>
        <p>${message}</p>
        <div class="confirm-buttons">
          <button class="confirm-cancel">ביטול</button>
          <button class="confirm-ok">אישור</button>
        </div>
      </div>
    `;

    overlay.querySelector('.confirm-cancel').addEventListener('click', () => overlay.remove());
    overlay.querySelector('.confirm-ok').addEventListener('click', () => {
      overlay.remove();
      onConfirm();
    });
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });

    document.body.appendChild(overlay);
  }

  // Side Menu
  function openMenu() {
    document.getElementById('side-menu').classList.add('open');
    document.getElementById('side-menu-overlay').classList.add('open');
  }

  function closeMenu() {
    document.getElementById('side-menu').classList.remove('open');
    document.getElementById('side-menu-overlay').classList.remove('open');
  }

  // Initialize
  function init() {
    // Splash screen
    setTimeout(() => {
      document.getElementById('splash').classList.add('hidden');
    }, 2200);

    // Update streak on load
    updateStreak();

    // Navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        navigateTo(tab.dataset.page);
      });
    });

    // Side menu
    document.getElementById('btn-hamburger').addEventListener('click', openMenu);
    document.getElementById('side-menu-overlay').addEventListener('click', closeMenu);

    document.querySelectorAll('.side-menu-item[data-page]').forEach(item => {
      item.addEventListener('click', () => {
        navigateTo(item.dataset.page);
        closeMenu();
      });
    });

    // Reset buttons
    document.getElementById('btn-reset').addEventListener('click', () => {
      closeMenu();
      resetProgress();
    });
    document.getElementById('btn-profile-reset').addEventListener('click', resetProgress);

    // Start lesson button
    document.getElementById('btn-start-lesson').addEventListener('click', () => {
      state.selectedDay = state.currentDay;
      saveState();
      navigateTo('lesson');
    });

    // To quiz button
    document.getElementById('btn-to-quiz').addEventListener('click', () => {
      quizState = { currentQuestion: 0, answers: [], finished: false };
      navigateTo('quiz');
    });

    // Initial render
    updateAllUI();
    renderProgram();
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
