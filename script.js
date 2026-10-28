// Built-in fallback in case questions.js fails to load locally
const FALLBACK_QUIZ_DATA = [
  {
    id: "web-dev",
    title: "Programming & Web Development",
    description: "Test your core knowledge of HTML, CSS, JavaScript, and computer science fundamentals.",
    timeLimit: 180,
    questions: [
      {
        question: "Which HTML5 element is semantically best for the primary navigation links of a website?",
        options: ["<navigation>", "<nav>", "<menu>", "<header>"],
        answer: 1,
        explanation: "The <nav> element represents a section of a page whose purpose is to provide navigation links."
      },
      {
        question: "What is the output of `typeof null` in JavaScript?",
        options: ["'null'", "'undefined'", "'object'", "'number'"],
        answer: 2,
        explanation: "Due to a legacy bug in the original JavaScript implementation, `typeof null` returns 'object'."
      },
      {
        question: "Which array method creates a new array populated with the results of calling a provided function on every element?",
        options: ["forEach()", "filter()", "map()", "reduce()"],
        answer: 2,
        explanation: "Array.prototype.map() transforms every element and returns a new array of the same length."
      },
      {
        question: "In CSS Flexbox, which property aligns items along the main axis?",
        options: ["align-items", "justify-content", "flex-direction", "align-content"],
        answer: 1,
        explanation: "`justify-content` defines alignment along the main axis, whereas `align-items` operates on the cross axis."
      },
      {
        question: "What does the '===' operator check in JavaScript?",
        options: ["Value only", "Type only", "Both value and type", "Memory reference only"],
        answer: 2,
        explanation: "Strict equality (===) checks whether its two operands are equal in both value and data type without type coercion."
      },
      {
        question: "What is the worst-case time complexity of binary search on a sorted array of size n?",
        options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
        answer: 2,
        explanation: "Binary search halves the search space on each step, resulting in logarithmic O(log n) time complexity."
      },
      {
        question: "Which Web API allows storing key-value pairs in the browser that persist even after the browser window is closed?",
        options: ["sessionStorage", "localStorage", "cookies", "CacheControl"],
        answer: 1,
        explanation: "`localStorage` persists data across browser sessions until explicitly cleared."
      },
      {
        question: "What does a HTTP status code of 404 indicate?",
        options: ["Internal Server Error", "Unauthorized Access", "Resource Not Found", "Bad Request"],
        answer: 2,
        explanation: "404 Not Found indicates that the server cannot find the requested resource."
      },
      {
        question: "Which keyword declares a block-scoped variable in JavaScript that can be reassigned?",
        options: ["var", "const", "let", "static"],
        answer: 2,
        explanation: "`let` is block-scoped and permits reassignment, unlike `const` (cannot be reassigned) and `var` (function-scoped)."
      },
      {
        question: "What is the purpose of `event.preventDefault()` in DOM event handling?",
        options: [
          "Stops the event from bubbling up the DOM tree",
          "Cancels the browser's default action associated with the event",
          "Removes the event listener after one execution",
          "Pauses JavaScript execution"
        ],
        answer: 1,
        explanation: "`preventDefault()` stops default browser actions, such as refreshing the page when a <form> is submitted."
      }
    ]
  },
  {
    id: "general-knowledge",
    title: "Science & General Knowledge",
    description: "Challenge yourself with questions covering space, physics, geography, and modern computing history.",
    timeLimit: 180,
    questions: [
      {
        question: "Which planet in our solar system has the most confirmed moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: 1,
        explanation: "Saturn leads the solar system with over 140 confirmed moons, surpassing Jupiter."
      },
      {
        question: "What is the chemical symbol for Gold?",
        options: ["Gd", "Go", "Ag", "Au"],
        answer: 3,
        explanation: "Au comes from the Latin word for gold, 'aurum'."
      },
      {
        question: "Who is widely credited with inventing the World Wide Web in 1989?",
        options: ["Alan Turing", "Vint Cerf", "Tim Berners-Lee", "Dennis Ritchie"],
        answer: 2,
        explanation: "Sir Tim Berners-Lee invented the World Wide Web while working at CERN in 1989."
      },
      {
        question: "Which atmospheric layer contains the ozone layer that absorbs most of the Sun's ultraviolet radiation?",
        options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
        answer: 1,
        explanation: "The ozone layer is mainly found in the lower portion of the stratosphere, roughly 15 to 35 km above Earth."
      },
      {
        question: "What is the SI unit of electrical resistance?",
        options: ["Volt", "Ampere", "Watt", "Ohm"],
        answer: 3,
        explanation: "The Ohm (Ω) is the SI derived unit of electrical resistance, named after German physicist Georg Simon Ohm."
      },
      {
        question: "Which gas makes up approximately 78% of Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        answer: 2,
        explanation: "Earth's atmosphere is composed of about 78% nitrogen, 21% oxygen, and 1% other gases."
      },
      {
        question: "In which Indian state is the Satish Dhawan Space Centre (Sriharikota) located?",
        options: ["Tamil Nadu", "Andhra Pradesh", "Odisha", "Kerala"],
        answer: 1,
        explanation: "Sriharikota is a barrier island off the Bay of Bengal coast located in the Tirupati district of Andhra Pradesh."
      },
      {
        question: "Which blood type is known as the universal red blood cell donor?",
        options: ["AB+", "O+", "O-", "A-"],
        answer: 2,
        explanation: "O-negative red blood cells lack A, B, and Rh antigens, allowing them to be safely transfused to almost any patient."
      },
      {
        question: "Light travels from the Sun to Earth in approximately how much time?",
        options: ["8 seconds", "8 minutes 20 seconds", "1 hour", "24 minutes"],
        answer: 1,
        explanation: "At ~300,000 km/s across 149.6 million km, sunlight takes roughly 499 seconds (8 minutes and 19 seconds) to reach Earth."
      },
      {
        question: "Which protocol is primarily responsible for translating domain names (like iiti.ac.in) into IP addresses?",
        options: ["HTTP", "DHCP", "DNS", "FTP"],
        answer: 2,
        explanation: "The Domain Name System (DNS) acts as the phonebook of the Internet, resolving human-readable hostnames into IP addresses."
      }
    ]
  }
];

