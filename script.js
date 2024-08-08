let userScoreElement = document.querySelector(`#User_score`);
let compScoreElement = document.querySelector(`#comp_score`);
let resultElement = document.querySelector(`.result`);
let resultChoiceElement = document.querySelector(`.resultChoice`);
let resultMsgElement = document.querySelector(`.resultMsg`);
userScoreElement.innerText = `0`;
compScoreElement.innerText = `0`;

let userScore = 0;
let compScore = 0;

let choiceElement = document.querySelectorAll(`.choice`);

choiceElement.forEach((choice) => {
  const userChoice = choice.getAttribute(`id`);
  choice.addEventListener(`click`, () => {
    let compChoice = randChoice();
    winGame(compChoice, userChoice);
    resultChoiceElement.innerText = `Your Choice ${userChoice} And Comp Choice ${compChoice} `;
  });
});

const randChoice = () => {
  let choiceArr = [`Rock`, `Paper`, `Scissor`];
  let randomIdx = Math.floor(Math.random() * 3);
  return choiceArr[randomIdx];
};

const drowGame = (compChoice, userChoice) => {
  if (compChoice === userChoice) {
    resultMsgElement.innerText = `Game is Drow`;
    resultElement.className = ``;
    resultElement.classList.add(`js-Drow`);
  }
};

const winGame = (compChoice, userChoice) => {
  if (compChoice === userChoice) {
    drowGame();
  } else {
    let userWin = true;
    if (userChoice === `Rock`) {
      userWin = compChoice === `Paper` ? false : true;
    } else if (userChoice === `Paper`) {
      userWin = compChoice === `Scissor` ? false : true;
    } else {
      userWin = compChoice === `Rock` ? false : true;
    }
    showWinner(userWin);
  }
};
const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScoreElement.innerText = userScore;
    resultMsgElement.innerText = `User has Win`;
    resultElement.className = ``;
    resultElement.classList.add(`js-win`);
  } else {
    compScore++;
    compScoreElement.innerText = compScore;
    resultMsgElement.innerText = `Computer has Win`;
    resultElement.className = ``;
    resultElement.classList.add(`js-loss`);
  }
};
