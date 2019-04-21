import {POST_NOTE, POST_NOTE_SUCCESS, POST_NOTE_ERROR, GET_NOTE, GET_NOTE_SUCCESS, GET_NOTE_ERROR} from '../types.js';
import API from '../../utils/api.js';
import {BASE_URL, HEADERS, DEEP_CLONE} from '../../utils/constants.js';

const api = new API(BASE_URL, HEADERS);

const actions = {
    [POST_NOTE]: ({commit}, payload) => {
        api.performPOST(`${api.url}/notes.json`, payload, api.options)
            .then(() => {
                commit(POST_NOTE_SUCCESS, payload);
            }).catch((error) => {
                console.log(error);
                commit(POST_NOTE_ERROR, error);
            });
    },
    [GET_NOTE]: ({commit}, payload) => {
        return new Promise((resolve, reject) => {
            api.performGET(`${api.url}/notes/${payload.id}.json`, HEADERS)
                .then(res => {
                    const note = DEEP_CLONE(res);
                    commit(GET_NOTE_SUCCESS, note);
                    resolve(note);
                }).catch((error) => {
                    const err = DEEP_CLONE(error);
                    console.error(error);
                    commit(GET_NOTE_ERROR, err);
                    reject(err);
                });
        });
    }
};

export default actions;