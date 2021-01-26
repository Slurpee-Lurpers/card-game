//declaring the column containers
const containerOne = document.getElementById("theFirst");
const containerTwo = document.getElementById("theSecond");
const containerThree = document.getElementById("theThird");
const containerFour = document.getElementById("theFourth");
const containerFive = document.getElementById("theFifth");
//the START button on landing page
const startGame = document.getElementById("startGame");
//container of the columns
const containerContainer = document.getElementById("containerContainer");
//instructions on landing page
const instructions = document.getElementById("instructions");
//instructions during the game
const moreInstructions = document.getElementById("moreInstructions");
//audio
const cardFlop = document.querySelector("#flop");
const cardSwipe = document.querySelector("#swipe");
const playAgain = document.getElementById("playAgain");

playAgain.addEventListener("click", playTheGameAgain);

startGame.addEventListener("click", startTheGame);
//JS 'media query'
const desktopMedia = window.matchMedia("(min-width: 600px)");
//array of all the cards
const everyCard = Array.from(document.querySelectorAll(".card"));
//self explanatory but: a boolean that we use to add and remove eventlisteners
let canWeClick = false;

//an empty global array to fill with cards
let arrayOfContainers = [];

//randomize the card image array
let randomizedCardFaces = cardFaces.sort(() => (Math.random() > 0.5 ? 1 : -1));
//counter for the steps of the game
let count = 0;

window.onload = () => {
  //empty array is filled with the columns and their contents
  makeAnArrayOfContainers()
  console.log(`on load ${arrayOfContainers}`)
  //this..... is stupid. the code inside here should be.... inside the function below??
  makeCardsHaveFaces(document.querySelectorAll(".card"));
  for (let i = 0; i <= everyCard.length - 1; i++) {
    everyCard[i].children[0].classList.add("flipFront");
    everyCard[i].children[1].classList.add("flipBack");
  }

  for (let i = 0; i <= everyCard.length - 1; i++) {
    everyCard[i].animate([{ top: "110%" }], {
      duration: 10,
      fill: "both",
      direction: "normal",
    });
  }
};

function makeAnArrayOfContainers(){
arrayOfContainers = [
    Array.from(containerOne.children),
    Array.from(containerTwo.children),
    Array.from(containerThree.children),
    Array.from(containerFour.children),
    Array.from(containerFive.children),
  ];
  
}
/****************************************************************** */
//thisa function should be renamed to setUpTheCards and the two loops in the onloadfunction above should be added
//(()()()()())
function makeCardsHaveFaces(e) {
  for (let i = 0; i <= e.length - 1; i++) {
    e[
      i
    ].children[0].style.backgroundImage = `url(./img/${randomizedCardFaces[i]})`;
    e[i].children[1].style.backgroundImage = `url('./img/1B.svg')`;
    e[i].setAttribute("name", `url(./img/${randomizedCardFaces[i]})`);
  }
}

//this function starts the game on click of the START button on the landing page
function startTheGame() {
  //toggle hiddens
  instructions.classList.toggle("hidden");
  containerContainer.classList.toggle("hidden");
  //gets a sentence and fills the paragraph above the game
  giveInstruction(count);
  //runs the starting animation
  initialize(everyCard);
}

function playTheGameAgain(){
  location.reload();
}

//start with cards upsidedown
//position is bottom
//deal all cards and then flip

function initialize(x) {
  setCardStartingPlace(x);

  setTimeout(() => {
    flipThePilesBackOver(x);
    canWeClick = true;
    
    listenToMe();
  }, 4000);

  setTimeout(() => {
    for (let i = 0; i <= arrayOfContainers.length - 1; i++) {
      spreadTheCards(arrayOfContainers[i], "normal", "both", 1000);
    }
  }, 4600);
}

//add and remove the eventlisteners for click, mouseover and eventually touch?
//based on boolean
function listenToMe() {
  if (canWeClick == true) {
    theGame.addEventListener("click", doStuff);

    theGame.addEventListener("mousemove", identifyColumn);
  } else if (canWeClick == false) {
    theGame.removeEventListener("click", doStuff);

    theGame.removeEventListener("mousemove", identifyColumn);
  }
}


function identifyColumn(e) {
  //if the target is not the conlumn container AND if the window is desktop size
  //on hover change the border
    if (e.target !== e.currentTarget && desktopMedia.matches) {
      let target = e.target.classList.contains("container")
        ? e.target
        : e.target.classList.contains("card")
        ? e.target.parentNode
        : e.target.parentNode.parentNode;
      
      target.style.border = "8px solid rgba(145, 142, 142, 0.233)";
      target.onmouseleave = () => {
        target.style.border = "none";
      };
    }
  
}

