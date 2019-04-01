import {POST_NOTE, POST_NOTE_SUCCESS, POST_NOTE_ERROR} from '../types.js';
import API from '../../utils/api.js';
import {BASE_URL, HEADERS} from '../../utils/constants.js';

const api = new API(BASE_URL + '/notes.json', HEADERS);

const actions = {
    [POST_NOTE]: ({commit}, payload) => {
        api.performPOST(api.url, payload, api.options)
            .then((result) => {
                console.log(result);
                commit(POST_NOTE_SUCCESS, payload);
            }).catch((error) => {
                console.log(error);
                commit(POST_NOTE_ERROR, error);
            });
    }
};

export default actions;