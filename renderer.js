/* Este arquivo contém a lógica do cronômetro. */

let timer
let isRunning = false
let seconds = 0

const timerDisplay = document.getElementById('timer')
const startButton  = document.getElementById('start')
const pauseButton  = document.getElementById('pause')
const resetButton  = document.getElementById('reset')
const closeButton  = document.getElementById('close')

function updateDisplay() {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0')
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')
    const secs = String(seconds % 60).padStart(2, '0')
    timerDisplay.textContent = `${hours}:${minutes}:${secs}`
}

startButton.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true
        timer = setInterval(() => {
            seconds++
            updateDisplay()
        }, 1000)
    }
})

pauseButton.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer)
        isRunning = false
    }
})

resetButton.addEventListener('click', () => {
    clearInterval(timer)
    seconds = 0
    isRunning = false
    updateDisplay()
})

closeButton.addEventListener('click', () => {
    const confirmation = confirm("Você tem certeza que deseja fechar o aplicativo?")
    if (confirmation) {
        window.close()
    }
})
