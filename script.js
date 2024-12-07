//---------------- Stages of Display ------------------
//-------- Stage One
let StageOne = () => {
  // [Introduction Section]
  const introSection = document.querySelector("#introductionSection");
  introSection.style.cssText = `width: 90%;
                                 height: 40%;
                                 display: flex;
                                 justify-content: center;
                                 align-items: center;
                                 flex-direction: column;
                                 margin: 0 auto;
                                 max-width: 600px;`;

  // [Choose your fate]
  const chooseFateSection = document.querySelector("#chooseFateSection");
  chooseFateSection.style.cssText = "display:none;";
  // [Final Countdown]
  const countDownSection = document.querySelector("#countdownSection");
  countDownSection.style.cssText = "display:none;";
  // [Results]
  const finalResults = document.querySelector("#finalResults");
  finalResults.style.cssText = "display:none;";
  introductionPage();
};

//--------- Stage Two
let StageTwo = () => {
  // [Introduction Section]
  const introSection = document.querySelector("#introductionSection");
  introSection.style.cssText = "display:none;";

  // [Choose your fate]
  const chooseFateSection = document.querySelector("#chooseFateSection");
  chooseFateSection.style.cssText = "display:block;";

  // [Clear previous content in choose fate section]
  const chooseFateTitleSection = document.querySelector("#chooseFateTitle");
  chooseFateTitleSection.innerHTML = ""; // Clear any previous title

  const continueButtonSection = document.querySelector(
    "#continueButtonSection"
  );
  continueButtonSection.innerHTML = ""; // Clear any previous continue button
  // Reset user choice (important for next game)
  userChoice = undefined;
  // Remove the box-shadow from all icons
  const iconImages = document.querySelectorAll(".iconsImages");
  iconImages.forEach((icon) => {
    icon.classList.remove("box-shadow"); // Remove the box-shadow class
  });

  // [Final Countdown]
  const countDownSection = document.querySelector("#countdownSection");
  countDownSection.style.cssText = "display:none;";

  // [Results]
  const finalResults = document.querySelector("#finalResults");
  finalResults.style.cssText = "display:none;";

  chooseYourFateSection();
};

//--------- Stage Three
let StageThree = () => {
  // [Introduction Section]
  const introSection = document.querySelector("#introductionSection");
  introSection.style.cssText = "display:none;";
  // [Choose your fate]
  const chooseFateSection = document.querySelector("#chooseFateSection");
  chooseFateSection.style.cssText = "display:none;";
  // [Final Countdown]
  const countDownSection = document.querySelector("#countdownSection");
  countDownSection.style.cssText = "display:block;";
  // [Results]
  const finalResults = document.querySelector("#finalResults");
  finalResults.style.cssText = "display:none;";
  // [Start the Countdown]
  countdown();
};

//--------- Stage Four
let StageFour = () => {
  // [Introduction Section]
  const introSection = document.querySelector("#introductionSection");
  introSection.style.cssText = "display:none;";

  // [Choose your fate]
  const chooseFateSection = document.querySelector("#chooseFateSection");
  chooseFateSection.style.cssText = "display:none;";

  // [Final Countdown]
  const countDownSection = document.querySelector("#countdownSection");
  countDownSection.style.cssText = "display:none;";

  // [Results]
  const finalResults = document.querySelector("#finalResults");
  finalResults.style.cssText = "display:block;";

  // [Show the Results]
  resultsShowcase();
  playAgainBTN();
};

//---------------- Introduction Page ------------------
let introductionPage = () => {
  //--------- Start Paragraph
  const descriptionSection = document.querySelector("#startButtonSection");
  const description = document.createElement("p");
  description.textContent =
    "Test your luck and strategy in this classic battle of wits. Pick your weapon: rock, paper, or scissors, and challenge the computer to see who reigns supreme. Can you outsmart the machine, or will chance have the last laugh? Let the games begin – may the odds (and your instincts) be ever in your favor!";
  descriptionSection.appendChild(description);
  description.style.cssText = `font-size:20px;
                                letter-spacing: 0.5px;
                                line-height: 1.2em;
                                text-align: center;
                                margin-bottom: 2.5em;`;

  //------- Start Button Section
  const startBtnSection = document.querySelector("#startButtonSection");
  const startButton = document.createElement("button");
  startButton.classList.add("startButton");
  startButton.id = "startBTN";
  startButton.textContent = "Start!";
  startBtnSection.appendChild(startButton);
  startBtnSection.style.cssText = `width: 90%;
                                    height: 40%;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    flex-direction: column;
                                    margin: 0 auto;`;

  startButton.style.cssText = `padding: 1em 5em;
                                border-radius: 20px;
                                border: none;
                                text-transform: uppercase;
                                font-weight: 600;
                                letter-spacing: 0.3px;
                                font-size: 18px;
                                cursor: pointer;
                                text-align: center;
                                display: inline-block;`;

  //---- [Functionality]
  const startBTN = document.querySelector("#startBTN");
  startBTN.addEventListener("click", (e) => {
    e.preventDefault();
    StageTwo();
  });
};

