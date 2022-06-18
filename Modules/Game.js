export class Game {

    score = 0;
    indexOfQuestion = 0;

    constructor(objQuestions) {
        this.objQuestions = objQuestions;
    }

    actualQuestion() {
        return this.objQuestions[this.indexOfQuestion];
    }

    isEnded(){
        return this.objQuestions.length === this.indexOfQuestion;
    }

    tryingAnswer(answer){
        console.log(answer)
        if (this.actualQuestion().comprobatingAnswer(answer)) {
            this.score++;
        }
        
         this.indexOfQuestion++;
    }
}