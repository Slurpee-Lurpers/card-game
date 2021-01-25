//FIRST ANIMATION ON START
function setCardStartingPlace(deck) {
  let lefty = 10 - (deck[0].offsetWidth/2)/(window.innerWidth/100);
  let top = 17;
  delay = 0;

  for (let i = 0; i <= deck.length - 1; i++) {
    setTimeout(() => {
      if (i > 0 && i % 11 === 0) {
        lefty += 20;
      }
      console.log(lefty)
      dealTheStartingCards(deck[i], top, lefty, delay);
      
      delay += 50;
    }, 50);
  }
}

function dealTheStartingCards(card, top, lefty, delay) {
  card.animate(
    [
      { top: "97%", left : `${10 - (card.offsetWidth/2)/(window.innerWidth/100)+ 40}%`},
      { top: `${top}%`, left: `${lefty}%` },
    ],
    {
      duration: 1000,
      fill: "forwards",
      iterations: 1,
      easing: "ease-in-out",
      delay: delay,
    }
  );
}

function cascade(pile) {
  let top = 20;
  for (let i = 0; i < pile.length; i++) {
    pile[i].animate([{ top: `${top}%` }], {
      duration: 500,
      fill: "forwards",
      iterations: 1,
      easing: "ease-out",
      
    });
    top += 7;
  }
}

function spreadTheCards(e, direction, fill, duration) {
  let x = 17;
  
  for (let i = 1; i <= e.length - 1; i++) {
      
      e[i].animate([

          { top: `${x}%` }
      ],
          {
              duration: duration,
              fill: fill,
              iterations: 1,
              direction: direction,
              easing: 'ease-in-out'
          })
    x += 6;
  }
}

function flipThePilesBackOver(e) {

  for (let i = 0; i < e.length; i++) {
    e[i].children[0].classList.toggle("flipFront");
    e[i].children[1].classList.toggle("flipBack");
  }
}

//FIRST FUNCTION ON CLICK
function goBackTheCards(e, direction, fill, duration) {
  let x = 0;
  for (let i = 0; i <= e.length - 1; i++) {
    e[i].animate([{ top: `${x - x + 17}%` }], {
      duration: 1000,
      fill: fill,
      iterations: 1,
      direction: direction,
      easing: "ease-in-out",
      delay: 0,
    });
  }
}

function flipThePilesOver(e) {
  for (let i = 0; i < e.length; i++) {
    e[i].children[0].classList.toggle("flipFront");
    e[i].children[1].classList.toggle("flipBack");
  }
}

function bringThePilesTogether(e, left) {
  let x = left;
  for (let i = 0; i <= e.length - 1; i++) {
    e[i].animate([{ left: `${x}%` }], {
      duration: 500,
      fill: "forwards",
      iterations: 1,
      easing: "ease-in-out",
    });
  }
}

function pilesToTheBottom(deck) {
  for (let i = 0; i <= deck.length - 1; i++) {
    deck[i].animate([{ top: `80%` }], {
      duration: 500,
      fill: "forwards",
      iterations: 1,
      easing: "ease-in-out",
    });
  }
}

function setCardPlace(deck, delay) {
  let pp = 55;
  let left = 10 - (deck[0].offsetWidth/2)/(window.innerWidth/100);
  let top = 17;
  delay = 0;

  for (let i = 0; i <= deck.length - 1; i++) {
    setTimeout(() => {
      if (i % 5 === 0) {
        
        left = 10 - (deck[0].offsetWidth/2)/(window.innerWidth/100);
      }
      dealTheCards(deck[i], top, left, delay, pp);
      console.log(i)
      pp--
      left += 20;
      delay += 100;
      
    }, 50);
  }
}



function dealTheCards(card, toppy, left, delay, zindex) {
  card.animate([
    {zIndex : `${zindex}`},
    { top: `${toppy}%`, left: `${left}%`},
    {zIndex : 1, top: `${toppy}%`, left: `${left}%` }
    ], 
    {
    duration: 1500,
    fill: "forwards",
    iterations: 1,
    delay: delay,
  });
}