function getQuizzes() {
  return typeof QUIZ_DATA !== "undefined" && Array.isArray(QUIZ_DATA)
    ? QUIZ_DATA
    : FALLBACK_QUIZ_DATA;
}

const state = {
  activeQuiz: null,
  questions: [],
  currentIndex: 0,
  userAnswers: [],
  timerEnabled: true,
  timeRemaining: 0,
  timerInterval: null
};

const screens = {
  start: document.getElementById("start-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen")
};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderQuizSelection();
  renderLeaderboard();
  attachEventListeners();
});

function showScreen(screenKey) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[screenKey].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuizSelection() {
  const container = document.getElementById("quiz-list");
  const quizzes = getQuizzes();
  container.innerHTML = "";

  quizzes.forEach(quiz => {
    const card = document.createElement("div");
    card.className = "quiz-card";
    card.innerHTML = `
      <div>
        <h3>${escapeHTML(quiz.title)}</h3>
        <p>${escapeHTML(quiz.description)}</p>
      </div>
      <div class="quiz-meta">
        <span>📋 ${quiz.questions.length} Questions</span>
        <button type="button" class="btn btn-primary start-quiz-btn">Start Quiz →</button>
      </div>
    `;
    card.querySelector(".start-quiz-btn").addEventListener("click", () => {
      startQuiz(quiz.id);
    });
    container.appendChild(card);
  });
}

