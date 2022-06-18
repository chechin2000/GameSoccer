export class Question {
    constructor(img,question,choices,answer){
        this.img = img;
        this.question = question;
        this.choices = choices;
        this.answer = answer;
    }

    comprobatingAnswer(answer){
        return this.choices.indexOf(answer) == this.answer;
    }
}

