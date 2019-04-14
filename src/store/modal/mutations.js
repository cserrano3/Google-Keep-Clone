import { OPEN_MODAL_SUCCESS, OPEN_MODAL_ERROR, CLOSE_MODAL } from '../types.js';
import { DEEP_CLONE } from '../../utils/constants.js';

const mutations = {
    [OPEN_MODAL_SUCCESS]: (state, payload) => {
        const clonedPayload = DEEP_CLONE(payload);
        state.isOpen = clonedPayload.isOpen;
        state.note = {...clonedPayload.note};
    },
    [OPEN_MODAL_ERROR]: (state, payload) => {
        const clonedPayload = DEEP_CLONE(payload);
        state.isOpen = clonedPayload.isOpen;
        state.error = {...clonedPayload.error};
    },
    [CLOSE_MODAL]: (state, payload) => {
        state.isOpen = payload.isOpen
    }
};

export default mutations;

