import './style.css'

let teamScoreCounter = 0
const points = document.querySelectorAll('i')
const teamScore = document.querySelector('h3')

function clickPoint(event: MouseEvent) {
  const pointClicked = event.target

  if (pointClicked instanceof HTMLElement) {
    if (pointClicked.classList.contains('add') && teamScoreCounter < 21) {
      teamScoreCounter++
    }
    if (pointClicked.classList.contains('subtract') && teamScoreCounter > 0) {
      teamScoreCounter--
    }
  }
  if (teamScore instanceof HTMLHeadingElement) {
    teamScore.textContent = `${teamScoreCounter}`
  }
  if (teamScoreCounter == 21) {
    window.alert(`Congratulations ${teamName?.innerText} Won!`)
  }
}
points.forEach((point) => point.addEventListener('click', clickPoint))

const inputBox = document.querySelector('input')
const teamName = document.querySelector('h2')

function updateTeamName(event: Event) {
  const updatedName = event.target

  if (
    updatedName instanceof HTMLInputElement &&
    teamName instanceof HTMLHeadingElement
  ) {
    const currentInput = updatedName.value
    teamName.innerText = currentInput
  }
}
inputBox?.addEventListener('input', updateTeamName)
