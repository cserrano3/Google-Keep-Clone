import { OPEN_MODAL, OPEN_MODAL_SUCCESS, OPEN_MODAL_ERROR } from '../types.js';
import API from '../../utils/api.js';
import {BASE_URL, HEADERS, DEEP_CLONE} from '../../utils/constants.js';

const api = new API(`${BASE_URL}/notes`, HEADERS);

const actions = {
    [OPEN_MODAL]: ({commit}, payload) => {
        api.performGET(`${api.url}/${payload.id}.json`, HEADERS)
            .then(({data}) => {
                const note = DEEP_CLONE(data);
                const modalPayload = {
                    note,
                    isOpen: true
                };
                commit(OPEN_MODAL_SUCCESS, modalPayload);
            }).catch((error) => {
                const err = DEEP_CLONE(error);
                const errorPayload = {
                    error: err,
                    isOpened: false
                };
                commit(OPEN_MODAL_ERROR, errorPayload);
                console.error(error);
            });
    }
}

export default actions;
