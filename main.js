const messageResult = document.querySelector(".messageResult")
const cardsResults = document.querySelector(".cardsResults")
const totalSumOfCards = document.querySelector(".totalSumOfCards")
const startGame = document.querySelector(".startGame")
const nextCard = document.querySelector(".nextCard")

let cards = []
let card1 = 0
let card2 = 0
let totalScore = 0
let active = false

startGame.addEventListener("click", function(){
    active = true
    reset()
    let random = Math.floor(Math.random()*11 +1)
    card1 = random
    card2 = random
    cards.push(card1, card2)
    messageUpdate()
})

nextCard.addEventListener("click", function(){
    gameActive()
    messageUpdate()
})

function totalCardSum(){
    for (let card of cards){
        totalScore += card
    }
    
}
function messageResults(){
    cardsResults.innerHTML = `CARDS - ${cards }`
    totalSumOfCards.innerHTML = `SCORE - ${totalScore}`
}

function messageUpdate(){
    totalCardSum()
    if (totalScore < 21 && active) {
        messageResult.innerHTML = `Play again?`
        nextCard.style.display = "block"
        startGame.innerHTML = `NEW GAME`
        messageResults()
        // cardsResults.innerHTML = `CARDS - ${cards }`
        // totalSumOfCards.innerHTML = `SCORE - ${totalScore}`
    } else if (totalScore === 21){
        messageResult.innerHTML = `!!WINNER!!`
        messageResults()
        // cardsResults.innerHTML = `CARDS - ${cards }`
        // totalSumOfCards.innerHTML = `SCORE - ${totalScore}`
        active = false
    } else if (totalScore > 21 && active){
        messageResult.innerHTML = `GAME OVER`
        startGame.innerHTML = `NEW GAME`
        messageResults()
        // cardsResults.innerHTML = `CARDS - ${cards }`
        // totalSumOfCards.innerHTML = `SCORE - ${totalScore}`
        active = false
    }
}

function gameActive(){
    if (totalScore < 21) {
        totalScore = 0
        let random = Math.floor(Math.random()*11 +1)
        cards.push(random)
    } else {
        messageUpdate()
    }
}

function reset(){
    cards = []
    card1 = 0
    card2 = 0
    totalScore = 0
    startGame.innerHTML = `START GAME`
}

