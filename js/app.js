/* ===== CTO Mastery Program — App Logic ===== */

(function() {
  'use strict';

  // ===== STATE =====
  let completed = [];
  let quizScores = {};
  let practiceChecks = {};
  let currentDay = null;
  let currentTab = 'videos';
  let currentFilter = 'all';
  let currentPage = 'home';
  let quizAnswers = {};

  // ===== STORAGE =====
  function loadState() {
    try {
      const c = localStorage.getItem('cto_completed');
      if (c) completed = JSON.parse(c);
      const q = localStorage.getItem('cto_quiz_scores');
      if (q) quizScores = JSON.parse(q);
      const p = localStorage.getItem('cto_practice');
      if (p) practiceChecks = JSON.parse(p);
    } catch(e) {}
  }

  function saveCompleted() {
    localStorage.setItem('cto_completed', JSON.stringify(completed));
  }

  function saveQuizScores() {
    localStorage.setItem('cto_quiz_scores', JSON.stringify(quizScores));
  }

  function savePractice() {
    localStorage.setItem('cto_practice', JSON.stringify(practiceChecks));
  }

  // ===== HELPERS =====
  function getGreeting() {
    const h = new Date().getHours();
    if (h < 6) return 'לילה טוב';
    if (h < 12) return 'בוקר טוב';
    if (h < 17) return 'צהריים טובים';
    if (h < 21) return 'ערב טוב';
    return 'לילה טוב';
  }

  function getWeekForDay(dayNum) {
    return WEEKS.find(w => w.n === Math.ceil(dayNum / 7)) || WEEKS[0];
  }

  function getCompletedCount() { return completed.length; }

  function getOverallPercent() { return Math.round((completed.length / 30) * 100); }

  function getWeekCompletedCount(weekNum) {
    const start = (weekNum - 1) * 7 + 1;
    const end = weekNum * 7;
    let count = 0;
    for (let d = start; d <= Math.min(end, 30); d++) {
      if (completed.includes(d)) count++;
    }
    return count;
  }

  function getWeekDayCount(weekNum) {
    if (weekNum === 4) return 9; // days 22-30
    return 7;
  }

  function getAverageQuizScore() {
    const keys = Object.keys(quizScores);
    if (keys.length === 0) return null;
    const total = keys.reduce((sum, k) => sum + quizScores[k], 0);
    return Math.round(total / keys.length);
  }

  function getNextDay() {
    for (let i = 1; i <= 30; i++) {
      if (!completed.includes(i)) return i;
    }
    return 30;
  }

  // ===== SPLASH =====
  function initSplash() {
    setTimeout(function() {
      var splash = document.getElementById('splash');
      splash.classList.add('fade-out');
      document.getElementById('app').classList.remove('hidden');
      setTimeout(function() { splash.style.display = 'none'; }, 600);
      updateAll();
    }, 1800);
  }

  // ===== NAVIGATION =====
  function navigateTo(page) {
    currentPage = page;
    document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
    var target = document.getElementById('page-' + page);
    if (target) target.classList.add('active');

    document.querySelectorAll('.tab-btn').forEach(function(b) {
      b.classList.toggle('active', b.dataset.page === page);
    });
    document.querySelectorAll('.side-menu-items li').forEach(function(li) {
      li.classList.toggle('active', li.dataset.page === page);
    });

    document.getElementById('pagesContainer').scrollTop = 0;
    closeMenu();

    if (page === 'stats') renderStats();
    if (page === 'program') renderDaysGrid();
    if (page === 'home') updateHome();
  }

  // ===== SIDE MENU =====
  function openMenu() {
    document.getElementById('menuOverlay').classList.add('show');
    document.getElementById('sideMenu').classList.add('open');
  }

  function closeMenu() {
    document.getElementById('menuOverlay').classList.remove('show');
    document.getElementById('sideMenu').classList.remove('open');
  }

  // ===== HOME PAGE =====
  function updateHome() {
    document.getElementById('greeting').textContent = getGreeting();

    var pct = getOverallPercent();
    document.getElementById('mainPercent').textContent = pct + '%';
    var circumference = 2 * Math.PI * 52;
    var offset = circumference - (pct / 100) * circumference;
    document.getElementById('mainRing').style.strokeDasharray = circumference;
    document.getElementById('mainRing').style.strokeDashoffset = offset;

    document.getElementById('homeDaysCompleted').textContent = getCompletedCount() + '/30';
    var nextDay = getNextDay();
    var nextWeek = getWeekForDay(nextDay);
    document.getElementById('homeCurrentWeek').textContent = nextWeek.n;
    var avg = getAverageQuizScore();
    document.getElementById('homeAvgScore').textContent = avg !== null ? avg + '%' : '--';

    // Continue button
    var dayData = DATA.find(function(d) { return d.day === nextDay; });
    document.getElementById('continueTitle').textContent = '\u05D4\u05DE\u05E9\u05DA \u05DC\u05D9\u05D5\u05DD ' + nextDay;
    document.getElementById('continueSub').textContent = dayData ? dayData.title : '';

    // Week overview
    var weekHtml = '';
    WEEKS.forEach(function(w) {
      var wCount = getWeekDayCount(w.n);
      var wCompleted = getWeekCompletedCount(w.n);
      var wPct = Math.round((wCompleted / wCount) * 100);
      weekHtml += '<div class="week-card" data-week="' + w.n + '">' +
        '<div class="week-indicator" style="background:' + w.color + '"></div>' +
        '<div class="week-info">' +
          '<div class="week-label">\u05E9\u05D1\u05D5\u05E2 ' + w.n + '</div>' +
          '<div class="week-name">' + w.label + '</div>' +
          '<div class="week-progress-text">' + wCompleted + '/' + wCount + ' \u05D9\u05DE\u05D9\u05DD</div>' +
        '</div>' +
        '<div class="week-mini-bar"><div class="week-mini-bar-fill" style="width:' + wPct + '%;background:' + w.color + '"></div></div>' +
      '</div>';
    });
    document.getElementById('weekOverview').innerHTML = weekHtml;
  }

  // ===== PROGRAM PAGE =====
  function renderFilterBar() {
    var html = '<button class="filter-btn active" data-filter="all">\u05D4\u05DB\u05DC</button>';
    WEEKS.forEach(function(w) {
      html += '<button class="filter-btn" data-filter="' + w.n + '">\u05E9\u05D1\u05D5\u05E2 ' + w.n + '</button>';
    });
    document.getElementById('filterBar').innerHTML = html;
  }

  function renderDaysGrid() {
    var filtered = currentFilter === 'all' ? DATA : DATA.filter(function(d) { return d.week === parseInt(currentFilter); });
    var html = '';
    filtered.forEach(function(d) {
      var week = getWeekForDay(d.day);
      var isCompleted = completed.includes(d.day);
      html += '<div class="day-card' + (isCompleted ? ' completed' : '') + '" data-day="' + d.day + '">' +
        '<div class="day-card-week" style="background:' + week.color + '"></div>' +
        '<div class="day-card-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>' +
        '<div class="day-card-number">' + d.day + '</div>' +
        '<div class="day-card-title">' + d.title + '</div>' +
        '<div class="day-card-meta">' +
          '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>' +
          d.videos.length + ' \u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD' +
          ' &middot; ' +
          '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/></svg>' +
          d.quiz.length + ' \u05E9\u05D0\u05DC\u05D5\u05EA' +
        '</div>' +
      '</div>';
    });
    document.getElementById('daysGrid').innerHTML = html;
  }

  // ===== DAY DETAIL =====
  function openDay(dayNum) {
    var dayData = DATA.find(function(d) { return d.day === dayNum; });
    if (!dayData) return;
    currentDay = dayData;
    currentTab = 'videos';
    quizAnswers = {};

    var week = getWeekForDay(dayNum);
    document.getElementById('dayOverlayTitle').textContent = '\u05D9\u05D5\u05DD ' + dayNum + ': ' + dayData.title;
    document.getElementById('dayOverlayMeta').innerHTML =
      '<span class="day-meta-badge"><span class="day-meta-dot" style="background:' + week.color + '"></span>\u05E9\u05D1\u05D5\u05E2 ' + week.n + ' &mdash; ' + week.label + '</span>';

    updateDayTabs();
    renderDayContent();
    updateCompleteBtn();

    document.getElementById('dayOverlay').classList.add('open');
  }

  function closeDay() {
    document.getElementById('dayOverlay').classList.remove('open');
    currentDay = null;
    // close any yt
    closeYT();
  }

  function updateDayTabs() {
    document.querySelectorAll('.day-tab').forEach(function(t) {
      t.classList.toggle('active', t.dataset.tab === currentTab);
    });
  }

  function renderDayContent() {
    if (!currentDay) return;
    var container = document.getElementById('dayContent');

    if (currentTab === 'videos') {
      renderVideos(container);
    } else if (currentTab === 'practice') {
      renderPractice(container);
    } else if (currentTab === 'quiz') {
      renderQuiz(container);
    }
  }

  function renderVideos(container) {
    var html = '';
    currentDay.videos.forEach(function(v, i) {
      var ytId = getYouTubeId(v.url);
      var thumb = ytId ? 'https://img.youtube.com/vi/' + ytId + '/mqdefault.jpg' : '';
      html += '<div class="video-card" data-url="' + v.url + '" data-ytid="' + ytId + '">' +
        '<div class="video-thumb">' +
          (thumb ? '<img src="' + thumb + '" alt="" loading="lazy">' : '') +
          '<div class="video-play-btn"><div class="video-play-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><polygon points="8 5 20 12 8 19"/></svg></div></div>' +
        '</div>' +
        '<div class="video-info">' +
          '<div class="video-title">' + v.title + '</div>' +
          '<div class="video-summary">' + v.summary + '</div>' +
        '</div>' +
      '</div>';
    });
    container.innerHTML = html;
  }

  function renderPractice(container) {
    var html = '';
    currentDay.practice.forEach(function(p, pi) {
      var typeClass = p.type === 'hands-on' ? 'hands-on' : (p.type === 'research' ? 'research' : 'analysis');
      var typeLabel = p.type === 'hands-on' ? 'Hands-On' : (p.type === 'research' ? 'Research' : 'Analysis');
      html += '<div class="practice-section">' +
        '<div class="practice-type ' + typeClass + '">' + typeLabel + '</div>' +
        '<div class="practice-title">' + p.title + '</div>' +
        '<div class="practice-steps">';
      p.steps.forEach(function(s, si) {
        var key = currentDay.day + '_' + pi + '_' + si;
        var checked = practiceChecks[key] || false;
        html += '<div class="practice-step">' +
          '<div class="step-checkbox' + (checked ? ' checked' : '') + '" data-key="' + key + '">' +
            (checked ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>' : '') +
          '</div>' +
          '<div class="step-text">' + s + '</div>' +
        '</div>';
      });
      html += '</div></div>';
    });
    container.innerHTML = html;
  }

  function renderQuiz(container) {
    // Check if quiz already completed for this day
    var existingScore = quizScores[currentDay.day];
    var isRetry = Object.keys(quizAnswers).length === 0 && existingScore === undefined;

    var html = '';
    currentDay.quiz.forEach(function(q, qi) {
      var answered = quizAnswers[qi] !== undefined;
      html += '<div class="quiz-question">' +
        '<div class="quiz-q-number">\u05E9\u05D0\u05DC\u05D4 ' + (qi + 1) + ' \u05DE\u05EA\u05D5\u05DA ' + currentDay.quiz.length + '</div>' +
        '<div class="quiz-q-text">' + q.q + '</div>' +
        '<div class="quiz-options">';
      q.options.forEach(function(opt, oi) {
        var cls = '';
        if (answered) {
          cls = ' disabled';
          if (oi === q.correct) cls += ' correct';
          else if (oi === quizAnswers[qi] && oi !== q.correct) cls += ' wrong';
        }
        var markers = ['\u05D0', '\u05D1', '\u05D2', '\u05D3'];
        html += '<button class="quiz-option' + cls + '" data-qi="' + qi + '" data-oi="' + oi + '">' +
          '<div class="quiz-option-marker">' +
            (answered && oi === q.correct ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>' :
             answered && oi === quizAnswers[qi] && oi !== q.correct ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' :
             markers[oi]) +
          '</div>' +
          '<span>' + opt + '</span>' +
        '</button>';
      });
      html += '</div>';
      html += '<div class="quiz-explanation' + (answered ? ' show' : '') + '" id="explanation-' + qi + '">' + q.explanation + '</div>';
      html += '</div>';
    });

    // Check if all answered
    if (Object.keys(quizAnswers).length === currentDay.quiz.length) {
      var correctCount = 0;
      currentDay.quiz.forEach(function(q, qi) {
        if (quizAnswers[qi] === q.correct) correctCount++;
      });
      var scorePct = Math.round((correctCount / currentDay.quiz.length) * 100);
      quizScores[currentDay.day] = scorePct;
      saveQuizScores();

      var scoreClass = scorePct >= 80 ? 'great' : (scorePct >= 60 ? 'ok' : 'poor');
      var scoreLabel = scorePct >= 80 ? 'מצוין!' : (scorePct >= 60 ? 'לא רע, אפשר לשפר' : 'כדאי לחזור על החומר');
      html += '<div class="quiz-score-card">' +
        '<div class="quiz-score-value ' + scoreClass + '">' + scorePct + '%</div>' +
        '<div class="quiz-score-label">' + correctCount + '/' + currentDay.quiz.length + ' \u05EA\u05E9\u05D5\u05D1\u05D5\u05EA \u05E0\u05DB\u05D5\u05E0\u05D5\u05EA &mdash; ' + scoreLabel + '</div>' +
        '<button class="quiz-retry-btn" id="retryQuizBtn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg> \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1</button>' +
      '</div>';
    }

    container.innerHTML = html;
  }

  function answerQuiz(qi, oi) {
    if (quizAnswers[qi] !== undefined) return;
    quizAnswers[qi] = oi;
    renderDayContent();

    // Scroll to next question or score
    setTimeout(function() {
      var questions = document.querySelectorAll('.quiz-question');
      var nextIdx = qi + 1;
      if (nextIdx < questions.length) {
        questions[nextIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        var scoreCard = document.querySelector('.quiz-score-card');
        if (scoreCard) scoreCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);
  }

  function updateCompleteBtn() {
    if (!currentDay) return;
    var btn = document.getElementById('completeBtn');
    var text = document.getElementById('completeBtnText');
    var isCompleted = completed.includes(currentDay.day);
    btn.classList.toggle('completed', isCompleted);
    text.textContent = isCompleted ? '\u05D4\u05D5\u05E9\u05DC\u05DD' : '\u05E1\u05DE\u05DF \u05DB\u05D4\u05D5\u05E9\u05DC\u05DD';
  }

  function toggleComplete() {
    if (!currentDay) return;
    var day = currentDay.day;
    var idx = completed.indexOf(day);
    if (idx >= 0) {
      completed.splice(idx, 1);
    } else {
      completed.push(day);
    }
    saveCompleted();
    updateCompleteBtn();
    updateAll();
  }

  // ===== YOUTUBE MODAL =====
  function openYT(ytId) {
    if (!ytId) return;
    document.getElementById('ytPlayer').innerHTML = '<iframe src="https://www.youtube.com/embed/' + ytId + '?autoplay=1&rel=0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    document.getElementById('ytModal').classList.add('show');
  }

  function closeYT() {
    document.getElementById('ytModal').classList.remove('show');
    document.getElementById('ytPlayer').innerHTML = '';
  }

  // ===== STATS PAGE =====
  function renderStats() {
    var pct = getOverallPercent();
    document.getElementById('statsOverallPercent').textContent = pct + '%';
    document.getElementById('statsOverallBar').style.width = pct + '%';
    document.getElementById('statsCompletedDays').textContent = getCompletedCount() + ' / 30';

    // Week breakdown
    var weekHtml = '';
    WEEKS.forEach(function(w) {
      var wCount = getWeekDayCount(w.n);
      var wCompleted = getWeekCompletedCount(w.n);
      var wPct = Math.round((wCompleted / wCount) * 100);
      weekHtml += '<div class="stats-week-item">' +
        '<div class="stats-week-label">' +
          '<span class="stats-week-name" style="color:' + w.color + '">\u05E9\u05D1\u05D5\u05E2 ' + w.n + ': ' + w.label + '</span>' +
          '<span class="stats-week-count">' + wCompleted + '/' + wCount + '</span>' +
        '</div>' +
        '<div class="stats-week-bar"><div class="stats-week-bar-fill" style="width:' + wPct + '%;background:' + w.color + '"></div></div>' +
      '</div>';
    });
    document.getElementById('statsWeekBreakdown').innerHTML = weekHtml;

    // Quiz scores
    var quizHtml = '';
    var quizKeys = Object.keys(quizScores).sort(function(a, b) { return parseInt(a) - parseInt(b); });
    if (quizKeys.length === 0) {
      quizHtml = '<div class="stats-no-data">\u05E2\u05D3\u05D9\u05D9\u05DF \u05D0\u05D9\u05DF \u05E6\u05D9\u05D5\u05E0\u05D9 \u05DE\u05D1\u05D7\u05E0\u05D9\u05DD</div>';
    } else {
      quizKeys.forEach(function(dayKey) {
        var score = quizScores[dayKey];
        var dayData = DATA.find(function(d) { return d.day === parseInt(dayKey); });
        var scoreClass = score >= 80 ? '' : (score >= 60 ? ' medium' : ' low');
        quizHtml += '<div class="stats-quiz-item">' +
          '<div class="stats-quiz-day">\u05D9\u05D5\u05DD ' + dayKey + ': ' + (dayData ? dayData.title : '') + '</div>' +
          '<div class="stats-quiz-score' + scoreClass + '">' + score + '%</div>' +
        '</div>';
      });
    }
    document.getElementById('statsQuizScores').innerHTML = quizHtml;
  }

  // ===== UPDATE ALL =====
  function updateAll() {
    // Header progress
    var pct = getOverallPercent();
    var headerCirc = 2 * Math.PI * 11;
    var headerOffset = headerCirc - (pct / 100) * headerCirc;
    document.getElementById('headerRing').style.strokeDasharray = headerCirc;
    document.getElementById('headerRing').style.strokeDashoffset = headerOffset;
    document.getElementById('headerPercent').textContent = pct + '%';

    // Menu stats
    document.getElementById('menuCompleted').textContent = getCompletedCount();
    document.getElementById('menuRemaining').textContent = 30 - getCompletedCount();
    var avg = getAverageQuizScore();
    document.getElementById('menuQuizAvg').textContent = avg !== null ? avg + '%' : '--';

    if (currentPage === 'home') updateHome();
    if (currentPage === 'stats') renderStats();
    if (currentPage === 'program') renderDaysGrid();
  }

  // ===== RESET =====
  function resetProgress() {
    if (!confirm('\u05D4\u05D0\u05DD \u05DC\u05D0\u05E4\u05E1 \u05D0\u05EA \u05DB\u05DC \u05D4\u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA?')) return;
    completed = [];
    quizScores = {};
    practiceChecks = {};
    localStorage.removeItem('cto_completed');
    localStorage.removeItem('cto_quiz_scores');
    localStorage.removeItem('cto_practice');
    closeMenu();
    updateAll();
  }

  // ===== EVENT LISTENERS =====
  function init() {
    loadState();
    renderFilterBar();
    initSplash();

    // Menu
    document.getElementById('menuBtn').addEventListener('click', openMenu);
    document.getElementById('menuOverlay').addEventListener('click', closeMenu);

    // Bottom tabs
    document.querySelectorAll('.tab-btn').forEach(function(btn) {
      btn.addEventListener('click', function() { navigateTo(btn.dataset.page); });
    });

    // Side menu items
    document.querySelectorAll('.side-menu-items li').forEach(function(li) {
      li.addEventListener('click', function() { navigateTo(li.dataset.page); });
    });

    // Reset
    document.getElementById('resetBtn').addEventListener('click', resetProgress);

    // Quick actions
    document.getElementById('continueBtn').addEventListener('click', function() {
      openDay(getNextDay());
    });
    document.querySelectorAll('[data-goto]').forEach(function(el) {
      el.addEventListener('click', function() { navigateTo(el.dataset.goto); });
    });

    // Filter bar
    document.getElementById('filterBar').addEventListener('click', function(e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;
      currentFilter = btn.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach(function(b) {
        b.classList.toggle('active', b.dataset.filter === currentFilter);
      });
      renderDaysGrid();
    });

    // Days grid - click day
    document.getElementById('daysGrid').addEventListener('click', function(e) {
      var card = e.target.closest('.day-card');
      if (!card) return;
      openDay(parseInt(card.dataset.day));
    });

    // Week overview - click week
    document.getElementById('weekOverview').addEventListener('click', function(e) {
      var card = e.target.closest('.week-card');
      if (!card) return;
      currentFilter = card.dataset.week;
      navigateTo('program');
      document.querySelectorAll('.filter-btn').forEach(function(b) {
        b.classList.toggle('active', b.dataset.filter === currentFilter);
      });
      renderDaysGrid();
    });

    // Day overlay - back
    document.getElementById('dayBackBtn').addEventListener('click', closeDay);

    // Day tabs
    document.querySelectorAll('.day-tab').forEach(function(tab) {
      tab.addEventListener('click', function() {
        currentTab = tab.dataset.tab;
        updateDayTabs();
        renderDayContent();
      });
    });

    // Complete button
    document.getElementById('completeBtn').addEventListener('click', toggleComplete);

    // Day content clicks (delegation)
    document.getElementById('dayContent').addEventListener('click', function(e) {
      // Video card
      var videoCard = e.target.closest('.video-card');
      if (videoCard) {
        var ytId = videoCard.dataset.ytid;
        if (ytId) openYT(ytId);
        return;
      }

      // Practice checkbox
      var checkbox = e.target.closest('.step-checkbox');
      if (checkbox) {
        var key = checkbox.dataset.key;
        practiceChecks[key] = !practiceChecks[key];
        savePractice();
        if (practiceChecks[key]) {
          checkbox.classList.add('checked');
          checkbox.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>';
        } else {
          checkbox.classList.remove('checked');
          checkbox.innerHTML = '';
        }
        // Update adjacent text
        var stepText = checkbox.nextElementSibling;
        if (stepText && stepText.classList.contains('step-text')) {
          if (practiceChecks[key]) {
            stepText.style.textDecoration = 'line-through';
            stepText.style.color = 'var(--text-tertiary)';
          } else {
            stepText.style.textDecoration = 'none';
            stepText.style.color = 'var(--text-secondary)';
          }
        }
        return;
      }

      // Quiz option
      var option = e.target.closest('.quiz-option');
      if (option && !option.classList.contains('disabled')) {
        answerQuiz(parseInt(option.dataset.qi), parseInt(option.dataset.oi));
        return;
      }

      // Retry quiz
      if (e.target.closest('#retryQuizBtn') || e.target.closest('.quiz-retry-btn')) {
        quizAnswers = {};
        delete quizScores[currentDay.day];
        saveQuizScores();
        renderDayContent();
        return;
      }
    });

    // YT modal
    document.getElementById('ytClose').addEventListener('click', closeYT);
    document.getElementById('ytModalBg').addEventListener('click', closeYT);

    // Keyboard escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        if (document.getElementById('ytModal').classList.contains('show')) {
          closeYT();
        } else if (document.getElementById('dayOverlay').classList.contains('open')) {
          closeDay();
        } else if (document.getElementById('sideMenu').classList.contains('open')) {
          closeMenu();
        }
      }
    });
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
