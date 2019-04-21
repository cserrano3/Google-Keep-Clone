import { OPEN_MODAL, OPEN_MODAL_SUCCESS, OPEN_MODAL_ERROR, GET_NOTE } from '../types.js';
import {DEEP_CLONE} from '../../utils/constants.js';

const actions = {
    [OPEN_MODAL]: ({dispatch, commit}, payload) => {
        return dispatch(GET_NOTE, payload)
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
