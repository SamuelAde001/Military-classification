// Define questions as an array of objects (questions and their options)
const questions = [
  {
      question: "Do you prefer to work on land or at sea?",
      options: ["Land", "Sea"],
  },
  {
      question: "Do you enjoy flying?",
      options: ["Yes", "No"],
  },
  {
      question: "Are you good at swimming?",
      options: ["Yes", "No"],
  },
  {
      question: "Do you prefer hot or cold climates?",
      options: ["Hot", "Cold"],
  },
  {
      question: "Are you comfortable with heights?",
      options: ["Yes", "No"],
  },
  {
      question: "Do you like working in a team?",
      options: ["Yes", "No"],
  },
  {
      question: "Can you follow orders well?",
      options: ["Yes", "No"],
  },
  {
      question: "Do you have technical skills?",
      options: ["Yes", "No"],
  },
  {
      question: "Do you have strong problem-solving skills?",
      options: ["Yes", "No"],
  },
  {
      question: "Do you prefer a structured routine?",
      options: ["Yes", "No"],
  },
  // Add more questions here...
];

let currentQuestionIndex = 0;

// Function to create a question card
function createQuestionCard(questionObj) {
  const questionContainer = document.getElementById("questionContainer");
  const questionCard = document.createElement("div");
  questionCard.classList.add("question-card");

  questionCard.innerHTML = `
      <p>${currentQuestionIndex + 1}. ${questionObj.question}</p>
      ${questionObj.options
          .map(
              (option, index) =>
                  `<label><input type="radio" name="q${currentQuestionIndex}" value="${option}" required>${option}</label>`
          )
          .join("<br>")}`;

  questionContainer.appendChild(questionCard);
}

// Function to display the next question card
function displayNextQuestion() {
  const questionContainer = document.getElementById("questionContainer");

  if (currentQuestionIndex < questions.length) {
      // Create and display the next question card
      createQuestionCard(questions[currentQuestionIndex]);
      currentQuestionIndex++;
  } else {
      // All questions displayed, show the "Submit" button
      const submitButton = document.getElementById("submitButton");
      submitButton.style.display = "block";
  }
}

// Function to classify the user based on their answers
function classifyUser() {
  const questionContainer = document.getElementById("questionContainer");
  const resultContainer = document.getElementById("resultContainer");

  // Hide the questions and show the result container
  questionContainer.style.display = "none";
  resultContainer.style.display = "block";

  // Your classification logic goes here based on the answers

  // Example classification based on the first question:
  const landPreference = document.querySelector(`input[name="q0"]:checked`).value;
  if (landPreference === "Land") {
      resultContainer.innerHTML = "You are classified into the Army.";
  } else if (landPreference === "Sea") {
      resultContainer.innerHTML = "You are classified into the Navy.";
  } else {
      resultContainer.innerHTML = "Sorry, we couldn't classify you into a specific branch.";
  }
}

// Attach an event listener to the "Submit" button
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function () {
  submitButton.style.display = "none";
  classifyUser();
});

// Start the questionnaire when the page loads
window.addEventListener("load", function () {
  displayNextQuestion();
});
