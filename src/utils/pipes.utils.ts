/**
 * @description Add a '0' in front of 1 digit numbers
 * @param {number | string} number 
 */
export const addZeroOnNumber = function(number: number | string = 0): string {
    const numberString = number.toString();

    return numberString.length === 1 ?
        `0${numberString}` :
        numberString
}

/**
 * @description Parse a millisecond number to a time on mm:ss format
 * @param {string | number} millisecond 
 */
export const milisecondToTime = function(millisecond: string | number): string {
    const timeString = millisecond.toString();
    let minuteString = timeString.slice(0, timeString.length - 3);
    
    if (minuteString.length <= 2) {
        return `00:${addZeroOnNumber(minuteString)}`;
    }
    if (minuteString.length % 2 !== 0)
        minuteString = `0${minuteString}`;
    return minuteString.replace(/(\d{2})$/g, ':$1');
}