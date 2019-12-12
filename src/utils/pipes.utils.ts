/**
 * @description Add a '0' in front of 1 digit numbers
 * @param number 
 */
export const addZeroOnNumber = function(number: number | string = 0) {
    const numberString = number.toString();

    return numberString.length === 1 ?
        `0${numberString}` :
        numberString
}