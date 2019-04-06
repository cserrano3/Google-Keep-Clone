import {GET_NOTES, GET_NOTES_SUCCESS, GET_NOTES_ERROR} from '../types.js';
import API from '../../utils/api.js';
import {BASE_URL, HEADERS, DEEP_CLONE} from '../../utils/constants.js';
import { snapshotToArray } from '../../utils/firebase.js';

const api = new API(BASE_URL + '/notes.json', HEADERS);

const actions = {
    [GET_NOTES]: ({commit}, payload) => {
        api.performGET(api.url, api.options)
            .then(({data}) => {
                console.log('data ........ ', data);
                let notes = DEEP_CLONE(snapshotToArray(data));
                console.log('final notes. ......... ', notes);
                commit(GET_NOTES_SUCCESS, notes);
            }).catch((error) => {
                console.error(error);
                commit(GET_NOTES_ERROR, error);
            });
    }
};

export default actions;
