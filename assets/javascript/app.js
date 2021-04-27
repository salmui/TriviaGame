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

// ❄ Icons made by Freepik from www.flaticon.com
// ❄ https://www.flaticon.com/packs/snowflakes
//

let colorType = {
  type: "multi"
};

let colors = {
  color1: "rgba(255,255,255,1)",
  color2: "rgba(142,217,222,1)",
  color3: "rgba(232,248,255,1)",
  color4: "rgba(135,143,145,1)"
};

let options = {
  alphaSpeed: 10,
  alphaVariance: 1,
  color: [colors.color1, colors.color2, colors.color3, colors.color4],
  composition: "source-over",
  count: 350,
  direction: 161,
  float: 0.75,
  glow: 0,
  imageUrl: [
    "https://image.flaticon.com/icons/svg/23/23858.svg",
    "https://image.flaticon.com/icons/svg/23/23883.svg",
    "https://image.flaticon.com/icons/svg/23/23889.svg",
    "https://image.flaticon.com/icons/svg/24/24296.svg",
    "https://image.flaticon.com/icons/svg/23/23901.svg",
    "https://image.flaticon.com/icons/svg/24/24286.svg"
  ],
  maxAlpha: 2,
  maxSize: 22,
  minAlpha: -0.2,
  minSize: 4,
  parallax: 1.75,
  rotation: 0.5,
  shape: "image",
  speed: 3,
  style: "fill",
  twinkle: false,
  xVariance: 5,
  yVariance: 0,
};

window.onload = function() {
  initStats();
  initSparticles();
  initGui();
}

window.initSparticles = function() {
  var $main = document.querySelector("main");
  window.mySparticles = new sparticles.Sparticles($main,options);
};

window.initStats = function() {
  var stats = new Stats();
  stats.domElement.classList.add("stats");
  document.body.appendChild(stats.domElement);
  function statsDisplay() {
    stats.begin();
    stats.end();
    requestAnimationFrame(statsDisplay);
  }
  requestAnimationFrame(statsDisplay);
};

window.initGui = function() {
  const s = window.mySparticles;
  const shapes = ["circle", "square", "triangle", "diamond", "line", "image"];
  const styles = ["fill", "stroke", "both"];
  const colorOptions = ["single", "multi", "rainbow"];
  const composites = [
    "source-over",
    "source-in",
    "source-out",
    "source-atop",
    "destination-over",
    "destination-in",
    "destination-out",
    "destination-atop",
    "lighter",
    "copy",
    "xor",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "color-dodge",
    "color-burn",
    "hard-light",
    "soft-light",
    "difference",
    "exclusion",
    "hue",
    "saturation",
    "color",
    "luminosity"
  ];
  const rerender = () => {
    s.createColorArray();
    s.createShapeArray();
    s.setupOffscreenCanvasses(function() {
      s.createSparticles();
    });
  };
  var rerenderColors = function(v) {
    if (colorType.type === "rainbow") {
      s.settings.color = "rainbow";
    } else if (colorType.type === "single") {
      s.settings.color = colors.color1;
    } else {
      s.settings.color = Object.keys(colors).map(i => {
        return colors[i];
      });
    }
    rerender();
  };


  const gui = new dat.GUI({ load: options });
  const part = gui.addFolder("Particles");
  part.open();
  part.add(s.settings, "count", 1, 500, 1).onFinishChange(rerender);
  part.add(s.settings, "shape", shapes).onFinishChange(rerender);
  part.add(s.settings, "style", styles).onFinishChange(rerender);
  const image = part.addFolder("Image");
  // image.add(s.settings, "imageUrl").onFinishChange(rerender);
  part.add(s.settings, "minSize", 1, 50, 1).onFinishChange(rerender);
  part.add(s.settings, "maxSize", 1, 50, 1).onFinishChange(rerender);
  const anim = gui.addFolder("Animation");
  anim.add(s.settings, "direction", 0, 360, 1).onFinishChange(rerender);
  anim.add(s.settings, "speed", 0, 100, 0.1).onFinishChange(rerender);
  anim.add(s.settings, "rotation", 0, 100, 0.1).onFinishChange(rerender);
  const move = anim.addFolder("Movement");
  move.add(s.settings, "parallax", 0, 10, 0.1).onFinishChange(rerender);
  move.add(s.settings, "float", 0, 10, 0.1).onFinishChange(rerender);
  move.add(s.settings, "xVariance", 0, 10, 0.1).onFinishChange(rerender);
  move.add(s.settings, "yVariance", 0, 10, 0.1).onFinishChange(rerender);
  const vis = gui.addFolder("Visual");
  vis.add(s.settings, "glow", 0,50).onFinishChange(rerender);
  vis.add(s.settings, "composition", composites).onFinishChange(rerender);
  const alpha = vis.addFolder("Alpha");
  alpha.add(s.settings, "twinkle").onFinishChange(rerender);
  alpha.add(s.settings, "minAlpha", -2, 2, 0.1).onFinishChange(rerender);
  alpha.add(s.settings, "maxAlpha", -2, 2, 0.1).onFinishChange(rerender);
  alpha.add(s.settings, "alphaSpeed", 0, 50, 1).onFinishChange(rerender);
  alpha.add(s.settings, "alphaVariance", 0, 20, 1).onFinishChange(rerender);
  const color = vis.addFolder("Color");
  color.open();
  color.add(colorType, "type", colorOptions).onFinishChange(rerenderColors);
  color.addColor(colors, "color1").onFinishChange(rerenderColors);
  color.addColor(colors, "color2").onFinishChange(rerenderColors);
  color.addColor(colors, "color3").onFinishChange(rerenderColors);
  color.addColor(colors, "color4").onFinishChange(rerenderColors);
  const control = gui.addFolder("Controls");
  control.add(s,"start");
  control.add(s,"stop");
};
