export class ModDom {
    constructor(){

    }

    showQuestion(question){
        const text = document.querySelector(".question")
        text.innerHTML = question;
    }

    showChoices(choices, callback){
        const containerChoices = document.querySelector(".buttons")
        containerChoices.innerHTML = "";
        for (let i = 0; i < choices.length ; i++) {
            const button = document.createElement("button")
            button.value = i;
            button.innerHTML = choices[i]
            containerChoices.appendChild(button);
            button.addEventListener("click", ()=>{
                callback(choices[i], button.value)
            })
        }
    }

    showProgress(number){
        const actual = document.querySelector(".now");
        actual.innerHTML = number;
    }

    showImg(img) {
        const imgToShow = document.querySelector(".questionImg");

        imgToShow.setAttribute("src",img)
    }


    showScore(score){
        const cartel = document.querySelector(".containerQuestions");
        cartel.innerHTML = `
            <h2 class="finishText">¡Terminaste!<h2>
            <p class="score">Tu puntaje es ${score} <p/>
        `
    }
}