const cardFaces = []

for (let i = 0; i <= 3; i++) {
    if(i === 0){
        cardSuit = 'C'
    }else if( i === 1){
        cardSuit = 'S'
    }else if( i === 2){
        cardSuit === 'D'
    }else if( i === 3){
        cardSuit = 'H'
    }
    for (let y = 2; y <= 13; y++) {
        cardNumber = y;
        if( y <= 8){
            cardName = cardNumber
        }else if( y === 9){
            cardName = 'T'
        }else if ( y === 10){
            cardName = 'J'
        }else if( y === 11 ){
            cardName = 'Q'
        }else if(y === 12){
            cardName = 'K'
        }else{
            cardName = 'A'
        }
        cardFaces.push(`${cardName}${cardSuit}.svg`)
        cardNumber += 1

    }
}
console.log(cardFaces);

/*
4 suits  C D S H

2 - 9 + T J Q K A

FORMAT IS CARDNAME + CARDSUIT + .SVG


EXTRAS ARE TWO JOKERS AND 'BACK OF CARD'

xH.svg

2H.svg
---- 9H.svg
TH.svg
JH.svg
 */