let deckArray = [];

function doStuff(e) {
  moreInstructions.innerText = "";
  canWeClick = false;
  listenToMe();
  let googa = 0
  const anInterval = setInterval(() => {
    
    console.log(googa)
    if(googa === 0 ){
      console.log('go back the cards')
      for (let i = 0; i <= arrayOfContainers.length - 1; i++) {
      goBackTheCards(arrayOfContainers[i], "normal", "forwards");
    }
    }else if( googa === 10){
      for (let i = 0; i <= arrayOfContainers.length - 1; i++) {
      
        flipThePilesOver(arrayOfContainers[i]);
      }
      console.log('flip em')
    }else if(googa === 16){
      for (let i = 0; i <= arrayOfContainers.length - 1; i++) {
        x =
          10 -
          arrayOfContainers[0][0].offsetWidth / 2 / (window.innerWidth / 100) +
          40;
        bringThePilesTogether(arrayOfContainers[i], x);
        x -= 20;
      }
      appendTheCards(deckArray);
      console.log("reorder the deck m'lady")
    }else if( googa === 17){
       arrayOfContainers = [
        Array.from(containerOne.children),
        Array.from(containerTwo.children),
        Array.from(containerThree.children),
        Array.from(containerFour.children),
        Array.from(containerFive.children),
      ];
      
      console.log(`in the do stuff function after 1.7seconds ${arrayOfContainers}`)
    }else if(googa === 26){
      for (let i = 0; i <= arrayOfContainers.length - 1; i++) {
        pilesToTheBottom(arrayOfContainers[i]);
      }
      console.log(`piles go DOWN`)
    }else if(googa === 36){
      for (let i = 0; i <= arrayOfContainers.length - 1; i++) {
        setCardPlace(deckArray);
      }
      console.log(`deal me a winning hand`)
    }else if(googa === 102){
      for (let i = 0; i <= arrayOfContainers.length - 1; i++) {
        flipThePilesBackOver(arrayOfContainers[i]);
      }
      console.log(`show me the faces`)
    }else if( googa === 112){
      giveInstruction(count);
      for (let i = 0; i <= arrayOfContainers.length - 1; i++) {
        spreadTheCards(arrayOfContainers[i], "normal", "both", 1000);
      }
      if (count < 2) {
        canWeClick = true;
        listenToMe();
      }


      if (count === 2) {
      theGame.addEventListener("click", theReveal);
      
      }
      console.log(`spread 'em!`)
    }else if(googa === 132){
      if (count === 2) {
      
      theGame.addEventListener("mousemove", identifyColumn);
      }
      console.log(`I think this is where the other part happens?`)
    }
    googa++
    if(googa === 133){
    clearInterval(anInterval)
  }
  }, 100);
  
  if (e.target !== e.currentTarget) {
    

    let target;
    if (e.target.classList.contains("container")) {
      target = e.target;
    } else if (e.target.classList.contains("card")) {
      target = e.target.parentNode;
    } else if (
      e.target.classList.contains("front") ||
      e.target.classList.contains("back")
    ) {
      target = e.target.parentNode.parentNode;
    }
    if (desktopMedia.matches) {
      target.style.border = "none";
    }

    makeANewDeck(target);

    

    

    
    }

    count++;  

}

function makeANewDeck(target){
  let theFirstPile = Array.from(containerOne.children);
    let theSecondPile = Array.from(containerTwo.children);
    let theThirdPile = Array.from(containerThree.children);
    let theFourthPile = Array.from(containerFour.children);
    let theFifthPile = Array.from(containerFive.children);
    let middleArray = [];
    let topArray = [];
    let bottomArray = [];

    if (target === containerThree) {
      //middle
      middleArray = theThirdPile;
      topArray = theFirstPile.concat(theSecondPile);
      bottomArray = theFourthPile.concat(theFifthPile);
    } else if (target === containerOne) {
      //first
      middleArray = theFirstPile;
      topArray = theFourthPile.concat(theFifthPile);
      bottomArray = theSecondPile.concat(theThirdPile);
    } else if (target === containerTwo) {
      //second
      middleArray = theSecondPile;
      topArray = theFifthPile.concat(theFirstPile);
      bottomArray = theThirdPile.concat(theFourthPile);
    } else if (target === containerFour) {
      //fourth
      middleArray = theFourthPile;
      topArray = theSecondPile.concat(theThirdPile);
      bottomArray = theFifthPile.concat(theFirstPile);
    } else if (target === containerFive) {
      //fifth
      middleArray = theFifthPile;
      topArray = theThirdPile.concat(theFourthPile);
      bottomArray = theFirstPile.concat(theSecondPile);
    }
    deckArray = topArray.concat(middleArray, bottomArray);
}
/*
//shuffle
so the cards go to the middle
then
 */