//-------------- Choose Your Fate Page ----------------
// [User Choice Saved - Global]
let userChoice;
let chooseYourFateSection = () => {
  // [Section Header]
  const chooseFateTitleSection = document.querySelector("#chooseFateTitle");
  const creationTitle = document.createElement("h2");
  creationTitle.textContent = "Choose your fate:";
  chooseFateTitleSection.appendChild(creationTitle);
  creationTitle.style.cssText =
    "text-align: center; font-size: 32px; margin: 2em 0;";

  // [Icons Section]
  const iconSection = document.querySelector("#iconSection");
  iconSection.style.cssText = `display: flex;
                           justify-content: space-evenly;
                           margin: 0 auto;
                           max-width: 820px;`;

  // [Icons IMG]
  const iconImages = document.querySelectorAll(".iconsImages");
  iconImages.forEach((image) => {
    image.style.cssText = `max-width: 100%;
                          height: auto;
                          transition: all 0.6s ease-out;`;
  });

  // [Every time an icon is clicked, stays highlighted]
  iconImages.forEach((icon) => {
    icon.addEventListener("click", function () {
      userChoice = icon.alt;
      iconImages.forEach((i) => i.classList.remove("box-shadow"));
      this.classList.add("box-shadow");
      continueBTN.disabled = false;
    });
  });

  //----- [Continue Button]
  const continueButtonSection = document.querySelector(
    "#continueButtonSection"
  );
  const continueBTN = document.createElement("button");
  continueBTN.classList.add("continueButton");
  continueBTN.textContent = "Continue";
  continueButtonSection.appendChild(continueBTN);
  continueButtonSection.style.cssText = `display: flex;
                                       justify-content: center;
                                       align-items: center;
                                       margin-top: 3.5em;`;

  continueBTN.style.cssText = `padding: 1em 5em;
                            border-radius: 20px;
                            border: none;
                            text-transform: uppercase;
                            font-weight: 600;
                            letter-spacing: 0.3px;
                            font-size: 18px;
                            cursor: pointer;
                            text-align: center;
                            display: inline-block;`;

  // [Continue is disabled]
  continueBTN.disabled = true;

  // [Continue button is clicked]
  continueBTN.addEventListener("click", function (e) {
    StageThree();
  });
};

//-------------- Countdown to 3 ----------------
// [Countdown to 3]
function countdown() {
  // [Starting number for countdown]
  let i = 3;
  // [Element to show the countdown]
  const displayElement = document.getElementById("count");
  // [Displaying the count]
  displayElement.innerHTML = i;

  const countdownInterval = setInterval(() => {
    i--;
    displayElement.innerHTML = i;
    if (i === 0) {
      clearInterval(countdownInterval);
      displayElement.innerHTML = "Shoot!";
      StageFour();
    }
  }, 1000); // Update every 1 second
}

//-------------- Showcase the Final results ----------------
let resultsShowcase = () => {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  const computerAnswer = document.querySelector("#computerAnswer");
  const userAnswer = document.querySelector("#userAnswer");
  computerAnswer.textContent = computerAnswerGenerator(randomNumber);
  userAnswer.textContent = userAnswerGenerator(userChoice);
  didWeWinResults(userChoice);
};

//-------------- Computer Answer Generator ----------------
let computerResultsString = ""; // Declare a global variable
let computerAnswerGenerator = (randomNumber) => {
  const computerIcon = document.querySelector("#computerIcon");

  if (randomNumber === 1) {
    computerResultsString = "Rock";
    computerIcon.src = "https://img.icons8.com/stickers/200/rock.png";
    computerIcon.alt = "Rock";
  } else if (randomNumber === 2) {
    computerResultsString = "Paper";
    computerIcon.src = "https://img.icons8.com/stickers/200/paper.png";
    computerIcon.alt = "Paper";
  } else {
    computerResultsString = "Scissors";
    computerIcon.src = "https://img.icons8.com/stickers/200/scissors.png";
    computerIcon.alt = "Scissors";
  }
  return computerResultsString;
};

//-------------- User Answer Generator ----------------
let userAnswerGenerator = (userChoice) => {
  const userIcon = document.querySelector("#userIcon");
  if (userChoice === "Rock") {
    userIcon.src = "https://img.icons8.com/stickers/200/rock.png";
    userIcon.alt = "Rock";
  } else if (userChoice === "Paper") {
    userIcon.src = "https://img.icons8.com/stickers/200/paper.png";
    userIcon.alt = "Paper";
  } else {
    userIcon.src = "https://img.icons8.com/stickers/200/scissors.png";
    userIcon.alt = "Scissors";
  }
  return userChoice;
};

//-------------- FINAL RESULTS - DID WE WIN? ----------------
let didWeWinResults = (userChoice) => {
  let result;
  let resultMessage = document.querySelector("#announcement");

  if (userChoice === computerResultsString) {
    result = "It's a tie!";
    resultMessage.style.color = "yellow";
  } else if (
    (userChoice === "Rock" && computerResultsString === "Scissors") ||
    (userChoice === "Paper" && computerResultsString === "Rock") ||
    (userChoice === "Scissors" && computerResultsString === "Paper")
  ) {
    result = "You win!";
    resultMessage.style.color = "green";
  } else {
    result = "You lose!";
    resultMessage.style.color = "red";
  }

  // Display the result
  resultMessage.textContent = result;
};

//-------------- Wanna play again? ----------------
let playAgainBTN = () => {
  const playAgainSection = document.querySelector("#playAgainSection");

  // Check if the "Play Again" button already exists
  if (!document.querySelector("#playAgainBtn")) {
    const playAgainButton = document.createElement("button");
    playAgainButton.classList.add("playAgainButton");
    playAgainButton.id = "playAgainBtn";
    playAgainButton.textContent = "Play Again?";
    playAgainSection.appendChild(playAgainButton);

    playAgainSection.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 3.5em;
        `;

    playAgainButton.style.cssText = `
            padding: 1em 5em;
            border-radius: 20px;
            border: none;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 0.3px;
            font-size: 18px;
            cursor: pointer;
            text-align: center;
            display: inline-block;
        `;

    playAgainButton.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default behavior (if any)
      userChoice = undefined; // Reset user choice
      StageTwo(); // Restart game
    });
  }
};

//-------------- Starting Point ----------------
StageOne();
