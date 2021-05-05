let  currentPlayer = "X";
let gameInProgress = true
console.log(currentPlayer)
let moveCounter = 0


const resetButton = document.querySelector('#resetButton')
resetButton.addEventListener('click', resetGrid)



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
     
    playerInput(event.target)
    winCheck()
    alternatePlayer()
}


function alternatePlayer() {
    if (currentPlayer == 'X') {
        currentPlayer = 'O'
        //        console.log(currentPlayer)
    } else {
        currentPlayer = 'X'
        //        console.log(currentPlayer)
    }
}

function winCheck() {

    if (gameInProgress == false) {

    } else if ('' != cell0.innerText && cell0.innerText == cell1.innerText && cell1.innerText == cell2.innerText) {
        console.log(currentPlayer + " Wins!")
        gameInProgress = false
    } else if ('' != cell3.innerText && cell3.innerText == cell4.innerText && cell4.innerText == cell5.innerText) {
        console.log(currentPlayer + " Wins!")
        gameInProgress = false
    } else if ('' != cell6.innerText && cell6.innerText == cell7.innerText && cell7.innerText == cell8.innerText) {
        console.log(currentPlayer + " Wins!")
        gameInProgress = false
    } else if ('' != cell0.innerText && cell0.innerText == cell3.innerText && cell3.innerText == cell6.innerText) {
        console.log(currentPlayer + " Wins!")
        gameInProgress = false
    } else if ('' != cell1.innerText && cell1.innerText == cell4.innerText && cell4.innerText == cell7.innerText) {
        console.log(currentPlayer + " Wins!")
        gameInProgress = false
    } else if ('' != cell2.innerText && cell2.innerText == cell5.innerText && cell5.innerText == cell8.innerText) {
        console.log(currentPlayer + " Wins!")
        gameInProgress = false
    } else if ('' != cell0.innerText && cell0.innerText == cell4.innerText && cell4.innerText == cell8.innerText) {
        console.log(currentPlayer + " Wins!")
        gameInProgress = false
    } else if ('' != cell2.innerText && cell2.innerText == cell4.innerText && cell4.innerText == cell6.innerText) {
        console.log(currentPlayer + " Wins!")
        gameInProgress = false
    }
}

function playerInput(cells) {
    if (gameInProgress == true && cells.innerText == '') {
        cells.innerText = currentPlayer
    }
    //    console.log(currentPlayer)
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
}


