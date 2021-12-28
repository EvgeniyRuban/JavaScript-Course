let game = {

    correctAnswersCounter: 0,

    run(){
        while(true){
            this.shuffleTopics();
            for(let i = 0; i < config.topics.length; i++){
                config.topics[i].shuffleAnswers();
                renderer.renderTopic(config.topics[i]);
                let answerNumber = null;
                while(true){
                    answerNumber = prompt("Введите номер правильного ответа.");
                    if(this.isInputValid(answerNumber = Number.parseInt(answerNumber))){
                        if(config.topics[i].isAnswerCorrect(config.topics[i].answers[answerNumber - 1])){
                            this.correctAnswersCounter++;
                        }
                        break;
                    }
                    else if(answerNumber === null){
                        renderer.renderGameOver(this.correctAnswersCounter);
                        return
                    }
                    else{
                        renderer.renderTopic(config.topics[i]);
                        console.log("Некорректный номер ответа.");
                    }
                }
            }
            renderer.renderAscToContinue(this.correctAnswersCounter);
            if(!confirm()){
                return;
            }
            this.correctAnswersCounter = 0;
        }
    },

    init(){
        console.log("Приветствую Вас в игре \"Кто хочет стать Миллионером\"!")
        console.log("Для начала игры введите \"game.run()\".");
    },

    shuffleTopics(){
        for(let i = 0; i < config.topics.length; i++){
            swapper.swap(config.topics, i, random.getRandomInt(config.topics.length));
        }
    },

    isInputValid(value){
        return Number.isInteger(value) && value >= 1  && value <= 4;
    }
};

game.init();