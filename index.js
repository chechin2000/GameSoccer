import { newQuestions } from "./Info/questions.js";
import { Game } from "./Modules/Game.js";
import { ModDom } from "./Modules/ModificarDOM.js";

const finish = document.querySelector(".finish");
finish.innerHTML = newQuestions.length;

function againTry(prueba, modDom) {
  if (prueba.isEnded()) {
    modDom.showScore(prueba.score);
  } else {
    showInterfance(prueba, modDom)
  }
}

async function showInterfance(prueba, modDom) {
  await modDom.showQuestion(prueba.actualQuestion().question);
  await modDom.showChoices(prueba.actualQuestion().choices, (answer) => {
    prueba.tryingAnswer(answer);
    againTry(prueba, modDom);
  });
  await modDom.showImg(prueba.actualQuestion().img);
  await modDom.showProgress(prueba.indexOfQuestion + 1);
}

function nexTry() {
  const prueba = new Game(newQuestions);
  const modDom = new ModDom();

  againTry(prueba, modDom);
}

nexTry();

