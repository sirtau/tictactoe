let currentPlayer = "X";
let gameInProgress = true
console.log(currentPlayer)
let moveCounter = 0
let xWins = 0
let oWins = 0



const winCounter = document.querySelector('#winCounter')
winCounter.innerText = "X Wins: " + xWins + "\nO Wins: " + oWins

const updateMessage = document.querySelector('#updateMessage')
updateMessage.innerText = "Welcome! X goes first."

const resetButton = document.querySelector('#resetButton')
resetButton.addEventListener('click', resetGrid)

const randomTurnButton = document.querySelector('#randomTurnButton')
randomTurnButton.addEventListener('click', randomButton)


const cell0 = document.querySelector('#c0')
const cell1 = document.querySelector('#c1')
const cell2 = document.querySelector('#c2')
const cell3 = document.querySelector('#c3')
const cell4 = document.querySelector('#c4')
const cell5 = document.querySelector('#c5')
const cell6 = document.querySelector('#c6')
const cell7 = document.querySelector('#c7')
const cell8 = document.querySelector('#c8')

const cells = document.querySelectorAll('.cells')

for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', turnExecute)
}

function turnExecute(event) {
    if (gameInProgress == true && event.target.innerText == '') {
        playerInput(event.target)
        winCheck()
        //        console.log(event.target.innerText)


    }
}


function alternatePlayer() {
    if (currentPlayer == 'X') {
        currentPlayer = 'O'
        updateMessage.innerText = "O's Turn."
        //        console.log(currentPlayer)
    } else {
        currentPlayer = 'X'
        updateMessage.innerText = "X's Turn."
        //        console.log(currentPlayer)
    }
}

function winCheck() {

    if (gameInProgress == false) {

    } else if ('' != cell0.innerText && cell0.innerText == cell1.innerText && cell1.innerText == cell2.innerText) {
        winCountUp()
    } else if ('' != cell3.innerText && cell3.innerText == cell4.innerText && cell4.innerText == cell5.innerText) {
        winCountUp()
    } else if ('' != cell6.innerText && cell6.innerText == cell7.innerText && cell7.innerText == cell8.innerText) {
        winCountUp()
    } else if ('' != cell0.innerText && cell0.innerText == cell3.innerText && cell3.innerText == cell6.innerText) {
        winCountUp()
    } else if ('' != cell1.innerText && cell1.innerText == cell4.innerText && cell4.innerText == cell7.innerText) {
        winCountUp()
    } else if ('' != cell2.innerText && cell2.innerText == cell5.innerText && cell5.innerText == cell8.innerText) {
        winCountUp()
    } else if ('' != cell0.innerText && cell0.innerText == cell4.innerText && cell4.innerText == cell8.innerText) {
        winCountUp()
    } else if ('' != cell2.innerText && cell2.innerText == cell4.innerText && cell4.innerText == cell6.innerText) {
        winCountUp()
    } else if (moveCounter == 9) {
        updateMessage.innerText = "DRAW! Click reset to try again."
        gameInProgress = false
    } else alternatePlayer()
}

function playerInput(cells) {
    if (gameInProgress == true && cells.innerText == '') {
        cells.innerText = currentPlayer
        moveCounter++
        console.log(moveCounter)
    }
    //    console.log(currentPlayer)
}


function winCountUp() {

    console.log(currentPlayer + " Wins!")
    updateMessage.innerText = currentPlayer + " Wins!"

    if (currentPlayer == 'X') {
        xWins++
    } else {
        oWins++
    }
    winCounter.innerText = "X Wins: " + xWins + "\nO Wins: " + oWins
    gameInProgress = false
}

function resetGrid() {
    cell0.innerText = ''
    cell1.innerText = ''
    cell2.innerText = ''
    cell3.innerText = ''
    cell4.innerText = ''
    cell5.innerText = ''
    cell6.innerText = ''
    cell7.innerText = ''
    cell8.innerText = ''
    currentPlayer = 'X'
    gameInProgress = true
    moveCounter = 0
    console.log('**RESTART GAME**')
    updateMessage.innerText = "New game started! X goes first."
}


function randomButton() {
    moveCounter++
    randomMove()

}



function randomMove() {

    let moveArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]


    let cpuRandomMove = Math.floor(Math.random() * moveArray.length)
    if (cells[cpuRandomMove].innerText === '' && currentPlayer == "O" && gameInProgress == true) {
        cells[cpuRandomMove].innerText = "O"

        winCheck()



    } else if (cells[cpuRandomMove].innerText === '' && currentPlayer == "X" && gameInProgress == true) {
        cells[cpuRandomMove].innerText = "X"


        winCheck()
    } else if (gameInProgress) {
        moveArray.splice(cpuRandomMove, 1)
        randomMove()
    }


}


