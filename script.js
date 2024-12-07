const startButton = document.querySelector("#startButton");

//------- Introduction - paragraph input
// [Grabbing aboutSection]
const container = document.querySelector("#aboutSection");
// [Creates a paragraph]
const content = document.createElement("p");
// [Adding Class 'intro']
container.classList.add("intro");
// [Content]
content.textContent = "Test your luck and strategy in this classic battle of wits. Pick your weapon: rock, paper, or scissors, and challenge the computer to see who reigns supreme. Can you outsmart the machine, or will chance have the last laugh? Let the games begin – may the odds (and your instincts) be ever in your favor!";
// add to html [aboutSection]
container.appendChild(content);

// adds several style rules
container.style.cssText = `font-size: 20px;
                            letter-spacing: .4px;
                            line-height: 1.2em;
                            text-align: center;`;





// Select the parent container
const STARTBUTTON = document.querySelector("#startButtonSection");

// Create the button element
const ButtonCreation = document.createElement("button");
// Add the 'startButton' class
ButtonCreation.classList.add("startButton");
// Set the button's text
ButtonCreation.textContent = "Start!";

// Append the button to the parent container
STARTBUTTON.appendChild(ButtonCreation);

// Style the parent container
STARTBUTTON.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3.5em;
`;

// Remove inline background color and let CSS handle it
ButtonCreation.style.cssText = `
    padding: 1em 5em;
    border-radius: 20px;
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: .3px;
    font-size: 18px;
    cursor: pointer; /* Ensures it looks clickable */
    text-align: center;
    display: inline-block;
`;


const introSection = document.querySelector("#introductionSection")


// #chooseFateSection starts off display none till button
const chooseFateSection = document.querySelector("#chooseFateSection");
chooseFateSection.style.cssText = "display: none";

//------- Button disappear when clicked
const btn = document.querySelector(".startButton");
btn.addEventListener("click", function (e) {
    e.preventDefault;
    // alert("Alert");

    // #introductionSection disappear
    introSection.style.cssText= "display:none";

    // #chooseFateSection appear
    chooseFateSection.style.cssText = "display: block";
  });


//-------- Icon Section ----------//
const iconSection = document.querySelector("#iconSection");
iconSection.style.cssText = `
                            display:flex;
                            justify-content: space-evenly;
                            margin: 0 auto;
                            max-width:820px;                           
`


//------------------- Continue Button ----------//
// Select the parent container
const ContinueButtonSection = document.querySelector("#continueButtonSection");
// Create the button element
const ContinueBTNCreation = document.createElement("button");
// Add the 'startButton' class
ContinueBTNCreation.classList.add("continueButton");
// Set the button's text
ContinueBTNCreation.textContent = "Continue";
// Append the button to the parent container
ContinueButtonSection.appendChild(ContinueBTNCreation);
// Style the parent container
ContinueButtonSection.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3.5em;
`;
// Remove inline background color and let CSS handle it
ContinueBTNCreation.style.cssText = `
    padding: 1em 5em;
    border-radius: 20px;
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: .3px;
    font-size: 18px;
    cursor: pointer; /* Ensures it looks clickable */
    text-align: center;
    display: inline-block;
`;
//---- Continue is disabled 
ContinueBTNCreation.disabled = true;

let userChoice;

// -------------- When Icon is clicked stays hover --------------///s
//-- Select all image elements inside the iconSection
const icons = document.querySelectorAll('#iconSection img');
//-- Run a loop for all icons.
icons.forEach(icon => {
    //-- on Every icon, click function
    icon.addEventListener('click', function(){
        userChoice = icon.alt
        //-- Remove box-shadow class from all images
        icons.forEach(i => i.classList.remove('box-shadow') );
        //-- Through the loop a box shadow class is add 
        this.classList.add('box-shadow');
        //---- Continue is turned on 
        ContinueBTNCreation.disabled = false;
    })
})


//-- Final results display none
// #chooseFateSection starts off display none till button
const finalResultSection = document.querySelector("#finalResults");
finalResultSection.style.cssText = "display: none";


// #chooseFateSection starts off display none till button
const countdownSection = document.querySelector("#countdownSection");
countdownSection.style.cssText = "display: none";

countdownSection

//---------- When Continue button pushed display none --------- 
ContinueBTNCreation.addEventListener("click", function (e) {
    e.preventDefault;
    // #chooseFateSection disappear
    const continueSection = document.querySelector("#chooseFateSection");
    continueSection.style.cssText = "display:none;";


    countdownSection.style.cssText = "display: block;";
    countdown();
});

