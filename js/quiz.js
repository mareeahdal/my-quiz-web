// ============================================
// QUIZ FUNCTIONALITY
// ============================================

// Sample quiz questions - Replace with your actual questions
const quizQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlink and Text Markup Language",
    ],
    correct: 0,
  },
  {
    question:
      "Which programming language is known as the 'language of the web'?",
    options: ["Python", "JavaScript", "Java", "C++"],
    correct: 1,
  },
  {
    question: "What is the latest version of CSS?",
    options: ["CSS2", "CSS3", "CSS4", "CSS5"],
    correct: 1,
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Interface",
      "Automated Programming Interface",
      "Application Process Integration",
    ],
    correct: 0,
  },
  {
    question: "Which framework is used for building React applications?",
    options: ["Angular", "Vue", "React", "Svelte"],
    correct: 2,
  },
  {
    question: "What is the purpose of Git?",
    options: [
      "Text editing",
      "Version control",
      "Database management",
      "Web hosting",
    ],
    correct: 1,
  },
  {
    question: "What does HTTP stand for?",
    options: [
      "HyperText Transfer Protocol",
      "High Tech Transfer Protocol",
      "Home Tool Transfer Protocol",
      "Hyperlink Transfer Protocol",
    ],
    correct: 0,
  },
  {
    question: "Which database is NoSQL?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    correct: 2,
  },
  {
    question: "What is the main purpose of CSS?",
    options: [
      "Structure web pages",
      "Style web pages",
      "Add interactivity",
      "Store data",
    ],
    correct: 1,
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Digital Object Model",
      "Document Oriented Model",
    ],
    correct: 0,
  },
];

let currentQuestion = 0;
let userAnswers = [];
let quizStarted = false;

// Initialize quiz
function initQuiz() {
  // Shuffle questions for variety
  shuffleArray(quizQuestions);
  userAnswers = new Array(quizQuestions.length).fill(null);
  currentQuestion = 0;
  quizStarted = false;
}

// Start the quiz
function startQuiz() {
  initQuiz();
  quizStarted = true;
  showQuestionScreen();
  displayQuestion();
}

// Show question screen
function showQuestionScreen() {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("questionScreen").classList.remove("hidden");
  document.getElementById("resultsScreen").classList.add("hidden");
}

// Display current question
function displayQuestion() {
  const question = quizQuestions[currentQuestion];
  const questionText = document.getElementById("questionText");
  const optionsContainer = document.getElementById("optionsContainer");
  const questionNumber = document.getElementById("questionNumber");
  const totalQuestions = document.getElementById("totalQuestions");
  const progressBar = document.getElementById("progressBar");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  questionText.textContent = question.question;
  questionNumber.textContent = currentQuestion + 1;
  totalQuestions.textContent = quizQuestions.length;

  // Update progress bar
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  progressBar.style.width = progress + "%";

  // Clear and populate options
  optionsContainer.innerHTML = "";
  question.options.forEach((option, index) => {
    const optionBtn = document.createElement("button");
    optionBtn.className = "option-btn";
    optionBtn.textContent = option;
    optionBtn.onclick = () => selectOption(index);

    // Show previously selected answer
    if (userAnswers[currentQuestion] === index) {
      optionBtn.classList.add("selected");
    }

    optionsContainer.appendChild(optionBtn);
  });

  // Update navigation buttons
  prevBtn.disabled = currentQuestion === 0;
  nextBtn.textContent =
    currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next";
}

// Select an option
function selectOption(index) {
  userAnswers[currentQuestion] = index;

  // Update UI
  const options = document.querySelectorAll(".option-btn");
  options.forEach((btn, i) => {
    btn.classList.remove("selected");
    if (i === index) {
      btn.classList.add("selected");
    }
  });
}

// Navigate to next question
function nextQuestion() {
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    displayQuestion();
  } else {
    showResults();
  }
}

// Navigate to previous question
function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    displayQuestion();
  }
}

// Show results
function showResults() {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("questionScreen").classList.add("hidden");
  document.getElementById("resultsScreen").classList.remove("hidden");

  // Calculate score
  let correct = 0;
  let incorrect = 0;

  quizQuestions.forEach((question, index) => {
    if (userAnswers[index] === question.correct) {
      correct++;
    } else {
      incorrect++;
    }
  });

  const percentage = Math.round((correct / quizQuestions.length) * 100);

  // Update results display
  document.getElementById("finalScore").textContent = correct;
  document.getElementById("correctAnswers").textContent = correct;
  document.getElementById("incorrectAnswers").textContent = incorrect;
  document.getElementById("percentage").textContent = percentage + "%";
}

// Restart quiz
function restartQuiz() {
  initQuiz();
  document.getElementById("startScreen").classList.remove("hidden");
  document.getElementById("questionScreen").classList.add("hidden");
  document.getElementById("resultsScreen").classList.add("hidden");
}

// Utility function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  initQuiz();
});

// VickyJay
