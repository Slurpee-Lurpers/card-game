//FIRST ANIMATION ON START
function setCardStartingPlace(deck) {
  let left = 8;
  let top = 25;
  delay = 0;

  for (let i = 0; i <= deck.length - 1; i++) {
    setTimeout(() => {
      if (i > 0 && i % 11 === 0) {
        left += 20;
      }
      dealTheStartingCards(deck[i], top, left, delay);
      
      delay += 50;
    }, 50);
  }
}

function dealTheStartingCards(card, top, left, delay) {
  card.animate(
    [
      { top: "100%", left: "45%" },
      { top: `${top}%`, left: `${left}%` },
    ],
    {
      duration: 500,
      fill: "forwards",
      iterations: 1,
      easing: "ease-in-out",
      delay: delay,
    }
  );
}

function cascade(pile) {
  let top = 25;
  for (let i = 0; i < pile.length; i++) {
    pile[i].animate([{ top: `${top}%` }], {
      duration: 500,
      fill: "forwards",
      iterations: 1,
      easing: "ease-in-out",
      
    });
    top += 5;
  }
}

function spreadTheCards(e, direction, fill, duration) {
  let x = 25;
  for (let i = 1; i <= e.length - 1; i++) {
      x += 5;
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
    e[i].animate([{ top: `${x - x + 23}%` }], {
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

function dealTheCards(card, top, left, delay) {
  card.animate([{ top: `${top}%`, left: `${left}%` }], {
    duration: 1000,
    fill: "forwards",
    iterations: 1,
    easing: "ease-in-out",
    delay: delay,
  });
}