// ----- Function to count down ---------
function countdown() {
    let i = 3; // Initialize the countdown starting number
    const displayElement = document.getElementById('count');  // Get the element to display the countdown

    // Helper function to update the countdown
    function updateCountdown() {
        // If countdown is still above 0, update the display and continue the countdown
        if (i > 0) {
            displayElement.innerHTML = i; // Set the current countdown number to the HTML element
            i--;  // Decrease the counter by 1

            // Schedule the next update in 1 second (1000 ms)
            setTimeout(updateCountdown, 1000); 
        } else {
            // Once the countdown is finished, display "Done!"
            displayElement.innerHTML = "Shoot!";
            displayElement.style.cssText = "display: none";
            finalResultSection.style.cssText = "display: block";
            ResultShowcase();
        }
    }

    // Start the countdown by calling the helper function
    updateCountdown();
}

const finalSection = document.querySelector("#playAgainSection")
// ----- Function to show case the final results.  ---------
function ResultShowcase() {
    // Generate a random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    // Gonna capture the item chosen
    let computerResultsString;
    //-- string that is going to be replaced
    const computerAnswer = document.querySelector("#computerAnswer");
    //-- Icon that will be replaced
    const computerIcon = document.querySelector("#computerIcon");
    //----
    const userAnswer = document.querySelector("#userAnswer");
    const userIcon = document.querySelector("#userIcon");
    


    // Set the computer's result and update the image source
    if (randomNumber === 1) {
        computerResultsString = "Rock";
        computerIcon.src = "https://img.icons8.com/stickers/200/rock.png"; // Path to the Rock image
        computerIcon.alt = "Rock";
    } else if (randomNumber === 2) {
        computerResultsString = "Paper";
        computerIcon.src = "https://img.icons8.com/stickers/200/paper.png"; // Path to the Paper image
        computerIcon.alt = "Paper";  
    } else {
        computerResultsString = "Scissors";
        computerIcon.src = "https://img.icons8.com/stickers/200/scissors.png"; // Path to the Scissors image
        computerIcon.alt = "Scissors";  
    }

    
   // Set the computer's result and update the image source
   if (userChoice === "Rock") {
    userIcon.src = "https://img.icons8.com/stickers/200/rock.png"; // Path to the Rock image
    userIcon.alt = "Rock";
} else if (userChoice === "Paper") {
    userIcon.src = "https://img.icons8.com/stickers/200/paper.png"; // Path to the Paper image
    userIcon.alt = "Paper";  
} else {
    userIcon.src = "https://img.icons8.com/stickers/200/scissors.png"; // Path to the Scissors image
    userIcon.alt = "Scissors";  
}


    // Update the text content of the computerAnswer element
    computerAnswer.textContent = computerResultsString;

    userAnswer.textContent = userChoice;



    // Determine the game result
    let result;
    let resultMessage = document.querySelector("#announcement");
    if (userChoice === computerResultsString) {
        result = "It's a tie!";
    } else if (
        (userChoice === "Rock" && computerResultsString === "Scissors") ||
        (userChoice === "Paper" && computerResultsString === "Rock") ||
        (userChoice === "Scissors" && computerResultsString === "Paper")
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    // Display the result
    resultMessage.textContent = result;

    // Get the section where the button will go
    const playAgainSection = document.querySelector("#playAgainSection");
    
    // Create the button element
    const buttonAgain = document.createElement("button");
    buttonAgain.classList.add("playAgainButton");
    buttonAgain.id = "playAgainBtn";  // Add an ID to the button
    buttonAgain.textContent = "Play Again?";
    
    // Append the button to the section
    playAgainSection.appendChild(buttonAgain);

    // Style the parent container
    playAgainSection.style.cssText = `
display: flex;
justify-content: center;
align-items: center;
margin-top: 3.5em;
`;
// Remove inline background color and let CSS handle it
buttonAgain.style.cssText = `
padding: 1em 5em;
border-radius: 20px;
border: none;
text-transform: uppercase;
font-weight: 600;
letter-spacing: .3px;
font-size: 18px;
cursor: pointer; /* Ensures it looks clickable */
text-align: center;
display: inline-block;
`;



// Add event listener to the dynamically created button
buttonAgain.addEventListener("click", (e) => {
    e.preventDefault();  // Prevent default behavior (if any)
   alert("Working");
});


}







