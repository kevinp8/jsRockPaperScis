Array.from(document.querySelectorAll('.choice')).forEach(element => element.addEventListener('click', game))

document.querySelector('#nextRound').addEventListener('click', next)

let playerPoints = 0
let cpuPoints = 0

function computerPlay() {
    const choiceNumber = Math.ceil(Math.random()*3)
    switch (choiceNumber) {
        case 1:
            return 'rock'
            break
        case 2:
            return 'paper'
            break
        case 3:
            return 'scissors'
            break
    }
}

function checkScore() {
    if (playerPoints === 5 || cpuPoints === 5) {
    document.querySelector('#endPop').classList.toggle('hidden')
    }
    if (playerPoints > cpuPoints) {
        document.querySelector('#whoWonGame').textContent = 'YOU WIN THE GAME!'
        document.querySelector('#finalScores').textContent = `${playerPoints} - ${cpuPoints}`
    } else {
        document.querySelector('#whoWonGame').textContent = 'YOU LOSE THE GAME!'
        document.querySelector('#finalScores').textContent = `${playerPoints} - ${cpuPoints}`
    }
}

function next() {
    document.querySelector('.rock').classList.remove('hidden')
    document.querySelector('.paper').classList.remove('hidden')
    document.querySelector('.scissors').classList.remove('hidden')
    document.querySelector('#nextRound').classList.toggle('hidden')
    document.querySelector('#whoWonRound').textContent = ''
}

function oneRound(playerChoice){
    const cpuChoice = computerPlay()
    if (playerChoice === 'rock') {
        if (cpuChoice === 'rock') {
            document.querySelector('#whoWonRound').textContent = 'Tie!'
            checkScore()
        }
        if (cpuChoice === 'paper') {
            document.querySelector('#whoWonRound').textContent = 'Computer wins the round!'
            cpuPoints++
            document.querySelector('#cpuPoints').textContent = cpuPoints
            checkScore()
        }
        if (cpuChoice === 'scissors') {
            document.querySelector('#whoWonRound').textContent = 'You win the round!'
            playerPoints++
            document.querySelector('#playerPoints').textContent = playerPoints
            checkScore()
        }
    }
    if (playerChoice === 'paper') {
        if (cpuChoice === 'paper') {
            document.querySelector('#whoWonRound').textContent = 'Tie!'
        }
        if (cpuChoice === 'scissors') {
            document.querySelector('#whoWonRound').textContent = 'Computer wins the round!'
            cpuPoints++
            document.querySelector('#cpuPoints').textContent = cpuPoints
            checkScore()
        }
        if (cpuChoice === 'rock') {
            document.querySelector('#whoWonRound').textContent = 'You win the round!'
            playerPoints++
            document.querySelector('#playerPoints').textContent = playerPoints
            checkScore()
        }
    }
    if (playerChoice === 'scissors') {
        if (cpuChoice === 'scissors') {
            document.querySelector('#whoWonRound').textContent = 'Tie!'
        }
        if (cpuChoice === 'rock') {
            document.querySelector('#whoWonRound').textContent = 'Computer wins the round!'
            cpuPoints++
            document.querySelector('#cpuPoints').textContent = cpuPoints
            checkScore()
        }
        if (cpuChoice === 'paper') {
            document.querySelector('#whoWonRound').textContent = 'You win the round!'
            playerPoints++
            document.querySelector('#playerPoints').textContent = playerPoints
            checkScore()
        }
    }
}

function hide() {
    document.querySelector('.rock').classList.add('hidden')
    document.querySelector('.paper').classList.add('hidden')
    document.querySelector('.scissors').classList.add('hidden')
    document.querySelector('#nextRound').classList.toggle('hidden')
}

function game(click) {
    if (click.target.classList.contains('rock')) {
        oneRound('rock')
        hide()
    }
    if (click.target.classList.contains('paper')) {
        oneRound('paper')
        hide()
    }
    if (click.target.classList.contains('scissors')) {
        oneRound('scissors')
        hide()
    }
}


