// const firstArray = Array.from(document.querySelectorAll('.one'))
// const secondArray = Array.from(document.querySelectorAll('.two'))
// const thirdArray = Array.from(document.querySelectorAll('.three'))
// const fourthArray = Array.from(document.querySelectorAll('.four'))
// const fifthArray = Array.from(document.querySelectorAll('.five'))
let canWeClick = false;
console.log(canWeClick);
let arrayOfContainers = [];

const containerOne = document.getElementById("theFirst");
const containerTwo = document.getElementById("theSecond");
const containerThree = document.getElementById("theThird");
const containerFour = document.getElementById("theFourth");
const containerFive = document.getElementById("theFifth");
const startGame = document.getElementById("startGame");
const containerContainer = document.getElementById("containerContainer");
const instructions = document.getElementById("instructions");
const moreInstructions = document.getElementById("moreInstructions");
const cardFlop = document.querySelector('#flop')
const cardSwipe = document.querySelector('#swipe')
document.querySelectorAll('audio').volume = '1%';
startGame.addEventListener("click", startTheGame);

const desktopMedia = window.matchMedia("min-width: 500px");

const everyCard = Array.from(document.querySelectorAll(".card"));

let randomizedCardFaces = cardFaces.sort(() => (Math.random() > 0.5 ? 1 : -1));
window.onload = () => {
  arrayOfContainers = [
    Array.from(containerOne.children),
    Array.from(containerTwo.children),
    Array.from(containerThree.children),
    Array.from(containerFour.children),
    Array.from(containerFive.children),
  ];

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

function makeCardsHaveFaces(e) {
  for (let i = 0; i <= e.length - 1; i++) {
    e[
      i
    ].children[0].style.backgroundImage = `url(./img/${randomizedCardFaces[i]})`;
    e[i].children[1].style.backgroundImage = `url('./img/1B.svg')`;
    e[i].setAttribute("name", `url(./img/${randomizedCardFaces[i]})`);
  }
}
let count = 0;
function startTheGame() {
  instructions.classList.toggle("hidden");
  containerContainer.classList.toggle("hidden");
  giveInstruction(count);

  console.log(count);
  initialize(everyCard);
}

//start with cards upsidedown
//position is bottom
//deal all cards and then flip

function initialize(x) {
  setCardStartingPlace(x);
  
  setTimeout(() => {
    flipThePilesBackOver(x);
  }, 4000);

  setTimeout(() => {
    for (let i = 0; i <= arrayOfContainers.length - 1; i++) {
      spreadTheCards(arrayOfContainers[i], "normal", "both", 1000);
    }
  }, 4600);
  setTimeout(() => {
    canWeClick = true;
    console.log(canWeClick);
    listenToMe();
  }, 4000);
}

function listenToMe() {
  if (canWeClick == true) {
    theGame.addEventListener("click", doStuff);
    theGame.addEventListener("mouseover", identifyColumn);
  } else if (canWeClick == false) {
    theGame.removeEventListener("click", doStuff);
    theGame.removeEventListener("mouseover", identifyColumn);
  }
}
if (window.matchMedia(desktopMedia)) {
  function identifyColumn(e) {
    if (e.target !== e.currentTarget) {
      let target = e.target.classList.contains("container")
        ? e.target
        : e.target.classList.contains("card")
        ? e.target.parentNode
        : e.target.parentNode.parentNode;
      console.log(target);
      target.style.border = "8px solid rgba(145, 142, 142, 0.233)";
      target.onmouseleave = () => {
        target.style.border = "none";
      };
    }
  }
}
let deckArray = [];

function doStuff(e) {
  moreInstructions.innerText = "";
  canWeClick = false;
  listenToMe();
  console.log(count);

  if (e.target !== e.currentTarget) {
    let theFirstPile = Array.from(containerOne.children);

    let theSecondPile = Array.from(containerTwo.children);

    let theThirdPile = Array.from(containerThree.children);

    let theFourthPile = Array.from(containerFour.children);

    let theFifthPile = Array.from(containerFive.children);

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
    target.style.border = 'none';

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
    console.log(deckArray[0]);

    arrayOfContainers = [
      Array.from(containerOne.children),
      Array.from(containerTwo.children),
      Array.from(containerThree.children),
      Array.from(containerFour.children),
      Array.from(containerFive.children),
    ];

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
      reOrderTheDeck(deckArray);
    }, 1600);

    setTimeout(() => {
      arrayOfContainers = [
        Array.from(containerOne.children),
        Array.from(containerTwo.children),
        Array.from(containerThree.children),
        Array.from(containerFour.children),
        Array.from(containerFive.children),
      ];
    }, 1700);

    setTimeout(() => {
      for (let i = 0; i <= arrayOfContainers.length - 1; i++) {
        pilesToTheBottom(arrayOfContainers[i]);
      }
    }, 2600);

    setTimeout(() => {
      for (let i = 0; i <= arrayOfContainers.length - 1; i++) {
        setCardPlace(deckArray);
      }
    }, 3600);

    setTimeout(() => {
      for (let i = 0; i <= arrayOfContainers.length - 1; i++) {
        flipThePilesBackOver(arrayOfContainers[i]);
      }
    }, 10200);

    setTimeout(() => {
      for (let i = 0; i <= arrayOfContainers.length - 1; i++) {
        spreadTheCards(arrayOfContainers[i], "normal", "both", 1000);
      }
    }, 11200);

    count++;
    setTimeout(() => {
      if (count < 2) {
        canWeClick = true;
        listenToMe();
      }
      giveInstruction(count);
    }, 11200);
    if (count === 2) {
      theGame.addEventListener("click", theReveal);
      setTimeout(() => {
      theGame.addEventListener("mouseover", identifyColumn);
    }, 11200);
      
    }
  }
}

/*
//shuffle
so the cards go to the middle
then
 */

function reOrderTheDeck(array) {
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
  }
  target.style.border = 'none';
  let array = Array.from(target.children);

  console.log(array[5]);
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
    // array[5].style.zIndex = '10000000000000'
    array[5].animate([{ zIndex: "0", transform: `rotate(0deg)`, maxHeight: '237.25px', maxWidth: '156px', left : `${10 - (array[5].offsetWidth/2)/(window.innerWidth/100)+ 40}%`, top: '17%'},
    {zIndex: "100", transform: `rotate(180deg)`, maxHeight: '474.5px', maxWidth: '312px', left : `${10 - (array[5].offsetWidth/2)/(window.innerWidth/100)+ 39}%`, top: '14%'}
    ], {
      duration: 500,
      fill: "forwards",
      iterations: 1,
      easing: 'ease-in'
    });
    array[5].children[0].classList.toggle("flipFront");
    array[5].children[1].classList.toggle("flipBack");
    theGame.removeEventListener("click", theReveal);
  }, 3000);
  setTimeout(() => {
    giveInstruction(count);
  }, 3000);
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
