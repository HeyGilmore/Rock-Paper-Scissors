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


// #chooseFateSection starts off display none till button
const chooseFateSection = document.querySelector("#chooseFateSection");
chooseFateSection.style.cssText = "display: none";

//------- Button disappear when clicked
const btn = document.querySelector(".startButton");
btn.addEventListener("click", function (e) {
    e.preventDefault;
    // alert("Alert");

    // #introductionSection disappear
    const introSection = document.querySelector("#introductionSection")
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



// ------------ When Icon is clicked stays hover

//-- Select all image elements inside the iconSection
const icons = document.querySelectorAll('#iconSection img');
//-- Run a loop for all icons.
icons.forEach(icon => {
    //-- on Every icon, click function
    icon.addEventListener('click', function(){
        //-- Remove box-shadow class from all images
        //--  Allows one image to have the box-shadow effect
        icons.forEach(i => i.classList.remove('box-shadow'));

        this.classList.add('box-shadow');
    })
})