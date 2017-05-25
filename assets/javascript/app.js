$(document).ready(function() {
// Create a function that creates the start button and initial screen

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>START</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();


$("body").on("click", ".start-button", function(event){
	event.preventDefault();
	clickSound.play();
	generateHTML();

	timerWrapper();

}); // Closes start-button click

$("body").on("click", ".answer", function(event){
	//answeredQuestion = true;
	clickSound.play();
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		//alert("correct");

		clearInterval(theClock);
		generateWin();
	}
	else {
		//alert("wrong answer!");
		clearInterval(theClock);
		generateLoss();
	}
}); // Close .answer click

$("body").on("click", ".reset-button", function(event){
	clickSound.play();
	resetGame();
});
// Closes reset-button click

});
//  Closes jQuery

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/wrong.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 5000);
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 5000);
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/wrong.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 5000);
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>RESULTS" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Start Over</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["In Frozen, how many brothers does Hans have?", "In The Little Mermaid, what alias does Ursula use when she becomes human?", "In 101 Dalmations, how many puppies does Perdita give birth to?", "What was the first animated film released by Walt Disney?", "What's the name of the prince Aurora was startled by in the forest?", "Where does the movie Lilo and Stitch take place?", "Who was the first Disney princess?", "What is the name of the tea cup from Beauty and the Beast?"];
var answerArray = [["7", "9", "12", "15"], ["Vanessa","Alexis","Sonia","Amber"], ["12", "15", "18", "21"], ["Alice in Wonderland","Cinderella","Snow White and the Seven Dwarfs","Fantasia"], ["Prince Edward", "Prince Phillip", "Prince Stephan", "Prince Eric"], ["Puerto Rico","Hawaii","California","The Bahamas"], ["Cinderella", "Snow White", "Aurora", "Pocahontas"], ["Chippy Potts","Mr. Potts","Chip Potts","Monsieur Potts"]];
var imageArray = ["<img class='img-thumbnail' src='assets/images/frozen.png'>", "<img class='img-thumbnail' src='assets/images/ursula.png'>", "<img class='img-thumbnail' src='assets/images/dalmatians.png'>", "<img class='img-thumbnail' src='assets/images/snowwhite.png'>", "<img class='img-thumbnail' src='assets/images/aurora.png'>", "<img class='img-thumbnail' src='assets/images/liloandstitch.png'>", "<img class='img-thumbnail' src='assets/images/princess.png'>", "<img class='img-thumbnail' src='assets/images/chippotts.png'>"];
var correctAnswers = ["C. 12", "A. Vanessa", "B. 15", "C. Snow White and the Seven Dwarfs", "B. Prince Phillip", "B. Hawaii", "B. Snow White", "C. Chip Potts"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
var clickSound = new Audio("assets/sound/button-click.mp3");