function startQuiz(quizId) {
  const quizzes = getQuizzes();
  const foundQuiz = quizzes.find(q => q.id === quizId);
  if (!foundQuiz) return;

  const shouldShuffle = document.getElementById("shuffle-toggle").checked;
  state.timerEnabled = document.getElementById("timer-toggle").checked;
  state.activeQuiz = foundQuiz;

  state.questions = foundQuiz.questions.map(q => ({ ...q, options: [...q.options] }));
  if (shouldShuffle) {
    shuffleArray(state.questions);
  }

  state.currentIndex = 0;
  state.userAnswers = new Array(state.questions.length).fill(null);

  document.getElementById("active-quiz-title").textContent = foundQuiz.title;
  setupTimer(foundQuiz.timeLimit);
  showScreen("quiz");
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const total = state.questions.length;
  const idx = state.currentIndex;
  const currentQ = state.questions[idx];
  const selectedAns = state.userAnswers[idx];

  document.getElementById("question-counter").textContent = `Question ${idx + 1} of ${total}`;
  const progressPercent = ((idx + 1) / total) * 100;
  document.getElementById("progress-fill").style.width = `${progressPercent}%`;

  document.getElementById("question-text").textContent = currentQ.question;

  const letters = ["A", "B", "C", "D"];
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  currentQ.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `option-btn ${selectedAns === i ? "selected" : ""}`;
    btn.innerHTML = `
      <span class="option-letter">${letters[i]}</span>
      <span>${escapeHTML(opt)}</span>
    `;
    btn.addEventListener("click", () => selectOption(i));
    optionsContainer.appendChild(btn);
  });

  const palette = document.getElementById("question-palette");
  palette.innerHTML = "";
  state.questions.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    const isAnswered = state.userAnswers[i] !== null ? "answered" : "";
    const isCurrent = i === idx ? "current" : "";
    dot.className = `palette-dot ${isAnswered} ${isCurrent}`;
    dot.textContent = i + 1;
    dot.addEventListener("click", () => jumpToQuestion(i));
    palette.appendChild(dot);
  });

  document.getElementById("prev-btn").disabled = idx === 0;
  const isLast = idx === total - 1;
  document.getElementById("next-btn").classList.toggle("hidden", isLast);
  document.getElementById("submit-btn").classList.toggle("hidden", !isLast);
}

function selectOption(optionIndex) {
  state.userAnswers[state.currentIndex] = optionIndex;
  renderCurrentQuestion();
}

function jumpToQuestion(index) {
  state.currentIndex = index;
  renderCurrentQuestion();
}

