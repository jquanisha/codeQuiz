// declare variables
var firstScreen = document.querySelector(".Quiz")
var questionOne = document.querySelector(".Question #1")
var questionTwo = document.querySelector(".Question #2")
var questionThree = document.querySelector(".Question #3")

document.querySelector('.Question #1').style.display = 'none';
// write functions
// Need function to start the quiz, 
// to hide the Quiz page/start page and display the question #1,
// to hide the question #1 and display question #2
// to hide the question #2 and diplay the question #3

function startQuiz() {
    console.log("hi!!!")

    document.querySelector('.Quiz').style.display = 'none';
}