// CTO Mastery - 30 Day Program Data
const PROGRAM_DATA = {
  title: "CTO Mastery",
  subtitle: "30 יום למנהיגות טכנולוגית",
  weeks: [
    { name: "ארכיטקטורה ועיצוב מערכות", days: [1,2,3,4,5,6,7] },
    { name: "צוות ומנהיגות", days: [8,9,10,11,12,13,14] },
    { name: "אסטרטגיה ומוצר", days: [15,16,17,18,19,20,21] },
    { name: "תפעול וצמיחה", days: [22,23,24,25,26,27,28] },
    { name: "פרויקט סיום", days: [29,30] }
  ],
  days: [
    {
      id: 1,
      title: "מיקרוסרביסים",
      week: 1,
      lesson: {
        title: "ארכיטקטורת מיקרוסרביסים",
        content: `<h3>מה זה מיקרוסרביסים?</h3>
<p>ארכיטקטורת מיקרוסרביסים מפרקת אפליקציה מונוליטית לשירותים קטנים ועצמאיים, כל אחד אחראי על פונקציונליות מוגדרת.</p>
<h3>עקרונות מפתח</h3>
<div class="concept-card"><strong>Single Responsibility</strong><br>כל שירות אחראי על דומיין עסקי אחד בלבד</div>
<div class="concept-card"><strong>Loose Coupling</strong><br>שירותים מתקשרים דרך APIs מוגדרים, ללא תלות ישירה</div>
<div class="concept-card"><strong>Independent Deployment</strong><br>כל שירות נפרס באופן עצמאי ללא השפעה על אחרים</div>
<div class="concept-card"><strong>Data Isolation</strong><br>כל שירות מנהל את ה-database שלו באופן עצמאי</div>
<h3>מתי לבחור מיקרוסרביסים?</h3>
<p>כאשר הצוות גדל מעבר ל-8 מפתחים, כאשר חלקים שונים של המערכת דורשים scaling שונה, או כאשר יש צורך בטכנולוגיות שונות לחלקים שונים.</p>
<h3>אתגרים נפוצים</h3>
<p>ניהול תקשורת בין שירותים, distributed transactions, monitoring מורכב, וקושי ב-debugging. כ-CTO, חשוב להבין מתי המורכבות שווה את היתרונות.</p>`
      },
      quiz: [
        { question: "מהו העיקרון המרכזי של מיקרוסרביסים?", options: ["כל השירותים חולקים database אחד", "כל שירות אחראי על דומיין עסקי אחד", "כל השירותים נפרסים יחד", "שירותים תלויים ישירות זה בזה"], correct: 1 },
        { question: "מתי כדאי לעבור ממונוליט למיקרוסרביסים?", options: ["תמיד, מההתחלה", "כשהצוות גדל ויש צורך ב-scaling שונה", "רק כשיש באג קריטי", "כשהלקוח מבקש"], correct: 1 },
        { question: "מהו אחד האתגרים המרכזיים במיקרוסרביסים?", options: ["קוד קצר מדי", "Distributed transactions", "מהירות פיתוח גבוהה מדי", "פשטות יתר"], correct: 1 },
        { question: "מהו Data Isolation במיקרוסרביסים?", options: ["כל השירותים ניגשים לאותו database", "כל שירות מנהל את ה-DB שלו", "אין שימוש ב-database", "רק שירות אחד ניגש ל-DB"], correct: 1 }
      ],
      task: "שרטט דיאגרמה של אפליקציה מונוליטית שאתה מכיר ופרק אותה ל-3 מיקרוסרביסים לוגיים. הגדר את ה-API ביניהם."
    },
    {
      id: 2,
      title: "ענן ותשתיות",
      week: 1,
      lesson: {
        title: "Cloud Architecture ותשתיות",
        content: `<h3>אסטרטגיית ענן ל-CTO</h3>
<p>בחירת ספק ענן ואסטרטגיית תשתיות היא אחת ההחלטות הקריטיות ביותר. ההשפעה היא על עלויות, ביצועים, וגמישות לשנים קדימה.</p>
<h3>מודלים מרכזיים</h3>
<div class="concept-card"><strong>IaaS</strong><br>Infrastructure as a Service: שליטה מלאה על VMs, networking, storage</div>
<div class="concept-card"><strong>PaaS</strong><br>Platform as a Service: פלטפורמה מנוהלת לפריסת קוד</div>
<div class="concept-card"><strong>Serverless</strong><br>ריצת קוד ללא ניהול שרתים, תשלום לפי שימוש</div>
<div class="concept-card"><strong>Multi-Cloud</strong><br>שימוש במספר ספקי ענן למניעת vendor lock-in</div>
<h3>שיקולים בבחירת ענן</h3>
<p>עלות (לטווח קצר וארוך), compliance ורגולציה, proximity ללקוחות, שירותים מנוהלים זמינים, ו-expertise של הצוות.</p>
<h3>FinOps</h3>
<p>כ-CTO, חובה לנהל עלויות ענן באופן אקטיבי. Reserved instances, spot instances, auto-scaling נכון, וניטור שימוש הם כלים קריטיים.</p>`
      },
      quiz: [
        { question: "מהו ההבדל בין IaaS ל-PaaS?", options: ["אין הבדל", "IaaS נותן שליטה מלאה על תשתית, PaaS מנהל את התשתית", "PaaS יקר יותר תמיד", "IaaS רק לחברות גדולות"], correct: 1 },
        { question: "מהו היתרון המרכזי של Serverless?", options: ["מהירות מקסימלית", "תשלום לפי שימוש וללא ניהול שרתים", "אבטחה מוחלטת", "תמיכה בכל השפות"], correct: 1 },
        { question: "מהו FinOps?", options: ["ניהול פיננסי של משכורות", "ניהול אקטיבי של עלויות ענן", "שם של כלי DevOps", "ניהול פרויקטים"], correct: 1 }
      ],
      task: "בחן את התשתית הנוכחית שלך. זהה 3 שירותים שיכולים לעבור ל-serverless וחשב את החיסכון הפוטנציאלי."
    },
    {
      id: 3,
      title: "בסיסי נתונים",
      week: 1,
      lesson: {
        title: "בחירת וניהול בסיסי נתונים",
        content: `<h3>אסטרטגיית Database</h3>
<p>בחירת database היא החלטה ארכיטקטונית קריטית. אין פתרון אחד לכל בעיה, וכ-CTO עליך להבין את ה-tradeoffs.</p>
<h3>סוגי בסיסי נתונים</h3>
<div class="concept-card"><strong>SQL (PostgreSQL, MySQL)</strong><br>ACID compliance, schema מוגדר, queries מורכבים, מתאים לנתונים רלציוניים</div>
<div class="concept-card"><strong>NoSQL Document (MongoDB)</strong><br>Schema גמיש, horizontal scaling, מתאים לנתונים לא מובנים</div>
<div class="concept-card"><strong>Key-Value (Redis)</strong><br>מהירות קריאה גבוהה, caching, sessions, queues</div>
<div class="concept-card"><strong>Graph (Neo4j)</strong><br>קשרים מורכבים, social networks, recommendation engines</div>
<h3>CAP Theorem</h3>
<p>בסביבה מבוזרת, אפשר להבטיח רק שניים מתוך שלושה: Consistency, Availability, Partition Tolerance. הבנת ה-tradeoff קריטית.</p>
<h3>Polyglot Persistence</h3>
<p>שימוש בסוגי database שונים לצרכים שונים באותה מערכת. למשל: PostgreSQL לנתוני משתמשים, Redis ל-caching, Elasticsearch לחיפוש.</p>`
      },
      quiz: [
        { question: "מהו CAP Theorem?", options: ["שיטת פיתוח", "אפשר להבטיח רק 2 מ-3: Consistency, Availability, Partition Tolerance", "פרוטוקול רשת", "סוג database"], correct: 1 },
        { question: "מתי כדאי להשתמש ב-Redis?", options: ["כ-database ראשי", "ל-caching ומהירות קריאה גבוהה", "לנתונים רלציוניים מורכבים", "רק ל-development"], correct: 1 },
        { question: "מהו Polyglot Persistence?", options: ["שימוש בשפה אחת", "שימוש בסוגי DB שונים לצרכים שונים", "העתקת נתונים בין DBs", "גיבוי כפול"], correct: 1 },
        { question: "מה היתרון של NoSQL Document DB?", options: ["ACID compliance", "Schema גמיש ו-horizontal scaling", "ביצועים תמיד טובים יותר", "אבטחה מעולה"], correct: 1 }
      ],
      task: "מפה את כל בסיסי הנתונים בארגון שלך. לכל אחד, הגדר: סוג, גודל, תדירות קריאה/כתיבה, ו-SLA נדרש."
    },
    {
      id: 4,
      title: "Scaling",
      week: 1,
      lesson: {
        title: "אסטרטגיות Scaling",
        content: `<h3>הגדלת קיבולת המערכת</h3>
<p>Scaling הוא היכולת של מערכת לטפל בעומס גדל. כ-CTO, עליך לתכנן scaling מראש ולהבין את העלויות והמורכבות.</p>
<h3>סוגי Scaling</h3>
<div class="concept-card"><strong>Vertical Scaling (Scale Up)</strong><br>הגדלת משאבים של שרת בודד (CPU, RAM). פשוט אך מוגבל</div>
<div class="concept-card"><strong>Horizontal Scaling (Scale Out)</strong><br>הוספת שרתים נוספים. מורכב יותר אך ללא מגבלה תיאורטית</div>
<div class="concept-card"><strong>Auto-Scaling</strong><br>הוספה/הסרה אוטומטית של משאבים לפי עומס</div>
<div class="concept-card"><strong>Database Scaling</strong><br>Read replicas, sharding, partitioning</div>
<h3>Patterns חשובים</h3>
<p>Load Balancing, Caching Layers, CDN, Message Queues, Database Replication. כל אחד פותר bottleneck שונה.</p>
<h3>תכנון קיבולת</h3>
<p>חשב את הצמיחה הצפויה, הגדר thresholds ל-scaling, ותכנן load tests סדירים. תמיד תכנן ל-10x העומס הנוכחי.</p>`
      },
      quiz: [
        { question: "מהו ההבדל בין Vertical ל-Horizontal Scaling?", options: ["אין הבדל", "Vertical מגדיל שרת בודד, Horizontal מוסיף שרתים", "Horizontal יותר זול תמיד", "Vertical עדיף תמיד"], correct: 1 },
        { question: "מהו Auto-Scaling?", options: ["Scaling ידני מתוזמן", "הוספה/הסרה אוטומטית של משאבים לפי עומס", "Scaling רק כלפי מעלה", "כיבוי שרתים לא פעילים"], correct: 1 },
        { question: "לכמה עומס כדאי לתכנן?", options: ["עומס נוכחי בדיוק", "כפול מהנוכחי", "10x מהעומס הנוכחי", "100x מהעומס"], correct: 2 }
      ],
      task: "זהה את ה-bottleneck העיקרי במערכת שלך. תכנן 3 שלבי scaling שיפתרו אותו בהדרגה."
    },
    {
      id: 5,
      title: "APIs",
      week: 1,
      lesson: {
        title: "עיצוב APIs ואינטגרציות",
        content: `<h3>API כמוצר</h3>
<p>APIs הם החוזה בין שירותים, צוותות, ושותפים. API טוב הוא פשוט, עקבי, ומתועד היטב.</p>
<h3>סגנונות API</h3>
<div class="concept-card"><strong>REST</strong><br>Standard HTTP, stateless, resource-based. הנפוץ ביותר, קל להבנה</div>
<div class="concept-card"><strong>GraphQL</strong><br>שאילתות גמישות, client מגדיר מה הוא צריך. מפחית over-fetching</div>
<div class="concept-card"><strong>gRPC</strong><br>Protocol Buffers, ביצועים גבוהים, streaming. מתאים לתקשורת פנימית</div>
<div class="concept-card"><strong>WebSocket</strong><br>תקשורת דו-כיוונית בזמן אמת</div>
<h3>עקרונות עיצוב</h3>
<p>Versioning (v1, v2), pagination, rate limiting, authentication (OAuth2, API keys), error handling עקבי, ו-backward compatibility.</p>
<h3>API Gateway</h3>
<p>שכבת ניהול מרכזית: authentication, rate limiting, logging, routing, ו-transformation. כלים: Kong, AWS API Gateway, Nginx.</p>`
      },
      quiz: [
        { question: "מה היתרון של GraphQL על REST?", options: ["מהיר יותר תמיד", "Client מגדיר מה הוא צריך ומפחית over-fetching", "פשוט יותר", "אבטחה טובה יותר"], correct: 1 },
        { question: "מהו API Gateway?", options: ["סוג database", "שכבת ניהול מרכזית ל-APIs", "שפת תכנות", "Framework לפיתוח"], correct: 1 },
        { question: "למה חשוב API Versioning?", options: ["לא חשוב", "כדי לשמור backward compatibility", "כדי להגדיל מהירות", "רק למראית עין"], correct: 1 }
      ],
      task: "תכנן API spec (OpenAPI/Swagger) לשירות חדש. הגדר 5 endpoints עם authentication, pagination, ו-error handling."
    },
    {
      id: 6,
      title: "אבטחת מידע",
      week: 1,
      lesson: {
        title: "Security Architecture",
        content: `<h3>אבטחה כאחריות CTO</h3>
<p>אבטחת מידע היא לא רק של צוות ה-security. כ-CTO, אתה אחראי על התרבות, הארכיטקטורה, והתהליכים שמגנים על הארגון.</p>
<h3>שכבות אבטחה</h3>
<div class="concept-card"><strong>Network Security</strong><br>Firewalls, VPN, network segmentation, DDoS protection</div>
<div class="concept-card"><strong>Application Security</strong><br>Input validation, OWASP Top 10, secure coding practices</div>
<div class="concept-card"><strong>Data Security</strong><br>Encryption at rest ו-in transit, key management, data classification</div>
<div class="concept-card"><strong>Identity & Access</strong><br>Zero Trust, MFA, RBAC, principle of least privilege</div>
<h3>Security by Design</h3>
<p>אבטחה צריכה להיות חלק מכל שלב: design review, code review, CI/CD pipeline (SAST/DAST), ו-production monitoring.</p>
<h3>Incident Response</h3>
<p>תוכנית תגובה מוגדרת: detection, containment, eradication, recovery, lessons learned. תרגול תקופתי.</p>`
      },
      quiz: [
        { question: "מהו עקרון Zero Trust?", options: ["לסמוך על כל מי שברשת הפנימית", "אף אחד לא מהימן כברירת מחדל, תמיד לאמת", "לחסום את כל התעבורה", "לא להשתמש ב-cloud"], correct: 1 },
        { question: "מהו OWASP Top 10?", options: ["10 שפות תכנות מאובטחות", "רשימת 10 סיכוני אבטחה נפוצים ביישומי web", "10 כלי אבטחה מומלצים", "10 חברות אבטחה"], correct: 1 },
        { question: "מהו Principle of Least Privilege?", options: ["לתת לכולם admin access", "לתת למשתמש רק את ההרשאות המינימליות הנדרשות", "למנוע גישה לכולם", "להגביל רק משתמשים חיצוניים"], correct: 1 },
        { question: "מה כולל Incident Response Plan?", options: ["רק detection", "Detection, containment, eradication, recovery, lessons learned", "רק recovery", "רק דיווח להנהלה"], correct: 1 }
      ],
      task: "בצע security audit בסיסי: מפה 5 נקודות תורפה פוטנציאליות במערכת שלך והגדר mitigation plan לכל אחת."
    },
    {
      id: 7,
      title: "CI/CD",
      week: 1,
      lesson: {
        title: "CI/CD ותהליכי פריסה",
        content: `<h3>Continuous Integration & Delivery</h3>
<p>CI/CD הוא עמוד השדרה של פיתוח מודרני. הוא מאפשר פריסות מהירות, בטוחות, וחוזרות.</p>
<h3>שלבי Pipeline</h3>
<div class="concept-card"><strong>Build</strong><br>קומפילציה, dependency resolution, Docker image build</div>
<div class="concept-card"><strong>Test</strong><br>Unit tests, integration tests, E2E tests, security scans</div>
<div class="concept-card"><strong>Deploy to Staging</strong><br>פריסה לסביבת בדיקות, smoke tests</div>
<div class="concept-card"><strong>Deploy to Production</strong><br>Blue/Green, Canary, Rolling updates</div>
<h3>אסטרטגיות פריסה</h3>
<p>Blue/Green: שתי סביבות מקבילות. Canary: פריסה הדרגתית ל-% קטן. Feature Flags: שליטה ב-features ללא פריסה.</p>
<h3>מדדים חשובים (DORA)</h3>
<p>Deployment Frequency, Lead Time for Changes, Change Failure Rate, Mean Time to Recovery. אלה מדדים שכל CTO צריך לעקוב אחריהם.</p>`
      },
      quiz: [
        { question: "מהו Canary Deployment?", options: ["פריסה לכל המשתמשים בבת אחת", "פריסה הדרגתית לאחוז קטן של משתמשים", "פריסה רק בלילה", "פריסה ידנית"], correct: 1 },
        { question: "מהם מדדי DORA?", options: ["שם של כלי CI/CD", "4 מדדים לביצועי delivery: frequency, lead time, failure rate, MTTR", "מדדי אבטחה", "מדדי UX"], correct: 1 },
        { question: "מהו Feature Flag?", options: ["באג בקוד", "שליטה ב-features ללא פריסה חדשה", "סוג של branch ב-Git", "הרשאת משתמש"], correct: 1 }
      ],
      task: "מפה את ה-CI/CD pipeline הנוכחי שלך. זהה 3 שיפורים שיקצרו את ה-lead time ב-50%."
    },
    {
      id: 8,
      title: "גיוס טכנולוגי",
      week: 2,
      lesson: {
        title: "גיוס והרכבת צוות טכנולוגי",
        content: `<h3>בניית צוות מנצח</h3>
<p>גיוס הוא אחת המשימות הקריטיות ביותר של CTO. צוות חזק הוא ההבדל בין הצלחה לכישלון.</p>
<h3>תהליך גיוס אפקטיבי</h3>
<div class="concept-card"><strong>הגדרת תפקיד</strong><br>מה באמת נדרש? skills, culture fit, growth potential</div>
<div class="concept-card"><strong>Sourcing</strong><br>LinkedIn, referrals, communities, meetups, open source</div>
<div class="concept-card"><strong>Technical Assessment</strong><br>Take-home, pair programming, system design. לא חידות!</div>
<div class="concept-card"><strong>Culture Fit</strong><br>ערכים, סגנון עבודה, collaboration, growth mindset</div>
<h3>מה לחפש</h3>
<p>יכולת למידה מהירה, communication skills, ownership, יכולת לעבוד בצוות, curiosity. Skills טכניים אפשר ללמד.</p>
<h3>Onboarding</h3>
<p>90 יום ראשונים קריטיים: buddy system, clear goals, regular check-ins, documentation מוכנה, first win מהיר.</p>`
      },
      quiz: [
        { question: "מהו הדבר החשוב ביותר לחפש במועמד?", options: ["ניסיון של 10 שנים", "יכולת למידה מהירה ו-growth mindset", "ידע ב-framework ספציפי", "תואר מאוניברסיטה מובילה"], correct: 1 },
        { question: "מהו onboarding אפקטיבי?", options: ["לזרוק למים עמוקים", "Buddy system, clear goals, documentation, first win מהיר", "שבוע של הרצאות", "רק קריאת קוד"], correct: 1 },
        { question: "מהי הדרך הטובה ביותר להעריך מועמד טכני?", options: ["חידות אלגוריתמיות", "Pair programming או system design", "רק ראיון שיחה", "רק בדיקת קורות חיים"], correct: 1 }
      ],
      task: "כתוב job description לתפקיד הבא שאתה צריך לגייס. הגדר: must-have vs nice-to-have, תהליך הגיוס, ו-onboarding plan."
    },
    {
      id: 9,
      title: "Code Reviews",
      week: 2,
      lesson: {
        title: "תרבות Code Review אפקטיבית",
        content: `<h3>Code Review כמנוף ללמידה</h3>
<p>Code review הוא לא רק בדיקת באגים. הוא כלי לשיתוף ידע, העלאת איכות, ויצירת תרבות של שיפור מתמיד.</p>
<h3>עקרונות Review טוב</h3>
<div class="concept-card"><strong>Be Kind</strong><br>הערות בונות, לא ביקורת אישית. "What about..." במקום "This is wrong"</div>
<div class="concept-card"><strong>Be Specific</strong><br>הצע פתרון, לא רק ציין בעיה</div>
<div class="concept-card"><strong>Be Timely</strong><br>Review תוך 24 שעות. PR ארוך = productivity killer</div>
<div class="concept-card"><strong>Size Matters</strong><br>PRs קטנים (200-400 שורות). קל לעשות review, קל לעשות merge</div>
<h3>מה לבדוק</h3>
<p>Logic correctness, edge cases, security implications, performance, readability, test coverage, documentation.</p>
<h3>Automation</h3>
<p>Linters, formatters, static analysis, automated tests חייבים לעבור לפני review אנושי. חוסך זמן לכולם.</p>`
      },
      quiz: [
        { question: "מהו הגודל האידיאלי ל-PR?", options: ["1000+ שורות", "200-400 שורות", "10 שורות", "לא משנה הגודל"], correct: 1 },
        { question: "מהו העיקרון הכי חשוב ב-code review?", options: ["למצוא כמה שיותר באגים", "הערות בונות והצעת פתרונות", "לדחות כמה שיותר PRs", "לסיים מהר"], correct: 1 },
        { question: "מה צריך לרוץ אוטומטית לפני review אנושי?", options: ["כלום", "Linters, formatters, static analysis, tests", "רק unit tests", "רק formatting"], correct: 1 }
      ],
      task: "הגדר code review guidelines לצוות שלך: SLA, checklist, PR size limit, ו-automation tools."
    },
    {
      id: 10,
      title: "פגישות 1:1",
      week: 2,
      lesson: {
        title: "ניהול פגישות 1:1 אפקטיביות",
        content: `<h3>1:1 כמנוף לצמיחה</h3>
<p>פגישות 1:1 הן הכלי החשוב ביותר שלך כמנהל. זה הזמן של העובד, לא שלך. מטרתן: פיתוח, הקשבה, הסרת חסמים.</p>
<h3>מבנה פגישה</h3>
<div class="concept-card"><strong>Check-in (5 דק)</strong><br>מה שלומך? מה מעסיק אותך? איך אתה מרגיש?</div>
<div class="concept-card"><strong>נושאי העובד (15 דק)</strong><br>מה העובד רוצה לדבר עליו? challenges, ideas, concerns</div>
<div class="concept-card"><strong>Feedback (10 דק)</strong><br>נתינה וקבלה של feedback. ספציפי, actionable, timely</div>
<div class="concept-card"><strong>Growth (10 דק)</strong><br>מטרות, התפתחות מקצועית, מה הצעד הבא?</div>
<h3>טעויות נפוצות</h3>
<p>לבטל פגישות, להפוך ל-status update, לדבר רק על tasks, להתעלם מרגשות, לא לעקוב אחרי action items.</p>
<h3>תיעוד</h3>
<p>רשום notes משותפים, action items עם deadlines, ו-follow up בפגישה הבאה. Consistency builds trust.</p>`
      },
      quiz: [
        { question: "של מי הזמן בפגישת 1:1?", options: ["של המנהל", "של העובד", "של שניהם שווה", "של HR"], correct: 1 },
        { question: "מהי הטעות הנפוצה ביותר ב-1:1?", options: ["לדבר יותר מדי על growth", "להפוך ל-status update", "לתת יותר מדי feedback", "להקשיב יותר מדי"], correct: 1 },
        { question: "מה חשוב לעשות בסוף כל 1:1?", options: ["לבטל את הפגישה הבאה", "לרשום action items ולעקוב", "לשלוח סיכום ל-HR", "כלום"], correct: 1 }
      ],
      task: "תכנן template ל-1:1 שלך. הגדר תדירות, מבנה, שאלות מנחות, ו-tracking system ל-action items."
    },
    {
      id: 11,
      title: "Sprint Planning",
      week: 2,
      lesson: {
        title: "תכנון ספרינטים וניהול Agile",
        content: `<h3>Agile בעולם האמיתי</h3>
<p>Agile הוא לא טקס, הוא mindset. כ-CTO, תפקידך להבטיח שהתהליך משרת את הצוות ולא להיפך.</p>
<h3>Sprint Planning אפקטיבי</h3>
<div class="concept-card"><strong>Backlog Refinement</strong><br>Stories מוכנות לפני planning. Clear acceptance criteria, sized correctly</div>
<div class="concept-card"><strong>Capacity Planning</strong><br>כמה הצוות באמת יכול לסיים? חופשות, meetings, tech debt</div>
<div class="concept-card"><strong>Sprint Goal</strong><br>מטרה ברורה אחת לספרינט. לא רשימת קניות</div>
<div class="concept-card"><strong>Definition of Done</strong><br>Code reviewed, tested, documented, deployed to staging</div>
<h3>מדדים</h3>
<p>Velocity (ממוצע, לא יעד), Burndown chart, Cycle time, Blocked items. השתמש במדדים ללמידה, לא לשיפוט.</p>
<h3>Retro</h3>
<p>Retrospective אפקטיבית: what went well, what can improve, action items. חובה action item אחד לפחות שמיושם בספרינט הבא.</p>`
      },
      quiz: [
        { question: "מהו Sprint Goal?", options: ["רשימת כל ה-tasks", "מטרה ברורה אחת לספרינט", "מספר ה-story points", "Deadline של הספרינט"], correct: 1 },
        { question: "מתי צריך לעשות Backlog Refinement?", options: ["באמצע הספרינט, לפני planning הבא", "ביום האחרון של הספרינט", "רק פעם בחודש", "רק כשה-backlog ריק"], correct: 0 },
        { question: "מה חשוב ב-Retro?", options: ["להאשים מישהו", "Action item שמיושם בספרינט הבא", "לדבר 3 שעות", "רק להגיד מה היה טוב"], correct: 1 }
      ],
      task: "הגדר Definition of Done לצוות שלך. כולל: criteria טכניים, documentation, testing, ו-deployment."
    },
    {
      id: 12,
      title: "Tech Debt",
      week: 2,
      lesson: {
        title: "ניהול חוב טכני",
        content: `<h3>Tech Debt כמציאות</h3>
<p>חוב טכני הוא לא תמיד רע. לפעמים זה tradeoff מודע. הבעיה מתחילה כשלא מנהלים אותו באופן אקטיבי.</p>
<h3>סוגי חוב טכני</h3>
<div class="concept-card"><strong>Deliberate</strong><br>החלטה מודעת לקצר דרך (ship fast, fix later)</div>
<div class="concept-card"><strong>Accidental</strong><br>נוצר מחוסר ידע או שינוי requirements</div>
<div class="concept-card"><strong>Bit Rot</strong><br>הקוד מתיישן: dependencies, patterns, standards</div>
<div class="concept-card"><strong>Environmental</strong><br>תשתית מיושנת, tools לא מתוחזקים</div>
<h3>ניהול אקטיבי</h3>
<p>תקצב 20% מכל ספרינט ל-tech debt. תעדף לפי: impact on velocity, risk, ו-cost to fix later vs now.</p>
<h3>איך למכור ל-stakeholders</h3>
<p>דבר בשפה עסקית: "זה יגרום לנו לפתח features 30% יותר מהר", "זה מקטין סיכון של downtime ב-X", "זה חוסך Y שעות בשבוע".</p>`
      },
      quiz: [
        { question: "כמה זמן לתקצב ל-tech debt בכל ספרינט?", options: ["0%", "כ-20%", "50%", "100%"], correct: 1 },
        { question: "מהו Deliberate Tech Debt?", options: ["באג שלא מצאנו", "החלטה מודעת לקצר דרך", "קוד שנכתב בלילה", "Dependency מיושן"], correct: 1 },
        { question: "איך למכור tech debt refactoring ל-stakeholders?", options: ["לדבר על קוד נקי", "לדבר בשפה עסקית: מהירות, סיכון, חיסכון", "לאיים בהתפטרות", "לא לספר להם"], correct: 1 }
      ],
      task: "צור tech debt registry: רשום 10 פריטי tech debt, דרג כל אחד לפי urgency ו-impact, ותכנן טיפול ל-3 העליונים."
    },
    {
      id: 13,
      title: "Mentoring",
      week: 2,
      lesson: {
        title: "חניכה ופיתוח אנשים",
        content: `<h3>מנהיג שמפתח מנהיגים</h3>
<p>CTO מעולה לא רק בונה מערכות, הוא בונה אנשים. ההשקעה בפיתוח הצוות מחזירה את עצמה פי כמה.</p>
<h3>סגנונות חניכה</h3>
<div class="concept-card"><strong>Coaching</strong><br>שאלות מנחות שגורמות לאדם למצוא את התשובה בעצמו</div>
<div class="concept-card"><strong>Teaching</strong><br>העברת ידע ישירה כשמישהו חדש בתחום</div>
<div class="concept-card"><strong>Sponsoring</strong><br>לדחוף אנשים להזדמנויות שהם לא היו לוקחים לבד</div>
<div class="concept-card"><strong>Role Modeling</strong><br>להדגים את ההתנהגות שאתה מצפה לראות</div>
<h3>Career Ladder</h3>
<p>הגדר מסלול קידום ברור: Junior, Mid, Senior, Staff, Principal. לכל רמה: expectations, skills, impact.</p>
<h3>Growth Plans</h3>
<p>לכל אדם בצוות: מטרות ל-6 חודשים, areas for development, resources, ו-check-in points.</p>`
      },
      quiz: [
        { question: "מהו ההבדל בין Coaching ל-Teaching?", options: ["אין הבדל", "Coaching שואל שאלות, Teaching מעביר ידע ישירות", "Teaching עדיף תמיד", "Coaching רק למנהלים"], correct: 1 },
        { question: "מהו Sponsoring?", options: ["לתת כסף", "לדחוף אנשים להזדמנויות שהם לא היו לוקחים לבד", "לכתוב המלצה", "לקדם אוטומטית"], correct: 1 },
        { question: "מה כולל Career Ladder טוב?", options: ["רק שמות תפקידים", "Expectations, skills, impact לכל רמה", "רק טבלת שכר", "רק שנות ניסיון"], correct: 1 }
      ],
      task: "בנה growth plan לאחד מאנשי הצוות: מטרות 6 חודשים, areas for development, resources, ו-milestones."
    },
    {
      id: 14,
      title: "ניהול קונפליקטים",
      week: 2,
      lesson: {
        title: "פתרון קונפליקטים בצוות",
        content: `<h3>קונפליקט כהזדמנות</h3>
<p>קונפליקטים הם בלתי נמנעים בצוותים טובים. הם סימן שאנשים אכפתיים. המפתח הוא לנהל אותם בצורה בריאה.</p>
<h3>סוגי קונפליקטים</h3>
<div class="concept-card"><strong>Technical Disagreements</strong><br>אי הסכמה על ארכיטקטורה, tools, approaches</div>
<div class="concept-card"><strong>Process Conflicts</strong><br>חיכוכים על דרך העבודה, priorities</div>
<div class="concept-card"><strong>Interpersonal</strong><br>חיכוכים אישיים, communication styles שונים</div>
<div class="concept-card"><strong>Resource Conflicts</strong><br>תחרות על זמן, budget, headcount</div>
<h3>כלים לפתרון</h3>
<p>Active listening, finding common ground, data-driven decisions, RFC process ל-technical decisions, clear ownership.</p>
<h3>מתי להתערב</h3>
<p>כשהקונפליקט משתק את הצוות, כשהוא הופך אישי, או כשאין פתרון אחרי ניסיון ישיר. לפעמים ההחלטה היא שלך.</p>`
      },
      quiz: [
        { question: "מתי קונפליקט הוא סימן טוב?", options: ["אף פעם", "כשאנשים אכפתיים ומביעים דעות שונות בצורה בריאה", "כשצועקים", "כשמישהו עוזב"], correct: 1 },
        { question: "מהו RFC Process?", options: ["סוג של bug report", "תהליך מובנה לקבלת החלטות טכניות עם input מכולם", "ראיון עבודה", "Code review"], correct: 1 },
        { question: "מתי CTO צריך להתערב בקונפליקט?", options: ["מיד בכל מחלוקת", "כשהקונפליקט משתק או הופך אישי", "אף פעם", "רק אם HR מבקש"], correct: 1 }
      ],
      task: "זכור קונפליקט אחרון בצוות. נתח: מה הגורם האמיתי? מה עבד בפתרון? מה היית עושה אחרת?"
    },
    {
      id: 15,
      title: "Roadmap",
      week: 3,
      lesson: {
        title: "תכנון Roadmap טכנולוגי",
        content: `<h3>Roadmap כמצפן</h3>
<p>Technical roadmap מחבר בין האסטרטגיה העסקית ליכולות הטכנולוגיות. הוא מדריך החלטות ומתאם ציפיות.</p>
<h3>רכיבי Roadmap</h3>
<div class="concept-card"><strong>Vision (12-18 חודשים)</strong><br>לאן אנחנו הולכים? North star טכנולוגי</div>
<div class="concept-card"><strong>Strategy (6 חודשים)</strong><br>אילו יכולות צריך לבנות? Priorities ו-trade-offs</div>
<div class="concept-card"><strong>Execution (3 חודשים)</strong><br>מה בונים עכשיו? Clear deliverables, owners, timelines</div>
<div class="concept-card"><strong>Discovery (Ongoing)</strong><br>Spikes, POCs, research לעתיד</div>
<h3>טעויות נפוצות</h3>
<p>Roadmap rigidity (חייב להיות living document), over-commitment, לא לכלול tech debt, לא לשתף stakeholders.</p>
<h3>Communication</h3>
<p>Roadmap שונה לקהלים שונים: board (high-level), product (capabilities), engineering (technical details).</p>`
      },
      quiz: [
        { question: "מהו הטווח המומלץ ל-Vision ב-roadmap?", options: ["שבוע", "חודש", "12-18 חודשים", "5 שנים"], correct: 2 },
        { question: "מהי הטעות הנפוצה ביותר ב-roadmap?", options: ["יותר מדי פירוט", "Rigidity וחוסר עדכון", "יותר מדי discovery", "שיתוף עם הצוות"], correct: 1 },
        { question: "למה חשוב roadmap שונה לקהלים שונים?", options: ["כדי להסתיר מידע", "כי כל קהל צריך רמת פירוט ושפה שונה", "כדי ליצור בלבול", "לא חשוב"], correct: 1 }
      ],
      task: "בנה technical roadmap ל-6 חודשים הבאים: vision, 3 strategic themes, ו-deliverables ל-Q1."
    },
    {
      id: 16,
      title: "Buy vs Build",
      week: 3,
      lesson: {
        title: "החלטות Buy vs Build",
        content: `<h3>לבנות או לקנות?</h3>
<p>אחת ההחלטות הנפוצות ביותר של CTO. התשובה לא תמיד ברורה, וטעות כאן עולה ביוקר.</p>
<h3>מתי לבנות</h3>
<div class="concept-card"><strong>Core Differentiator</strong><br>זה מה שמבדיל אתכם מהמתחרים</div>
<div class="concept-card"><strong>Full Control Needed</strong><br>צריך שליטה מלאה על roadmap ו-customization</div>
<div class="concept-card"><strong>Long-term Investment</strong><br>ROI ברור לטווח ארוך</div>
<div class="concept-card"><strong>Existing Expertise</strong><br>יש לצוות את היכולת לבנות ולתחזק</div>
<h3>מתי לקנות</h3>
<p>Commodity functionality (auth, payments, email), time to market קריטי, אין expertise פנימי, לא core business.</p>
<h3>Framework להחלטה</h3>
<p>שאל: האם זה core differentiator? מה TCO ל-3 שנים? יש expertise? מה הסיכון? מה Time to Market?</p>`
      },
      quiz: [
        { question: "מתי כדאי לבנות בעצמך?", options: ["תמיד", "כשזה core differentiator ויש expertise", "כשזה זול יותר בהתחלה", "כשאין פתרון בשוק"], correct: 1 },
        { question: "מהו TCO?", options: ["סוג של API", "Total Cost of Ownership - עלות כוללת לאורך זמן", "שם של מתודולוגיה", "כלי monitoring"], correct: 1 },
        { question: "Authentication הוא בדרך כלל?", options: ["Core differentiator שצריך לבנות", "Commodity שעדיף לקנות", "לא חשוב", "תמיד לבנות"], correct: 1 }
      ],
      task: "בחר 3 רכיבים במערכת שלך. לכל אחד, נתח: build vs buy, TCO ל-3 שנים, ו-decision rationale."
    },
    {
      id: 17,
      title: "Tech Stack",
      week: 3,
      lesson: {
        title: "בחירת Technology Stack",
        content: `<h3>החלטה שמשפיעה לשנים</h3>
<p>בחירת tech stack היא החלטה שקשה לשנות. היא משפיעה על גיוס, מהירות פיתוח, ביצועים, ותחזוקה.</p>
<h3>קריטריונים לבחירה</h3>
<div class="concept-card"><strong>Team Expertise</strong><br>מה הצוות מכיר? Ramp-up time הוא real cost</div>
<div class="concept-card"><strong>Ecosystem</strong><br>Libraries, tools, community, documentation</div>
<div class="concept-card"><strong>Hiring Pool</strong><br>כמה מפתחים בשוק? עלות גיוס?</div>
<div class="concept-card"><strong>Performance & Scale</strong><br>האם עומד בדרישות הנוכחיות והעתידיות?</div>
<h3>Boring Technology</h3>
<p>Innovation tokens: יש לך 2-3 tokens לטכנולוגיות חדשות. השאר צריך להיות "משעמם" ומוכח. PostgreSQL, React, Go/Node.js.</p>
<h3>Technology Radar</h3>
<p>נהל radar פנימי: Adopt (השתמש), Trial (נסה ב-POC), Assess (חקור), Hold (אל תתחיל חדש).</p>`
      },
      quiz: [
        { question: "מהם Innovation Tokens?", options: ["Budget לכנסים", "2-3 הזדמנויות לטכנולוגיות חדשות, השאר מוכח", "קופונים ל-SaaS", "שם של framework"], correct: 1 },
        { question: "מהו הקריטריון הכי חשוב בבחירת stack?", options: ["שזה חדש וטרנדי", "Team expertise ו-ecosystem", "שזה של Google", "Performance בלבד"], correct: 1 },
        { question: "מהו Technology Radar?", options: ["כלי monitoring", "מיפוי טכנולוגיות: Adopt, Trial, Assess, Hold", "רשת אלחוטית", "סוג של CI/CD"], correct: 1 }
      ],
      task: "צור Technology Radar לארגון שלך: 4 קטגוריות (Adopt/Trial/Assess/Hold) עם 3 טכנולוגיות בכל אחת."
    },
    {
      id: 18,
      title: "MVP",
      week: 3,
      lesson: {
        title: "מתודולוגיית MVP ופיתוח מהיר",
        content: `<h3>Ship Fast, Learn Fast</h3>
<p>MVP הוא לא מוצר גרוע. הוא הגרסה הקטנה ביותר שמאפשרת ללמוד מלקוחות אמיתיים.</p>
<h3>עקרונות MVP</h3>
<div class="concept-card"><strong>One Core Value</strong><br>מה ה-hypothesis? מה ה-value proposition האחד שנבדוק?</div>
<div class="concept-card"><strong>Time-box</strong><br>2-4 שבועות maximum. אם לוקח יותר, אתה בונה יותר מדי</div>
<div class="concept-card"><strong>Measurable</strong><br>הגדר metrics להצלחה לפני שמתחילים</div>
<div class="concept-card"><strong>Throwaway Mindset</strong><br>אולי נזרוק הכל. וזה בסדר</div>
<h3>טכניקות</h3>
<p>Wizard of Oz (ידני מאחורי הקלעים), Concierge MVP, Landing Page Test, Fake Door Test, Paper Prototyping.</p>
<h3>Technical Shortcuts</h3>
<p>No-code tools, third-party APIs, hardcoded values, limited scale. הכל legitimate כדי ללמוד מהר.</p>`
      },
      quiz: [
        { question: "מהו הזמן המומלץ ל-MVP?", options: ["6 חודשים", "2-4 שבועות", "יום אחד", "שנה"], correct: 1 },
        { question: "מהו Wizard of Oz MVP?", options: ["MVP עם UI יפה", "תהליך ידני מאחורי הקלעים שנראה אוטומטי", "MVP ללא קוד", "MVP רק ל-testing"], correct: 1 },
        { question: "מה חייב להיות מוגדר לפני תחילת MVP?", options: ["כל ה-architecture", "Metrics להצלחה", "Full test coverage", "Design system"], correct: 1 }
      ],
      task: "בחר feature שאתה שוקל לבנות. הגדר: hypothesis, MVP scope (2 שבועות), success metrics, ו-kill criteria."
    },
    {
      id: 19,
      title: "Data-Driven",
      week: 3,
      lesson: {
        title: "קבלת החלטות מבוססות נתונים",
        content: `<h3>מנתונים להחלטות</h3>
<p>CTO שמקבל החלטות על בסיס gut feeling בלבד מסתכן. נתונים לא מחליפים אינטואיציה, הם משלימים אותה.</p>
<h3>סוגי נתונים</h3>
<div class="concept-card"><strong>Product Metrics</strong><br>DAU, retention, conversion, feature adoption</div>
<div class="concept-card"><strong>Engineering Metrics</strong><br>DORA metrics, code quality, tech debt ratio</div>
<div class="concept-card"><strong>Business Metrics</strong><br>Revenue, CAC, LTV, churn</div>
<div class="concept-card"><strong>Team Metrics</strong><br>Satisfaction, turnover, hiring pipeline</div>
<h3>Data Infrastructure</h3>
<p>Event tracking, data warehouse, analytics dashboards, A/B testing framework. השקעה ב-infra מחזירה את עצמה.</p>
<h3>פיטפולים</h3>
<p>Vanity metrics, correlation vs causation, survivorship bias, over-optimization, analysis paralysis.</p>`
      },
      quiz: [
        { question: "מהם DORA Metrics?", options: ["מדדי UX", "4 מדדים לביצועי delivery של צוות engineering", "מדדי marketing", "מדדי אבטחה"], correct: 1 },
        { question: "מהם Vanity Metrics?", options: ["מדדים שנראים טוב אבל לא actionable", "מדדי design", "מדדים יקרים", "מדדים מדויקים מאוד"], correct: 0 },
        { question: "מה הסכנה של Analysis Paralysis?", options: ["יותר מדי נתונים מונעים מלקבל החלטה", "חוסר נתונים", "נתונים שגויים", "מדדים יקרים"], correct: 0 }
      ],
      task: "הגדר dashboard עם 5 מדדים קריטיים לצוות שלך. לכל מדד: מקור, target, ו-action plan אם חורג."
    },
    {
      id: 20,
      title: "KPIs",
      week: 3,
      lesson: {
        title: "הגדרת KPIs טכנולוגיים",
        content: `<h3>מדידה שמניעה שינוי</h3>
<p>KPIs טובים מנחים התנהגות, מדידים, ומתחברים ליעדים עסקיים. KPIs גרועים יוצרים incentives שליליים.</p>
<h3>KPIs מומלצים ל-CTO</h3>
<div class="concept-card"><strong>System Reliability</strong><br>Uptime (99.9%+), MTTR, Error rate, P95 latency</div>
<div class="concept-card"><strong>Delivery Speed</strong><br>Deploy frequency, Lead time, Cycle time</div>
<div class="concept-card"><strong>Quality</strong><br>Bug escape rate, Test coverage, Production incidents</div>
<div class="concept-card"><strong>Team Health</strong><br>eNPS, Retention rate, Time to productive</div>
<h3>OKRs vs KPIs</h3>
<p>KPIs הם מדדים שוטפים (health metrics). OKRs הם יעדים שאפתניים לרבעון (change metrics). שניהם חשובים.</p>
<h3>הצגה להנהלה</h3>
<p>תרגם KPIs טכניים לשפה עסקית: uptime = customer trust, lead time = time to revenue, quality = churn reduction.</p>`
      },
      quiz: [
        { question: "מהו eNPS?", options: ["סוג של API", "Employee Net Promoter Score - מדד שביעות רצון עובדים", "כלי monitoring", "מדד ביצועי database"], correct: 1 },
        { question: "מה ההבדל בין KPIs ל-OKRs?", options: ["אין הבדל", "KPIs = health metrics שוטפים, OKRs = יעדים שאפתניים לרבעון", "OKRs יותר חשובים", "KPIs רק לצוות"], correct: 1 },
        { question: "מהו Uptime SLA טיפוסי?", options: ["90%", "95%", "99.9%+", "100%"], correct: 2 }
      ],
      task: "הגדר 3 OKRs לרבעון הבא עם KPIs תומכים. לכל OKR: objective, 3 key results מדידים, ו-initiatives."
    },
    {
      id: 21,
      title: "ניהול ספקים",
      week: 3,
      lesson: {
        title: "Vendor Management",
        content: `<h3>ניהול יחסי ספקים</h3>
<p>ארגון ממוצע משתמש ב-50-100 כלי SaaS. ניהול נכון חוסך כסף, מפחית סיכון, ומשפר productivity.</p>
<h3>תהליך בחירת ספק</h3>
<div class="concept-card"><strong>Requirements</strong><br>מה באמת צריך? Must-have vs nice-to-have</div>
<div class="concept-card"><strong>Evaluation</strong><br>POC, reference checks, security review, pricing model</div>
<div class="concept-card"><strong>Negotiation</strong><br>Multi-year discounts, SLA guarantees, exit clauses</div>
<div class="concept-card"><strong>Ongoing Management</strong><br>QBRs, usage monitoring, renewal strategy</div>
<h3>סיכונים</h3>
<p>Vendor lock-in, price increases, security breaches, sunset of product, single point of failure.</p>
<h3>Exit Strategy</h3>
<p>תמיד תכנן exit: data export, API abstraction layer, alternative vendors identified. אל תהיה בן ערובה.</p>`
      },
      quiz: [
        { question: "מהו QBR?", options: ["סוג של database", "Quarterly Business Review עם הספק", "Quality Bug Report", "Queue Based Routing"], correct: 1 },
        { question: "מהי הדרך הטובה להתגונן מ-vendor lock-in?", options: ["לא להשתמש בספקים", "API abstraction layer ותכנון exit strategy", "לבנות הכל in-house", "לחתום על חוזה ארוך"], correct: 1 },
        { question: "מה חשוב לבדוק לפני בחירת ספק?", options: ["רק מחיר", "POC, security review, references, pricing model", "רק UI", "רק popularity"], correct: 1 }
      ],
      task: "צור vendor matrix: רשום 5 ספקים מרכזיים, לכל אחד: עלות שנתית, risk level, alternative, contract renewal date."
    },
    {
      id: 22,
      title: "Incident Management",
      week: 4,
      lesson: {
        title: "ניהול תקריות",
        content: `<h3>כשהמערכת נופלת</h3>
<p>Incidents יקרו. השאלה היא לא אם, אלא מתי. ההבדל בין ארגון בשל לחובבני הוא בתהליך התגובה.</p>
<h3>Incident Response</h3>
<div class="concept-card"><strong>Detection</strong><br>Monitoring, alerts, customer reports. MTTD קריטי</div>
<div class="concept-card"><strong>Triage</strong><br>Severity classification (P1-P4), incident commander, communication</div>
<div class="concept-card"><strong>Resolution</strong><br>Troubleshooting, mitigation, fix. Document everything</div>
<div class="concept-card"><strong>Post-mortem</strong><br>Blameless, root cause, action items, timeline</div>
<h3>Severity Levels</h3>
<p>P1: Full outage. P2: Major feature broken. P3: Minor issue, workaround exists. P4: Cosmetic/low impact.</p>
<h3>On-Call</h3>
<p>Rotation schedule, escalation paths, runbooks, compensation. אל תשחק את האנשים שלך.</p>`
      },
      quiz: [
        { question: "מהו Blameless Post-mortem?", options: ["לא לעשות post-mortem", "ניתוח ללא האשמת אנשים, focus על מערכת ותהליך", "להאשים את כולם", "רק לדווח לצוות"], correct: 1 },
        { question: "מהו P1 incident?", options: ["באג קוסמטי", "Full outage שמשפיע על כל המשתמשים", "Feature request", "שיפור ביצועים"], correct: 1 },
        { question: "מהו MTTD?", options: ["Mean Time To Deploy", "Mean Time To Detect - זמן ממוצע לזיהוי בעיה", "Maximum Transfer Time Data", "Multi-Tenant Test Driver"], correct: 1 }
      ],
      task: "כתוב incident response playbook: severity definitions, roles, escalation paths, communication templates, post-mortem template."
    },
    {
      id: 23,
      title: "SRE",
      week: 4,
      lesson: {
        title: "Site Reliability Engineering",
        content: `<h3>SRE Practices</h3>
<p>SRE מגשר בין development ל-operations. המטרה: מערכות אמינות שמתפתחות מהר.</p>
<h3>עקרונות SRE</h3>
<div class="concept-card"><strong>SLO/SLI/SLA</strong><br>Service Level Objectives, Indicators, Agreements. הגדר יעדים מדידים</div>
<div class="concept-card"><strong>Error Budget</strong><br>כמה downtime מותר? אם נגמר, freeze deployments</div>
<div class="concept-card"><strong>Toil Reduction</strong><br>אוטומציה של עבודה חוזרת. אם עושים ידנית, זה toil</div>
<div class="concept-card"><strong>Observability</strong><br>Logs, Metrics, Traces. שלושת עמודי התווך</div>
<h3>Observability Stack</h3>
<p>Metrics (Prometheus/Datadog), Logs (ELK/Loki), Traces (Jaeger/Honeycomb), Dashboards (Grafana).</p>
<h3>Chaos Engineering</h3>
<p>שבור דברים בכוונה כדי למצוא weaknesses. Netflix Chaos Monkey, Game Days, Disaster Recovery drills.</p>`
      },
      quiz: [
        { question: "מהו Error Budget?", options: ["Budget לתיקון באגים", "כמות ה-downtime המותרת לפני freeze", "Budget לכלי monitoring", "שם של כלי"], correct: 1 },
        { question: "מהם 3 עמודי Observability?", options: ["CPU, RAM, Disk", "Logs, Metrics, Traces", "Dev, Staging, Prod", "Frontend, Backend, DB"], correct: 1 },
        { question: "מהו Chaos Engineering?", options: ["לשבור דברים בטעות", "לשבור דברים בכוונה כדי למצוא weaknesses", "Programming style מבולגן", "Debugging methodology"], correct: 1 }
      ],
      task: "הגדר SLOs ל-3 שירותים קריטיים: availability target, latency P95, error rate. חשב את ה-error budget החודשי."
    },
    {
      id: 24,
      title: "תקציב טכנולוגי",
      week: 4,
      lesson: {
        title: "ניהול Budget טכנולוגי",
        content: `<h3>CTO כמנהל תקציב</h3>
<p>ניהול budget הוא חלק בלתי נפרד מתפקיד ה-CTO. חובה להבין עלויות, לתקצב נכון, ולהצדיק השקעות.</p>
<h3>קטגוריות הוצאה</h3>
<div class="concept-card"><strong>People (60-70%)</strong><br>משכורות, benefits, contractors, training</div>
<div class="concept-card"><strong>Infrastructure (15-25%)</strong><br>Cloud, hosting, tools, licenses</div>
<div class="concept-card"><strong>Vendors (5-15%)</strong><br>SaaS tools, external services</div>
<div class="concept-card"><strong>Innovation (5-10%)</strong><br>R&D, POCs, hackathons, conferences</div>
<h3>תכנון תקציב שנתי</h3>
<p>Bottom-up: מה כל צוות צריך. Top-down: מה הארגון יכול. הפער ביניהם הוא שיחת priorities.</p>
<h3>ROI של השקעות טכנולוגיות</h3>
<p>מדוד: time saved, revenue enabled, risk reduced, hiring impact. תמיד תרגם לדולרים.</p>`
      },
      quiz: [
        { question: "מהו האחוז הטיפוסי של People בתקציב tech?", options: ["20-30%", "40-50%", "60-70%", "90%"], correct: 2 },
        { question: "איך מצדיקים השקעה טכנולוגית?", options: ["כי זה cool", "ROI: time saved, revenue enabled, risk reduced", "כי המתחרים עושים", "לא צריך להצדיק"], correct: 1 },
        { question: "מהו הגישה הנכונה לתכנון budget?", options: ["רק top-down", "רק bottom-up", "שילוב bottom-up ו-top-down עם שיחת priorities", "לא לתכנן"], correct: 2 }
      ],
      task: "בנה budget breakdown לשנה הבאה: categories, amounts, justification. זהה 3 הזדמנויות לחיסכון."
    },
    {
      id: 25,
      title: "הצגה לדירקטוריון",
      week: 4,
      lesson: {
        title: "Board Presentations",
        content: `<h3>לדבר בשפה של ה-Board</h3>
<p>ה-Board לא מתעניין ב-microservices. הם רוצים לדעת: growth, risk, competitive advantage, ו-ROI.</p>
<h3>מבנה מצגת Board</h3>
<div class="concept-card"><strong>Executive Summary (2 דק)</strong><br>3 נקודות מפתח, highlights, alerts</div>
<div class="concept-card"><strong>KPIs & Trends (3 דק)</strong><br>מדדים עיקריים, השוואה ל-target ול-quarter קודם</div>
<div class="concept-card"><strong>Strategic Initiatives (5 דק)</strong><br>מה בונים, למה, progress, impact צפוי</div>
<div class="concept-card"><strong>Risks & Asks (2 דק)</strong><br>מה יכול להשתבש? מה צריך מה-Board?</div>
<h3>עקרונות</h3>
<p>Less is more. Data over opinions. No jargon. Anticipate questions. Follow up in writing.</p>
<h3>טעויות נפוצות</h3>
<p>יותר מדי technical details, סליידים צפופים, לא להציג risks, לא להגיד מה צריך.</p>`
      },
      quiz: [
        { question: "מה ה-Board רוצה לשמוע?", options: ["Technical architecture details", "Growth, risk, competitive advantage, ROI", "Code quality metrics", "Sprint velocity"], correct: 1 },
        { question: "כמה זמן צריך להיות executive summary?", options: ["10 דקות", "2 דקות", "30 דקות", "שעה"], correct: 1 },
        { question: "מהי הטעות הנפוצה ביותר במצגת Board?", options: ["יותר מדי data", "יותר מדי technical details וללא business context", "קצר מדי", "יותר מדי שאלות"], correct: 1 }
      ],
      task: "הכן מצגת Board mock: 5 slides, executive summary, KPIs, strategic initiative, risk, ו-ask."
    },
    {
      id: 26,
      title: "Scaling Teams",
      week: 4,
      lesson: {
        title: "הגדלת צוותים",
        content: `<h3>מ-5 ל-50 ומעלה</h3>
<p>מה שעבד עם 5 אנשים לא עובד עם 50. כל הכפלה דורשת שינוי מבנה, תהליכים, ותרבות.</p>
<h3>שלבי צמיחה</h3>
<div class="concept-card"><strong>5-10 (Single Team)</strong><br>כולם מדברים עם כולם, minimal process</div>
<div class="concept-card"><strong>10-25 (Multi-Team)</strong><br>צוותים מוגדרים, tech leads, light process</div>
<div class="concept-card"><strong>25-50 (Departments)</strong><br>Engineering managers, clear ownership, documented processes</div>
<div class="concept-card"><strong>50+ (Organization)</strong><br>Directors, VP Eng, platform teams, guilds</div>
<h3>Team Topologies</h3>
<p>Stream-aligned teams, Platform teams, Enabling teams, Complicated-subsystem teams. כל אחד עם mission ברור.</p>
<h3>Communication</h3>
<p>ככל שגדלים: יותר async, יותר documentation, יותר explicit communication, פחות assumptions.</p>`
      },
      quiz: [
        { question: "מתי צריך Engineering Managers?", options: ["מהיום הראשון", "כשיש 25+ מפתחים ודרושה שכבת management", "רק ב-100+", "אף פעם"], correct: 1 },
        { question: "מהם Team Topologies?", options: ["מבנה פיזי של המשרד", "4 סוגי צוותים: Stream-aligned, Platform, Enabling, Complicated-subsystem", "שמות לצוותים", "סוג של org chart"], correct: 1 },
        { question: "מה משתנה כשגדלים?", options: ["כלום", "יותר async, documentation, explicit communication", "פחות תהליכים", "פחות meetings"], correct: 1 }
      ],
      task: "שרטט org chart לצוות שלך ב-12 חודשים הבאים: teams, roles, responsibilities, interaction patterns."
    },
    {
      id: 27,
      title: "Documentation",
      week: 4,
      lesson: {
        title: "תרבות Documentation",
        content: `<h3>Documentation כמוצר</h3>
<p>תיעוד טוב מאיץ onboarding, מפחית bus factor, ומאפשר autonomy. תיעוד גרוע גרוע מאי תיעוד.</p>
<h3>סוגי תיעוד</h3>
<div class="concept-card"><strong>ADRs</strong><br>Architecture Decision Records: למה בחרנו מה שבחרנו</div>
<div class="concept-card"><strong>Runbooks</strong><br>How to handle incidents, deploy, rollback</div>
<div class="concept-card"><strong>API Docs</strong><br>OpenAPI/Swagger, examples, changelog</div>
<div class="concept-card"><strong>Onboarding Guide</strong><br>Everything a new hire needs in week 1</div>
<h3>עקרונות</h3>
<p>Write for the reader (not the writer), keep it updated (or delete it), close to the code, searchable, with examples.</p>
<h3>כלים</h3>
<p>Notion/Confluence for knowledge base, README in repos, ADRs in code, Swagger for APIs, Loom for walkthroughs.</p>`
      },
      quiz: [
        { question: "מהו ADR?", options: ["כלי deployment", "Architecture Decision Record - תיעוד החלטות ארכיטקטוניות", "Automated Deploy Report", "API Documentation Resource"], correct: 1 },
        { question: "מהו Bus Factor?", options: ["מספר אנשים שאם נעלמים הפרויקט נעצר", "מספר buses ב-CI/CD", "Budget factor", "Build Factor"], correct: 0 },
        { question: "מה עדיף: documentation מיושן או אין documentation?", options: ["Documentation מיושן", "אין documentation (מיושן מטעה)", "שניהם שווים", "לא משנה"], correct: 1 }
      ],
      task: "כתוב ADR אחד להחלטה טכנולוגית אחרונה: context, decision, consequences, alternatives considered."
    },
    {
      id: 28,
      title: "חדשנות",
      week: 4,
      lesson: {
        title: "Innovation Frameworks",
        content: `<h3>חדשנות כתהליך</h3>
<p>חדשנות לא קורית במקרה. היא דורשת זמן מוגן, תרבות של ניסוי, ומנגנונים מובנים.</p>
<h3>Frameworks לחדשנות</h3>
<div class="concept-card"><strong>20% Time / Innovation Days</strong><br>זמן מוגן לעבודה על רעיונות אישיים</div>
<div class="concept-card"><strong>Hackathons</strong><br>24-48 שעות של בנייה חופשית, demos, prizes</div>
<div class="concept-card"><strong>Innovation Lab</strong><br>צוות קטן שעובד על POCs לטכנולוגיות חדשות</div>
<div class="concept-card"><strong>Tech Talks / Learning</strong><br>שיתוף ידע פנימי, lunch & learn, reading groups</div>
<h3>From Idea to Product</h3>
<p>Ideation > Validation > POC > Pilot > Scale. לא כל רעיון שורד, וזה בסדר. Kill fast.</p>
<h3>מדידת חדשנות</h3>
<p>Number of experiments, POCs shipped, ideas from team, patents filed, new capabilities launched.</p>`
      },
      quiz: [
        { question: "למה חדשנות צריכה framework?", options: ["בירוקרטיה", "כי היא לא קורית במקרה, צריך זמן ומנגנונים מובנים", "כי ההנהלה דורשת", "לא צריכה"], correct: 1 },
        { question: "מהו Kill Fast?", options: ["לפטר מהר", "לסגור רעיונות שלא עובדים מהר ולהמשיך", "Framework לאבטחה", "סוג של deployment"], correct: 1 },
        { question: "מהו Hackathon טיפוסי?", options: ["חודש של עבודה", "24-48 שעות בנייה חופשית עם demos", "ראיון טכני", "Code review marathon"], correct: 1 }
      ],
      task: "תכנן hackathon לצוות: theme, timeline, rules, judging criteria, prizes, ו-follow-up plan לרעיונות מנצחים."
    },
    {
      id: 29,
      title: "פרויקט מסכם א'",
      week: 5,
      lesson: {
        title: "פרויקט סיום: Technical Strategy Document",
        content: `<h3>המשימה הסופית</h3>
<p>הגיע הזמן לשלב את כל מה שלמדת למסמך אסטרטגי אחד שלם. זהו התרגיל הקרוב ביותר לעבודה יומיומית של CTO.</p>
<h3>מבנה המסמך</h3>
<div class="concept-card"><strong>Executive Summary</strong><br>סיכום של עמוד אחד: vision, current state, proposed changes</div>
<div class="concept-card"><strong>Current State Analysis</strong><br>Architecture, team, tech debt, performance</div>
<div class="concept-card"><strong>Target State</strong><br>לאן אנחנו רוצים להגיע ב-12 חודשים?</div>
<div class="concept-card"><strong>Roadmap & Milestones</strong><br>שלבים, dependencies, timelines</div>
<h3>נושאים לכלול</h3>
<p>Architecture evolution, team scaling plan, technology choices, KPIs, budget, risks, innovation initiatives.</p>
<h3>קריטריונים להצלחה</h3>
<p>ברור, actionable, data-backed, realistic, aligned with business goals, ו-communicable to all stakeholders.</p>`
      },
      quiz: [
        { question: "מה חייב להיות ב-Executive Summary?", options: ["כל הפרטים הטכניים", "Vision, current state, proposed changes בעמוד אחד", "רק numbers", "רק vision"], correct: 1 },
        { question: "למה Target State חשוב?", options: ["בשביל הדוחות", "כדי שיהיה north star ברור לכל הצוות", "רק לדירקטוריון", "לא חשוב"], correct: 1 },
        { question: "מהו הקריטריון החשוב ביותר למסמך אסטרטגי?", options: ["אורך המסמך", "Aligned with business goals ו-actionable", "Design יפה", "כמות הנתונים"], correct: 1 }
      ],
      task: "כתוב Technical Strategy Document: executive summary, current state, target state, roadmap 12 חודשים, KPIs, budget, risks."
    },
    {
      id: 30,
      title: "פרויקט מסכם ב'",
      week: 5,
      lesson: {
        title: "פרויקט סיום: CTO 90-Day Plan",
        content: `<h3>90 יום ראשונים כ-CTO</h3>
<p>בין אם אתה CTO חדש או רוצה reset, תוכנית 90 יום מובנית היא המפתח להשפעה מהירה ומשמעותית.</p>
<h3>חודש 1: Listen & Learn</h3>
<div class="concept-card"><strong>שבועות 1-2</strong><br>1:1 עם כל הצוות, הבן architecture, מפה pain points</div>
<div class="concept-card"><strong>שבועות 3-4</strong><br>זהה quick wins, בנה trust, הבן את ה-business context</div>
<h3>חודש 2: Plan & Quick Wins</h3>
<div class="concept-card"><strong>שבועות 5-6</strong><br>Deliver 2-3 quick wins, draft strategy, align with CEO/CPO</div>
<div class="concept-card"><strong>שבועות 7-8</strong><br>Present roadmap, start hiring if needed, address top pain point</div>
<h3>חודש 3: Execute & Scale</h3>
<div class="concept-card"><strong>שבועות 9-10</strong><br>Implement processes, build momentum, measure progress</div>
<div class="concept-card"><strong>שבועות 11-12</strong><br>Strategic initiative launch, team structure changes, present to board</div>
<h3>סיכום התוכנית</h3>
<p>30 יום למדת, תרגלת, ובנית foundation של CTO excellence. המסע רק מתחיל. Keep learning, keep building, keep leading.</p>`
      },
      quiz: [
        { question: "מה עושים בחודש הראשון כ-CTO?", options: ["משנים הכל", "Listen & Learn: 1:1s, mapping, understanding", "מפטרים ומגייסים", "בונים architecture חדשה"], correct: 1 },
        { question: "מתי לעשות Quick Wins?", options: ["ביום הראשון", "בחודש 2, אחרי שהבנת את המצב", "אחרי שנה", "אף פעם"], correct: 1 },
        { question: "מה חשוב בסוף 90 יום?", options: ["שהכל מושלם", "Momentum, trust, clear strategy, ו-measurable progress", "שכולם אוהבים אותך", "שהקוד נקי"], correct: 1 },
        { question: "מה הדבר הראשון לעשות ביום 1?", options: ["לשנות את ה-tech stack", "1:1 עם כל הצוות ולהקשיב", "לכתוב קוד", "לבטל כל ה-meetings"], correct: 1 }
      ],
      task: "כתוב 90-Day Plan אישי: 12 שבועות מפורטים עם deliverables, milestones, ו-success criteria לכל חודש."
    }
  ]
};
