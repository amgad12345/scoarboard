const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

const team1 = () => {
  const name = document.querySelector('.team-1-input').value
  document.querySelector('.team-1-name').textContent = name
}

const team2 = () => {
  const name = document.querySelector('.team-2-input').value
  document.querySelector('.team-2-name').textContent = name
}

let teamleft = 10
let teamright = 10

const teamleftadd = () => {
  teamleft++
  document.querySelector('.team-1-score').textContent = teamleft
}

const teamleftsub = () => {
  teamleft--
  document.querySelector('.team-1-score').textContent = teamleft
}

const teamrightadd = () => {
  teamright++
  document.querySelector('.team-2-score').textContent = teamright
}

const teamrightsub = () => {
  teamright--
  document.querySelector('.team-2-score').textContent = teamright
}

const nozero = () => {
  let lt = parseInt(document.querySelector('.team-1-score').textContent)

  if (lt < 0) {
    teamleft = 0
    lt = 0
    document.querySelector('.team-1-score').textContent = lt
  }
}

const nozeror = () => {
  let rt = parseInt(document.querySelector('.team-2-score').textContent)
  if (rt < 0) {
    teamright = 0
    rt = 0
    document.querySelector('.team-2-score').textContent = rt
  }
}

const no21 = () => {
  const lt1 = parseInt(document.querySelector('.team-1-score').textContent)

  if (lt1 > 21) {
    lt1 = 21
    document.querySelector('.team-1-score').textContent = lt1
  }
}

const no21r = () => {
  const rt2 = parseInt(document.querySelector('.team-2-score').textContent)

  if (rt2 > 21) {
    rt2 = 21
    document.querySelector('.team-2-score').textContent = rt2
  }
}

const dis1 = () => {
  const dlt = parseInt(document.querySelector('.team-1-score').textContent)

  if (dlt >= 21) {
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.left-text').textContent =
      'YOU DID IT CHAMP !!!!!!!'
  }
}

const dis2 = () => {
  const drt = parseInt(document.querySelector('.team-2-score').textContent)
  if (drt >= 21) {
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.right-text').textContent =
      'YOU DID IT CHAMP !!!!!!!'
  }
}

const resetl = () => {
  teamleft = 0
  document.querySelector('.team-1-score').textContent = 0
  document.querySelector('.team-1-name').textContent = 'Team 1'
  document.querySelector('.team-1-add-1-button').disabled = false
}

const resetr = () => {
  teamright = 0
  document.querySelector('.team-2-score').textContent = 0
  document.querySelector('.team-2-name').textContent = 'Team 2'
  document.querySelector('.team-2-add-1-button').disabled = false
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.update-team-1-name').addEventListener('click', team1)
document.querySelector('.update-team-2-name').addEventListener('click', team2)
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', teamleftadd)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', teamleftsub)
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', teamrightadd)
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', teamrightsub)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', nozero)
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', nozeror)
document.querySelector('.team-1-add-1-button').addEventListener('click', no21)
document.querySelector('.team-2-add-1-button').addEventListener('click', no21)
document.querySelector('.team-1-add-1-button').addEventListener('click', dis1)
document.querySelector('.team-2-add-1-button').addEventListener('click', dis2)
document.querySelector('.reset-l').addEventListener('click', resetl)
document.querySelector('.reset-r').addEventListener('click', resetr)
