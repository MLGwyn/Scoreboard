import './style.css'
const teamScoreCounter: number[] = [0, 0]

const points = document.querySelectorAll('i')
const teamScores = document.querySelectorAll('h3')
const inputBoxes = document.querySelectorAll('input')
const teamNames = document.querySelectorAll('h2')
teamNames.forEach((name) => name.innerText)
const reset = document.querySelector('h1')

function clickPoint(event: MouseEvent) {
  const pointClicked = event.target
  let teamNumber = 0
  if (pointClicked instanceof HTMLElement) {
    if (pointClicked.parentElement?.parentElement?.className == 'team1') {
      teamNumber = 0
    } else if (
      pointClicked.parentElement?.parentElement?.className == 'team2'
    ) {
      teamNumber = 1
    }
    if (
      pointClicked.classList.contains('add') &&
      teamScoreCounter[teamNumber] < 21
    ) {
      teamScoreCounter[teamNumber]++
    }
    if (
      pointClicked.classList.contains('subtract') &&
      teamScoreCounter[teamNumber] > 0
    ) {
      teamScoreCounter[teamNumber]--
    }
  }
  if (teamScores[teamNumber] instanceof HTMLHeadingElement) {
    teamScores[teamNumber].textContent = `${teamScoreCounter[teamNumber]}`
  }
  if (pointClicked instanceof HTMLHeadingElement) {
    pointClicked.classList.contains('h1')
    window.alert('resetting scores')
    {
      teamScoreCounter[0] = 0
      teamScores[0].textContent = `${teamScoreCounter[0]}`
      teamScoreCounter[1] = 0
      teamScores[1].textContent = `${teamScoreCounter[1]}`
    }
  }
  if (teamScoreCounter[teamNumber] == 21) {
    window.alert(`Congratulations ${teamNames[teamNumber].innerText} Won!`)
  }
}

points.forEach((point) => point.addEventListener('click', clickPoint))
reset?.addEventListener('click', clickPoint)
function updateTeamName(event: Event) {
  const updatedName = event.target

  if (updatedName instanceof HTMLInputElement) {
    if (updatedName.parentElement?.parentElement?.className == 'team1') {
      const currentInput = updatedName.value
      teamNames[0].innerText = currentInput
    } else {
      const currentInput = updatedName.value
      teamNames[1].innerText = currentInput
    }
  }
}
inputBoxes.forEach((inputBox) =>
  inputBox?.addEventListener('input', updateTeamName)
)
