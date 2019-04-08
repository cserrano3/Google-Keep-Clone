import { OPEN_MODAL, OPEN_MODAL_SUCCESS, OPEN_MODAL_ERROR } from '../types.js';
import API from '../../utils/api.js';
import {BASE_URL, HEADERS, DEEP_CLONE} from '../../utils/constants.js';

const api = new API(`${BASE_URL}/notes`, HEADERS);

const actions = {
    [OPEN_MODAL]: ({commit}, payload) => {
        api.performGET(`${api.url}/${payload.id}.json`, HEADERS)
            .then(({data}) => {
                let note = DEEP_CLONE(data);
                commit(OPEN_MODAL_SUCCESS, note);
            }).catch((error) => {
                commit(OPEN_MODAL_ERROR, error);
                console.error(error);
            });
    }
}

export default actions;
