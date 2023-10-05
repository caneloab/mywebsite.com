const mySelect = document.getElementById("my-select")
const changeOutput = document.getElementById("change-output")

mySelect.addEventListener("change", function (event) {
  changeOutput.textContent = `You selected ${event.target.value}!`
})

const myInput = document.getElementById("my-input")
const focusBlurOutput = document.getElementById("focus-blur-output")

myInput.addEventListener("focus", function (event) {
  focusBlurOutput.textContent = "The input is in focus!"
})

myInput.addEventListener("blur", function (event) {
  focusBlurOutput.textContent = "The input no longer has focus!"
})