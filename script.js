// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let number = Math.round(Math.random() * 10)
let xAttempts = 1
// eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", function (e) {
  console.log(e.key) 
  if (e.key == 'Enter' && screen1.classList.contains("hide")) {
    handleResetClick()
  }
})

// funções callbacks
function handleTryClick() {
  event.preventDefault()
  const inputNumber = document.querySelector("#inputNumber")
  if (Number(inputNumber.value) == number) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
  }
  inputNumber.value = ""
  xAttempts++
}
function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  number = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
