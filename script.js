const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let number = Math.round(Math.random() * 10)
let xAttempts = 1
function handleTryClick() {
  event.preventDefault()
  const inputNumber = document.querySelector("#inputNumber")
  if (Number(inputNumber.value) == number) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
    screen2.querySelector(
      "h2"
    ).innerText = `Acertou em ${xAttempts} tentativas`
  }
  inputNumber.value = ""
  xAttempts++
}
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", function () {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  xAttempts = 1
})