function setupTimer(seconds) {
  clearInterval(state.timerInterval);
  const timerBox = document.getElementById("timer-box");

  if (!state.timerEnabled) {
    timerBox.classList.add("hidden");
    return;
  }

  timerBox.classList.remove("hidden", "warning");
  state.timeRemaining = seconds;
  updateTimerDisplay();

  state.timerInterval = setInterval(() => {
    state.timeRemaining--;
    updateTimerDisplay();

    if (state.timeRemaining <= 30) {
      timerBox.classList.add("warning");
    }

    if (state.timeRemaining <= 0) {
      clearInterval(state.timerInterval);
      finishQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = String(Math.floor(state.timeRemaining / 60)).padStart(2, "0");
  const secs = String(state.timeRemaining % 60).padStart(2, "0");
  document.getElementById("time-display").textContent = `${mins}:${secs}`;
}

function finishQuiz() {
  clearInterval(state.timerInterval);

  let correct = 0;
  let wrong = 0;
  let skipped = 0;

  state.questions.forEach((q, i) => {
    const userChoice = state.userAnswers[i];
    if (userChoice === null) {
      skipped++;
    } else if (userChoice === q.answer) {
      correct++;
    } else {
      wrong++;
    }
  });

  const total = state.questions.length;
  const percentage = Math.round((correct / total) * 100);

  document.getElementById("result-quiz-name").textContent = state.activeQuiz.title;
  document.getElementById("score-percentage").textContent = `${percentage}%`;
  document.getElementById("score-fraction").textContent = `${correct} / ${total} Correct`;
  document.getElementById("stat-correct").textContent = correct;
  document.getElementById("stat-wrong").textContent = wrong;
  document.getElementById("stat-skipped").textContent = skipped;

  saveScoreToLeaderboard(state.activeQuiz.title, correct, total, percentage);
  renderReviewList();
  showScreen("result");
}

function renderReviewList() {
  const reviewContainer = document.getElementById("review-container");
  reviewContainer.innerHTML = state.questions.map((q, i) => {
    const userIdx = state.userAnswers[i];
    const isCorrect = userIdx === q.answer;
    const statusClass = isCorrect ? "correct" : "wrong";

    const userAnswerText = userIdx !== null
      ? escapeHTML(q.options[userIdx])
      : "<em>Not Answered</em>";
    const correctAnswerText = escapeHTML(q.options[q.answer]);

    return `
      <div class="review-card ${statusClass}">
        <div class="review-q">Q${i + 1}. ${escapeHTML(q.question)}</div>
        <div class="review-ans">
          <strong>Your Answer:</strong> ${userAnswerText} ${isCorrect ? "✅" : "❌"}
        </div>
        ${!isCorrect ? `<div class="review-ans"><strong>Correct Answer:</strong> ${correctAnswerText}</div>` : ""}
        <div class="review-exp">💡 ${escapeHTML(q.explanation)}</div>
      </div>
    `;
  }).join("");
}

function saveScoreToLeaderboard(quizTitle, score, total, percentage) {
  try {
    const history = JSON.parse(localStorage.getItem("quizflow_scores") || "[]");
    history.unshift({
      quizTitle,
      score,
      total,
      percentage,
      date: new Date().toLocaleDateString()
    });
    localStorage.setItem("quizflow_scores", JSON.stringify(history.slice(0, 5)));
  } catch (e) {}
  renderLeaderboard();
}

function renderLeaderboard() {
  const container = document.getElementById("leaderboard-body");
  let history = [];
  try {
    history = JSON.parse(localStorage.getItem("quizflow_scores") || "[]");
  } catch (e) {
    history = [];
  }

  if (history.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem;">No quiz attempts recorded yet. Take a quiz to see your score here!</p>`;
    return;
  }

  container.innerHTML = history.map(item => `
    <div class="score-row">
      <span><strong>${escapeHTML(item.quizTitle)}</strong> <small style="color:var(--text-muted)">(${item.date})</small></span>
      <span><strong>${item.score}/${item.total}</strong> (${item.percentage}%)</span>
    </div>
  `).join("");
}

function attachEventListeners() {
  document.getElementById("prev-btn").addEventListener("click", () => {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      renderCurrentQuestion();
    }
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    if (state.currentIndex < state.questions.length - 1) {
      state.currentIndex++;
      renderCurrentQuestion();
    }
  });

  document.getElementById("clear-selection-btn").addEventListener("click", () => {
    state.userAnswers[state.currentIndex] = null;
    renderCurrentQuestion();
  });

  document.getElementById("submit-btn").addEventListener("click", finishQuiz);

  document.getElementById("restart-quiz-btn").addEventListener("click", () => {
    if (state.activeQuiz) startQuiz(state.activeQuiz.id);
  });

  document.getElementById("choose-another-btn").addEventListener("click", () => {
    clearInterval(state.timerInterval);
    showScreen("start");
  });

  document.getElementById("home-logo").addEventListener("click", () => {
    clearInterval(state.timerInterval);
    showScreen("start");
  });

  document.getElementById("clear-scores-btn").addEventListener("click", () => {
    try {
      localStorage.removeItem("quizflow_scores");
    } catch (e) {}
    renderLeaderboard();
  });
}

function initTheme() {
  let savedTheme = "light";
  try {
    savedTheme = localStorage.getItem("quizflow_theme") || "light";
  } catch (e) {}
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeButton(savedTheme);

  document.getElementById("theme-toggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("quizflow_theme", next);
    } catch (e) {}
    updateThemeButton(next);
  });
}

function updateThemeButton(theme) {
  const btn = document.getElementById("theme-toggle");
  btn.textContent = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function escapeHTML(str) {
  return String(str).replace(/[&<>'"]/g, tag => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  }[tag]));
}