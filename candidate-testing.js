const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'Who was the first American woman in space? ';
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ['Who was the first American woman in space? ','True or false: 5000 meters = 5 kilometers. ','(5 + 3)/2 * 10 = ? ', `Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? `,'What is the minimum crew size for the ISS? '];
let correctAnswers = ['Sally Ride','True','40','Trajectory','3'];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question(`What is your name? `);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (i = 0; i < questions.length ; i++){
    candidateAnswers[i] = input.question("\n" + questions[i]);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //  

  function answersDisplay() {
    let results = [];
    for (i = 0; i < questions.length ; i++) {
      results[i] = `\n${i+1}) ${questions[i]}
  Your Answer: ${candidateAnswers[i]}
  Correct Answer: ${correctAnswers[i]}`;
    }
    return(results.join("\n"));
  }

  let numCorrect = 0;
  let status = "FAILED";  

  for (i = 0; i < questions.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numCorrect+=1;
    } 
  }

  let grade = ((numCorrect/questions.length) * 100);

  if (grade >= 80) {
    status = "PASSED";
  } 
  
  let nameDisplay = `\n\t\t\t\t* * * RESULTS * * *\n\nCandidate Name: ${candidateName}\n`; 
  let gradeDisplay = `\n\n>>> Overall Grade: ${grade}% (${numCorrect} of ${questions.length} responses correct) <<<\n>>> Status: ${status} <<<`; 
  let display = nameDisplay + answersDisplay() + gradeDisplay;

  console.log(display);

  return grade;  

}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`\nHello, ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};