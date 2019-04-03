export const BASE_URL = 'https://vuedatabase-14f93.firebaseio.com';

export const HEADERS = Object.freeze({
    headers: {
        'Content-Type': null,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PATCH'
    }
});

export const DEEP_CLONE = (obj) => JSON.parse(JSON.stringify(obj));