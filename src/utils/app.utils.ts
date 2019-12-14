import { toast } from 'react-toastify';

/**
 * @description 
 * Transforms all keys and values of a string with queryStrings
 * in an object with the keys and values of the queryString
 * 
 * @param {string} stringWithQueryString 
 * @returns {{ [key: string]: string }} Object containing the query string
 */
export const queryStringToObject = function(stringWithQueryString: string = ''): { [key: string]: string } | null {
    const queries = stringWithQueryString.match(/\w+=[^&]+/g);
    if (queries) {
        const obj: { [key: string]: string } = {};
        queries.forEach(queryString => {
            const [key, value] = queryString.split('=');
            obj[key] = value;
        })
        return obj;
    }
    return null;
}

export const toastNotify = function({ type, message }: { type: 'error', message: string }) {
    toast[type](message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
}
