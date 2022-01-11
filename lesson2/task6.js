"use strict";

function convertToMonetaryForm(value)
{
    return `${convertToRuble(value)} ${convertToPenny(value * 100 % 100)}`;
}

function convertToRuble(value)
{
    let tempRuble = String(value).length > 2 ? value % 100 : value;

    if (tempRuble / 10 == 1){
                return `${value} рублей`;
            }
            else if (String(tempRuble).length > 1){
                tempRuble /= 10;
            }

            switch (tempRuble){
                case 1:{
                        return `${value} рубль`;
                    }
                case 2:
                case 3:
                case 4:{
                        return `${value} рубля`;
                    }
                default:{
                        return `${value} рублей`;
                    }
            }
}

function convertToPenny(value)
{
    let tempPenny = String(value).length > 2 ? value % 100 : value;

            if (tempPenny / 10 == 1){
                return `${value} копеек`;
            }else if (String(tempPenny).length > 1){
                tempPenny /= 10;
            }

            switch (tempPenny){
                case 1:{
                        return `${value} копейка`;
                    }
                case 2:
                case 3:
                case 4:{
                        return `${value} копейки`;
                    }
                default:{
                        return `${value} копеек`;
                    }
                }
}