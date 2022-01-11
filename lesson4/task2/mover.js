let mover = {
    getDirection() {
        const availbleDirections = [1,2,3,4,6,7,8,9];
        while(true){
            let direction = parseInt(prompt("Введите число (2, 4, 6 или 8), куда вы хотите переместиться, \"Отмена\" для выхода."));
            if (isNaN(direction)){
                return null;
            }
            if (!availbleDirections.includes(direction)){
                alert("Для перемещения необходимо ввести одно из чисел 2, 4, 6, 8.");
                continue;
            }
            return direction;
        }
    },

    getNextPosition (direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch(direction){
            case 1:{
                if(nextPosition.x - 1 >= 0 && nextPosition.y + 1 < config.rowsCount){
                    nextPosition.x--;
                    nextPosition.y++;
                }
                break;
            }
            case 2:{
                if(nextPosition.y + 1 < config.rowsCount){
                    nextPosition.y++;
                }
                break;
            } 
            case 3:{
                if(nextPosition.x + 1 < config.colsCount && nextPosition.y + 1 < config.rowsCount) {
                    nextPosition.x++;
                    nextPosition.y++;
                }
                break;
            }
            case 4:{
                if(nextPosition.x - 1 >= 0) {
                    nextPosition.x--;
                }
                break;
            }
            case 6:{
                if(nextPosition.x + 1 < config.colsCount) {
                    nextPosition.x++;
                }
                break;
            }
            case 7: {
                if(nextPosition.x - 1 >= 0 && nextPosition.y - 1 >= 0) {
                    nextPosition.x--;
                    nextPosition.y--;
                }
                break;
            }
            case 8:{
                if(nextPosition.y - 1 >= 0) {
                nextPosition.y--;
                }
                break;
            }
            case 9: {
                if(nextPosition.x + 1 < config.colsCount && nextPosition.y - 1 >= 0) {
                    nextPosition.x++;
                    nextPosition.y--;
                }
                break;
            }
        }
        return nextPosition;
    }
};