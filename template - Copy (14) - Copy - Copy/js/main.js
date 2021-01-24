// const firstArray = Array.from(document.querySelectorAll('.one'))
// const secondArray = Array.from(document.querySelectorAll('.two'))
// const thirdArray = Array.from(document.querySelectorAll('.three'))
// const fourthArray = Array.from(document.querySelectorAll('.four'))
// const fifthArray = Array.from(document.querySelectorAll('.five'))
let canWeClick = false;
console.log(canWeClick)
let arrayOfContainers = [];

const containerOne = document.getElementById("theFirst");
const containerTwo = document.getElementById("theSecond");
const containerThree = document.getElementById("theThird");
const containerFour = document.getElementById("theFourth");
const containerFive = document.getElementById("theFifth");
const startGame = document.getElementById("startGame");
const theGame = document.getElementById("theGame");
const instructions = document.getElementById("instructions");


startGame.addEventListener("click", startTheGame);




















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

function startTheGame() {
  instructions.classList.toggle("hidden");
  theGame.classList.toggle("hidden");

  initialize(everyCard);
}

//start with cards upsidedown
//position is bottom
//deal all cards and then flip

function initialize(x) {
  setCardStartingPlace(x);
  setTimeout(() => {
    flipThePilesBackOver(x);
  }, 3600);

  setTimeout(() => {
    for (let i = 0; i <= arrayOfContainers.length - 1; i++) {
      spreadTheCards(arrayOfContainers[i], 'normal', 'both', 1000);
    }
    
  }, 3700);
  setTimeout( () => {
    canWeClick = true
    console.log(canWeClick)
    listenToMe()
  }, 4000)
  
  
}

function listenToMe(){
if(canWeClick == true){
  theGame.addEventListener("click", doStuff);
}else if(canWeClick == false){
  theGame.removeEventListener("click", doStuff);
}
}


let deckArray = [];
let count = 0;

function doStuff(e) {
  canWeClick = false
  listenToMe()
  count++;
  if (count === 2) {
    theGame.addEventListener('click', theReveal)
  }
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
    }

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
        x = 48;
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
    }, 7000);

    setTimeout( () => {
      for(let i = 0; i <= arrayOfContainers.length - 1; i++){
        spreadTheCards(arrayOfContainers[i], 'normal', 'both', 1000)
      }
    }, 8000)
  }
if(count < 2){
  setTimeout( () => {
    canWeClick = true
    listenToMe()
  }, 8500)
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

function setCardPlace(deck, delay) {
  let left = 8;
  let top = 25;
  delay = 0;

  for (let i = 0; i <= deck.length - 1; i++) {
    setTimeout(() => {
      if (i % 5 === 0) {
        left = 8;
      }
      dealTheCards(deck[i], top, left, delay);

      left += 20;
      delay += 50;
    }, 50);
  }
}

function theReveal(e){
  let target;
    if (e.target.classList.contains("container")) {
      target = e.target;
    } else if (e.target.classList.contains("card")) {
      target = e.target.parentNode;
    }
    let array = Array.from(target.children)

    console.log(array[5])
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
        x = 48;
        bringThePilesTogether(arrayOfContainers[i], x);
        x -= 20;
      }
}, 1500)
    setTimeout( () => {
    array[5].style.zIndex = '10000000000000'
    array[5].children[0].classList.toggle('flipFront')
    array[5].children[1].classList.toggle('flipBack')
    theGame.removeEventListener('click', theReveal)
    }, 3000 )
    
}