// ============================================
// TRIVIA FUNCTIONALITY
// ============================================

// Sample trivia questions - Replace with your actual questions
const triviaQuestions = [
  {
    question: "What was the first computer virus?",
    options: ["Creeper", "ILOVEYOU", "Melissa", "Stuxnet"],
    correct: 0,
  },
  {
    question: "Who invented the World Wide Web?",
    options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"],
    correct: 1,
  },
  {
    question: "What does 'www' stand for?",
    options: [
      "World Wide Web",
      "World Wide Windows",
      "Web World Wide",
      "Wide World Web",
    ],
    correct: 0,
  },
  {
    question: "Which company created JavaScript?",
    options: ["Microsoft", "Google", "Netscape", "Apple"],
    correct: 2,
  },
  {
    question: "What is the most popular programming language in 2024?",
    options: ["Python", "JavaScript", "Java", "C++"],
    correct: 1,
  },
  {
    question: "What does 'CPU' stand for?",
    options: [
      "Central Processing Unit",
      "Computer Processing Unit",
      "Central Program Unit",
      "Computer Program Unit",
    ],
    correct: 0,
  },
  {
    question: "Which year was the first iPhone released?",
    options: ["2005", "2006", "2007", "2008"],
    correct: 2,
  },
  {
    question: "What is the name of Google's AI assistant?",
    options: ["Siri", "Alexa", "Google Assistant", "Cortana"],
    correct: 2,
  },
  {
    question: "What does 'RAM' stand for?",
    options: [
      "Random Access Memory",
      "Read Access Memory",
      "Random Available Memory",
      "Read Available Memory",
    ],
    correct: 0,
  },
  {
    question: "Which protocol is used for secure web connections?",
    options: ["HTTP", "FTP", "HTTPS", "SMTP"],
    correct: 2,
  },
  {
    question: "What is the largest social media platform?",
    options: ["Twitter", "Facebook", "Instagram", "TikTok"],
    correct: 1,
  },
  {
    question: "What does 'URL' stand for?",
    options: [
      "Uniform Resource Locator",
      "Universal Resource Locator",
      "Uniform Resource Link",
      "Universal Resource Link",
    ],
    correct: 0,
  },
  {
    question: "Which programming language is used for Android development?",
    options: ["Swift", "Kotlin", "Objective-C", "Dart"],
    correct: 1,
  },
  {
    question: "What is the name of Microsoft's cloud computing service?",
    options: ["AWS", "Azure", "Google Cloud", "IBM Cloud"],
    correct: 1,
  },
  {
    question: "What does 'AI' stand for?",
    options: [
      "Automated Intelligence",
      "Artificial Intelligence",
      "Advanced Intelligence",
      "Applied Intelligence",
    ],
    correct: 1,
  },
];

let currentStreak = 0;
let bestStreak = 0;
let score = 0;
let questionsAnswered = 0;
let currentQuestionIndex = 0;
let triviaStarted = false;

// Initialize trivia
function initTrivia() {
  currentStreak = 0;
  score = 0;
  questionsAnswered = 0;
  currentQuestionIndex = 0;
  triviaStarted = false;
  shuffleArray(triviaQuestions);
  updateDisplay();
}

// Start trivia
function startTrivia() {
  initTrivia();
  triviaStarted = true;
  showGameScreen();
  displayNextQuestion();
}

// Show game screen
function showGameScreen() {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");
  document.getElementById("endScreen").classList.add("hidden");
}

// Display next question
function displayNextQuestion() {
  if (currentQuestionIndex >= triviaQuestions.length) {
    // Shuffle again and reset index for infinite play
    shuffleArray(triviaQuestions);
    currentQuestionIndex = 0;
  }

  const question = triviaQuestions[currentQuestionIndex];
  const questionText = document.getElementById("triviaQuestion");
  const questionNum = document.getElementById("questionNum");
  const optionsContainer = document.getElementById("triviaOptions");
  const feedbackMessage = document.getElementById("feedbackMessage");

  questionText.textContent = question.question;
  questionNum.textContent = questionsAnswered + 1;
  feedbackMessage.classList.remove("show", "correct", "incorrect");

  // Clear and populate options
  optionsContainer.innerHTML = "";
  question.options.forEach((option, index) => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "trivia-option";
    optionDiv.innerHTML = `<span>${option}</span>`;
    optionDiv.onclick = () => selectTriviaOption(index, question);
    optionsContainer.appendChild(optionDiv);
  });
}

// Select trivia option
function selectTriviaOption(selectedIndex, question) {
  const options = document.querySelectorAll(".trivia-option");
  const feedbackMessage = document.getElementById("feedbackMessage");

  // Disable all options
  options.forEach((opt) => opt.classList.add("disabled"));

  // Check answer
  const isCorrect = selectedIndex === question.correct;

  if (isCorrect) {
    // Correct answer
    options[selectedIndex].classList.add("correct");
    currentStreak++;
    score += 10;
    if (currentStreak > bestStreak) {
      bestStreak = currentStreak;
    }
    feedbackMessage.textContent = "🎉 Correct! Great job!";
    feedbackMessage.className = "feedback-message show correct";
  } else {
    // Incorrect answer
    options[selectedIndex].classList.add("incorrect");
    options[question.correct].classList.add("correct");
    currentStreak = 0;
    feedbackMessage.textContent = `❌ Incorrect. The correct answer is: ${
      question.options[question.correct]
    }`;
    feedbackMessage.className = "feedback-message show incorrect";
  }

  questionsAnswered++;
  updateDisplay();

  // Move to next question after delay
  setTimeout(() => {
    currentQuestionIndex++;
    displayNextQuestion();
  }, 2000);
}

// Update display
function updateDisplay() {
  document.getElementById("streakValue").textContent = currentStreak;
  document.getElementById("scoreValue").textContent = score;
}

// Show end screen
function showEndScreen() {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.add("hidden");
  document.getElementById("endScreen").classList.remove("hidden");

  document.getElementById("finalStreak").textContent = bestStreak;
  document.getElementById("finalScore").textContent = score;
  document.getElementById("questionsAnswered").textContent = questionsAnswered;
}

// Restart trivia
function restartTrivia() {
  initTrivia();
  document.getElementById("startScreen").classList.remove("hidden");
  document.getElementById("gameScreen").classList.add("hidden");
  document.getElementById("endScreen").classList.add("hidden");
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
  initTrivia();
});

// VickyJay
