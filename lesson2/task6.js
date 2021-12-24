"use strict";
/**
 * 
 * @param {float} sum 
 * @returns returns the value in the correct case
 */
function convertToMonetaryForm(sum)
{
    let ruble = parseInt(sum);
    let penny = sum * 100 % 100;

    return `${convertToRubleForm(ruble)} ${convertToPennyForm(penny)}`;
}

function convertToRubleForm(sum)
{
    let result = "рублей";
    let tempSum = sum;

        if (String(tempSum).length > 1)
        {
            if (parseInt(tempSum / 10) != 1)
            {
                tempSum %= 10;
                result = getRubleCase(tempSum);
            }
        }
        else
        {
            result = getRubleCase(tempSum);
        }

        return `${sum} ${result}`;
}

function convertToPennyForm(sum)
{
    let result = "копеек";
    let tempSum = sum;

        if (String(tempSum).length > 1)
        {
            if (parseInt(tempSum / 10) != 1)
            {
                tempSum %= 10;
                result = getPennyCase(tempSum);
            }
        }
        else
        {
            result = getPennyCase(tempSum);
        }

        return `${sum} ${result}`;
}

/**
 * the method converts the value of the passed variable into the corresponding case
 * @param {number} number value from 0 to 9
 * @returns returns the value in the correct case
 */
function getRubleCase(number)
{
    if (number == 2 || number == 3 || number == 4)
    {
        return "рубля";
    }
    else if (number == 1)
    {
        return "рубль";
    }

    return "рублей";
}

/**
 * the method converts the value of the passed variable into the corresponding case
 * @param {number} number value from 0 to 9
 * @returns returns the value in the correct case
 */
function getPennyCase(number)
{
    if (number == 2 || number == 3 || number == 4)
    {
        return "копейки";
    }
    else if (number == 1)
    {
        return "копейка";
    }

    return "копеек";
}