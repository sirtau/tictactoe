let currentPlayer = "X";
let gameInProgress = true
console.log(currentPlayer)
let moveCounter = 0
let xWins = 0
let oWins = 0
let moveArray = ['', '', '', '', '', '', '', '', '']

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
        var currentMove = Array.from(cells).indexOf(event.target)
        moveArray[currentMove] = currentPlayer
        console.log(moveArray)
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

    } else if ('' != moveArray[0] && moveArray[0] == moveArray[1] && moveArray[1] == moveArray[2]) {
        cell0.style.background = 'lightgreen'
        cell1.style.background = 'lightgreen'
        cell2.style.background = 'lightgreen'
        winCountUp()
    } else if ('' != moveArray[3] && moveArray[3] == moveArray[4] && moveArray[4] == moveArray[5]) {
        cell3.style.background = 'lightgreen'
        cell4.style.background = 'lightgreen'
        cell5.style.background = 'lightgreen'
        winCountUp()
    } else if ('' != moveArray[6] && moveArray[6] == moveArray[7] && moveArray[7] == moveArray[8]) {
        cell6.style.background = 'lightgreen'
        cell7.style.background = 'lightgreen'
        cell8.style.background = 'lightgreen'
        winCountUp()
    } else if ('' != moveArray[0] && moveArray[0] == moveArray[3] && moveArray[3] == moveArray[6]) {
        cell0.style.background = 'lightgreen'
        cell3.style.background = 'lightgreen'
        cell6.style.background = 'lightgreen'
        winCountUp()
    } else if ('' != moveArray[1] && moveArray[1] == moveArray[4] && moveArray[4] == moveArray[7]) {
        cell1.style.background = 'lightgreen'
        cell4.style.background = 'lightgreen'
        cell7.style.background = 'lightgreen'
        winCountUp()
    } else if ('' != moveArray[2] && moveArray[2] == moveArray[5] && moveArray[5] == moveArray[8]) {
        cell2.style.background = 'lightgreen'
        cell5.style.background = 'lightgreen'
        cell8.style.background = 'lightgreen'
        winCountUp()
    } else if ('' != moveArray[0] && moveArray[0] == moveArray[4] && moveArray[4] == moveArray[8]) {
        cell0.style.background = 'lightgreen'
        cell4.style.background = 'lightgreen'
        cell8.style.background = 'lightgreen'
        winCountUp()
    } else if ('' != moveArray[2] && moveArray[2] == moveArray[4] && moveArray[4] == moveArray[6]) {
        cell2.style.background = 'lightgreen'
        cell4.style.background = 'lightgreen'
        cell6.style.background = 'lightgreen'
        winCountUp()
    } else if (moveCounter == 9) {
        updateMessage.innerText = "DRAW! Click reset to try again."
        gameInProgress = false
        for (i = 0; i < cells.length; i++) {
            cells[i].style.background = 'rgb(255, 181, 181)'
        }
    } else alternatePlayer()
}

function playerInput(cells) {
    if (gameInProgress == true && cells.innerText == '') {
        cells.innerText = currentPlayer

        console.log("PlayerInput " + moveArray)
        moveCounter++
    }

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
    for (i = 0; i < cells.length; i++) {
        cells[i].style.background = ''
        cells[i].innerText = ''
    }

    moveArray = ['', '', '', '', '', '', '', '', '']
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
    let cpuRandomMove = Math.floor(Math.random() * moveArray.length)

    if (moveArray[cpuRandomMove] == '' && currentPlayer == "O" && gameInProgress == true) {
        cells[cpuRandomMove].innerText = "O"
        moveArray[cpuRandomMove] = 'O'
        console.log(cpuRandomMove)



    } else if (moveArray[cpuRandomMove] == '' && currentPlayer == "X" && gameInProgress == true) {
        cells[cpuRandomMove].innerText = "X"
        moveArray[cpuRandomMove] = 'X'
        console.log(cpuRandomMove)

    } else if (gameInProgress) {
        console.log(cpuRandomMove)
        randomMove()
    }

    winCheck()
}


