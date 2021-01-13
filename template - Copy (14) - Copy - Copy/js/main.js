const firstArray = Array.from(document.querySelectorAll('.one'))
const secondArray = Array.from(document.querySelectorAll('.two'))
const thirdArray = Array.from(document.querySelectorAll('.three'))
const fourthArray = Array.from(document.querySelectorAll('.four'))

const containerOne = document.getElementById('theFirst')
const containerTwo = document.getElementById('theSecond')
const containerThree = document.getElementById('theThird')
const containerFour = document.getElementById('theFourth')
const containerFive = document.getElementById('theFifth')
const containerSix = document.getElementById('theSixth')
document.addEventListener('click', doStuff)

// window.onload = () => {
//     firstArray.forEach(e => e.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`)
//     secondArray.forEach(e => e.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`)
//     thirdArray.forEach(e => e.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`)
//     fourthArray.forEach(e => e.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`)

//     }

let deckArray = []
function doStuff(e) {


    let theFirstPile = Array.from(containerOne.children)
    
    let theSecondPile = Array.from(containerTwo.children)
    
    let theThirdPile = Array.from(containerThree.children)
    
    let theFourthPile = Array.from(containerFour.children)

    let theFifthPile = Array.from(containerFive.children)
    
    

    console.log(theFirstPile.concat(theThirdPile, theSecondPile));
        let target
    if (e.target.classList.contains('container')) {
         target = e.target
         }else if(e.target.classList.contains('card')){
             target = e.target.parentNode
         }
        
        let middleArray = []
        let topArray = []
        let bottomArray = []
        
        if(target === containerThree){   //middle
            middleArray = theThirdPile;
            topArray = theFirstPile.concat(theSecondPile)
            bottomArray = theFourthPile.concat(theFifthPile)
            
        } else if (target === containerOne){  //first
            middleArray = theFirstPile;
            topArray = theFourthPile.concat(theFifthPile)
            bottomArray = theSecondPile.concat(theThirdPile)
            
        } else if (target === containerTwo){  //second
            middleArray = theSecondPile;
            topArray = theFifthPile.concat(theFirstPile)
            bottomArray = theThirdPile.concat(theFourthPile)
            
        }else if (target === containerFour){  //fourth
            middleArray = theFourthPile;
            topArray = theSecondPile.concat(theThirdPile)  
            bottomArray = theFifthPile.concat(theFirstPile)
          
        }else if (target === containerFive){  //fifth
            middleArray = theFifthPile;
            topArray = theThirdPile.concat(theFourthPile)
            bottomArray = theFirstPile.concat(theSecondPile)
            
        }
        deckArray = topArray.concat(middleArray, bottomArray)

        // if(target === containerThree) {
        //     deckArray = theFirstPile.concat(theThirdPile, theSecondPile)
        // } else if (target === containerOne) {
        //     deckArray = theSecondPile.concat(theFirstPile, theThirdPile)
        // } else if (target === containerTwo) {
        //     deckArray = theFirstPile.concat(theSecondPile, theThirdPile)
        // }
        console.log(deckArray);

        
        let x = 1
        for (i = 0; i <= deckArray.length - 1; i++) {
            console.log(x)
            if (x === 1) {
                containerOne.appendChild(deckArray[i])
                x += 1;
            } else if (x === 2) {
                containerTwo.appendChild(deckArray[i])
                x += 1
            } else if (x === 3) {
                containerThree.appendChild(deckArray[i])
                x += 1
            } else if (x === 4){
                containerFour.appendChild(deckArray[i])
                x += 1
            }  else if (x === 5){
                containerFive.appendChild(deckArray[i])
                x = 1
            }
            
        }

}
