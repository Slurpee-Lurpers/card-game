function spreadTheCards(e, direction, fill, duration) {
    let x = 0;
    for (let i = 1; i <= e.length - 1; i++) {
        x += 7;
        e[i].animate([
            
            { top : `${x}%`}
        ],
            {
                duration: duration,
                fill: fill,
                iterations: 1,
                direction: direction
            })
            
    }
}

function goBackTheCards(e, direction, fill, duration) {
    let x = 0;
    for (let i = 1; i <= e.length - 1; i++) {
        
        e[i].animate([
            
            { top : `${x - x + 2}%`}
        ],
            {
                duration: duration,
                fill: fill,
                iterations: 1,
                direction: direction
            })
            x += 7;
    }
}

function bringThePilesTogether(e, left) {

    // make x go from 40 to -40
    // using a for loop
    // and the array : arrayOfContainers
    //x = 40, x = 20, x = 0, x = -20, 
    let x = left;
    for (let i = 0; i <= e.length -1; i++) {    
        e[i].animate([
            
        {left : `${x}%`}
        ],
        {
            duration: 500,
            fill: 'forwards',
            iterations: 1
        })
          
 }
    
}