
class Topic{
    constructor(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    shuffleAnswers(){
        for(let i = 0; i < this.answers.length; i++){
            swapper.swap(this.answers, i, random.getRandomInt(this.answers.length));
        }
    }

    print(){
        console.log(this.question);
        for(let i = 0; i < this.answers.length; i++) {
            console.log(`${i + 1}) ${this.answers[i]}`);
        }
    }

    isAnswerCorrect(answer){
        return answer == this.correctAnswer;
    }
}