function appendTheCards(array) {
  setTimeout(() => {
    let x = 1;
    for (i = 0; i <= array.length - 1; i++) {
      if (x === 1) {
        containerOne.appendChild(array[i]);
        x += 1;
      } else if (x === 2) {
        containerTwo.appendChild(array[i]);
        x += 1;
      } else if (x === 3) {
        containerThree.appendChild(array[i]);
        x += 1;
      } else if (x === 4) {
        containerFour.appendChild(array[i]);
        x += 1;
      } else if (x === 5) {
        containerFive.appendChild(array[i]);
        x = 1;
      }
    }
  }, 1);
}

function theReveal(e) {
  theGame.removeEventListener("mouseover", identifyColumn);
  count++;
  moreInstructions.innerText = "";
  let target;
  if (e.target.classList.contains("container")) {
    target = e.target;
  } else if (e.target.classList.contains("card")) {
    target = e.target.parentNode;
  } else if (e.target.classList.contains("front") || e.target.classList.contains("back")) {
      target = e.target.parentNode.parentNode;
    }
  if(desktopMedia.matches){
  target.style.border = "none";
  }
  let array = Array.from(target.children);

  
  for (let i = 0; i <= arrayOfContainers.length - 1; i++) {
    goBackTheCards(arrayOfContainers[i], "normal", "forwards");
  }

  for (let i = 0; i <= arrayOfContainers.length - 1; i++) {
    setTimeout(() => {
      flipThePilesOver(arrayOfContainers[i]);
    }, 1000);
  }

  setTimeout(() => {
    for (let i = 0; i <= arrayOfContainers.length - 1; i++) {
      x =
        10 -
        arrayOfContainers[0][0].offsetWidth / 2 / (window.innerWidth / 100) +
        40;
      bringThePilesTogether(arrayOfContainers[i], x);
      x -= 20;
    }
  }, 1500);
  setTimeout(() => {
    if(desktopMedia.matches){
    array[5].animate(
      [
        {
          zIndex: "0",
          transform: `rotate(0deg)`,
          maxHeight: "237.25px",
          maxWidth: "156px",
          height: "13.5vw",
          width: "9vw",
          left: `${
            10 - array[5].offsetWidth / 2 / (window.innerWidth / 100) + 40
          }%`,
          top: "17%",
        },
        {
          zIndex: "100",
          transform: `rotate(720deg)`,
          maxHeight: "474.5px",
          maxWidth: "312px",
          height: "54vw",
          width: "36vw",
          left: `${
            10 - array[5].offsetWidth / 2 / (window.innerWidth / 100) + 30
          }%`,
          top: "14%",
        },
      ],
      {
        duration: 500,
        fill: "forwards",
        iterations: 1,
        easing: "ease-in",
      }
    );
    }else{
      array[5].animate(
      [
        {
          zIndex: "0",
          transform: `rotate(0deg)`,
          height: "13.5vw",
          width: "9vw",
          left: `${
            10 - array[5].offsetWidth / 2 / (window.innerWidth / 100) + 40
          }%`,
          top: "17%",
        },
 
        {
          zIndex: "100",
          transform: `rotate(360deg)`,
          height: "54vw",
          width: "36vw",
          left: `${
            10 - array[5].offsetWidth / 2 / (window.innerWidth / 100) + 30
          }%`,
          top: "14%",
        },
      ],
      {
        duration: 500,
        fill: "forwards",
        iterations: 1,
        easing: "ease-in",
      }
    );
    }
    array[5].children[0].classList.toggle("flipFront");
    array[5].children[1].classList.toggle("flipBack");
    theGame.removeEventListener("click", theReveal);
  }, 3000);
  setTimeout(() => {
    giveInstruction(count);
  }, 3000);
  setTimeout(() => {
    playAgain.classList.toggle("hidden");
    
  }, 3400);

}

//make a function that takes in one parameter
//inside create a conditional that returns a different string
//for each increment of the parameter starting at 0 and ending at 3
function giveInstruction(n) {
  let instruction =
    n === 0
      ? `Choose a card - DON'T TELL ME - and keep it in mind.\n Now, click the column your card is in`
      : n === 1
      ? `OK, click the column your card is in again, please\n (be honest)`
      : n === 2
      ? `Now...\n one more time...\n click the column your card is in.`
      : "Is this your card... ?";
  moreInstructions.innerText = instruction;
}
