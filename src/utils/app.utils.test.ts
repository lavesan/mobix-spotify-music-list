import { queryStringToObject } from './app.utils';

test('`queryStringToObject` Tests if the function is getting all query strings with the right values ', () => {
    const url = 'https://www.google.com/search?q=getting+started+jest+front-end+tests&oq=getting+started+jest+front-end+tests&aqs=chrome..69i57.11946j1j4&sourceid=chrome&ie=UTF-8';
    const queryStringObject = queryStringToObject(url);

    expect(queryStringObject).toHaveProperty('q');
    expect(queryStringObject).toHaveProperty('oq');
    expect(queryStringObject).toHaveProperty('aqs');
    expect(queryStringObject).toHaveProperty('sourceid');
    expect(queryStringObject).toHaveProperty('ie');
    expect(queryStringObject).toEqual({
        q: 'getting+started+jest+front-end+tests',
        oq: 'getting+started+jest+front-end+tests',
        aqs: 'chrome..69i57.11946j1j4',
        sourceid: 'chrome',
        ie: 'UTF-8',
    })
})