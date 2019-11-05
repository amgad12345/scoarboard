const main = () => {
  console.log('hello script')
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

let teamleft = 0
let teamright = 0

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
