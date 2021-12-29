let renderer = {
    renderTopic(topic){
        console.clear();
        topic.print();
    },

    renderGameOver(correctAnswersCounter){
        console.clear();
        console.log(`Количество правильных ответов: ${correctAnswersCounter} из ${config.topics.length}`);
        console.log("Спасибо за игру!");  
    },

    renderRequestContinuation(correctAnswersCounter){
        console.clear();
        console.log(`Количество правильных ответов: ${correctAnswersCounter} из ${config.topics.length}`);
        console.log("Спасибо за игру!");  
        console.log("Если хотите продолжить игру нажмите \"OK\".")
    },
};