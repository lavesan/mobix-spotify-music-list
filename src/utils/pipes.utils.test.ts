import { addZeroOnNumber, milisecondToTime } from './pipes.utils';

describe('Testing function addZeroOnNumber', () => {

    test("Adds 0 on top of a 1 digit number ", () => {
        const number = 2;
        const parserNumber = addZeroOnNumber(number);
    
        expect(parserNumber).toBe('02');
    })
    
    test("Don't add 0 on top of number with more than 1 digit ", () => {
        const number = 23;
        const parserNumber = addZeroOnNumber(number);
    
        expect(parserNumber).toBe('23');
    })
    
    test("Returns 00 when there's no parameter ", () => {
        const parserNumber = addZeroOnNumber();
    
        expect(parserNumber).toBe('00');
    })

})

describe('Testing function milisecondToTime', () => {

    test('`milisecondToTime` Transforms a milissecond number in the mm:ss format ', () => {
        const millisecond = 4321454;
        const timeFormated = milisecondToTime(millisecond);
    
        expect(timeFormated).toBe('43:21');
    })

})
