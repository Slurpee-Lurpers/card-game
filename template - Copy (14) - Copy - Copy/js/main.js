const firstArray = Array.from(document.querySelectorAll('.one'))
const secondArray = Array.from(document.querySelectorAll('.two'))
const thirdArray = Array.from(document.querySelectorAll('.three'))

const containerOne = document.getElementById('theFirst')
const containerTwo = document.getElementById('theSecond')
const containerThree = document.getElementById('theThird')

document.addEventListener('click', doStuff)



let wholeArray = []
function doStuff(e) {


    let theFirstPile = Array.from(containerOne.children)
    console.log(theFirstPile)
    let theSecondPile = Array.from(containerTwo.children)
    console.log(theSecondPile)
    let theThirdPile = Array.from(containerThree.children)
    console.log(theThirdPile);

    console.log(theFirstPile.concat(theThirdPile, theSecondPile));
        let target
    if (e.target.classList.contains('container')) {
         target = e.target
         }else if(e.target.classList.contains('card')){
             target = e.target.parentNode
         }

        if (target === containerThree) {
            wholeArray = theFirstPile.concat(theThirdPile, theSecondPile)
        } else if (target === containerOne) {
            wholeArray = theSecondPile.concat(theFirstPile, theThirdPile)
        } else if (target === containerTwo) {
            wholeArray = theFirstPile.concat(theSecondPile, theThirdPile)
        }
        console.log(wholeArray);

        
        let x = 1
        for (i = 0; i <= wholeArray.length - 1; i++) {
            if (x === 1) {
                containerOne.appendChild(wholeArray[i])
                x += 1;
            } else if (x === 2) {
                containerTwo.appendChild(wholeArray[i])
                x += 1
            } else if (x === 3) {
                containerThree.appendChild(wholeArray[i])
                x = 1
            }
            
        }



    }



//on first click
//make an array from the three containers and their elements

// if i pick 15 - 21
// then 15 - 21 cannot change picture and must go to the correct position




//3 ARRAYS

//FIRST, SECOND AND THIRD

//PICK A CARD

//IF ITS IN THE FIRST THEN MAKE AN ARRAY LIKE: ARR[THIRD, FIRST, SECOND]
//ITS ITS IN THE SECOND THEN : ARR[FIRST, SECOND, THIRD]
// IF ITS IN THE THIRD THEN ARR[SECOND, THIRD, FIRST]

//THEN ADD THE NEW ARRAY INDECES ONE AT A TIME STARTING AT THE FIRST ARRAY
//THEN PICK AN ARRAY AND REPEAT

//MAKE ANOTHER ARRAY AND COUNT 11 - THAT WILL BE THE


































// let shuffledArray = []


// function doOtherStuff(e) {
//     pickAnArray(e)
// }



// function pickAnArray(e) {
//     if(e.target !== e.currentTarget){
//         const target = e.target.classList.contains('container') ? e.target : e.target.parentNode;
//         console.log(target);


//     }

// }