import { OPEN_MODAL_SUCCESS } from '../types.js';
import { DEEP_CLONE } from '../../utils/constants.js';

const mutations = {
    [OPEN_MODAL_SUCCESS]: (state, payload) => {
        const clonedPayload = DEEP_CLONE(payload);
        state.isOpen = clonedPayload.isOpen;
        state.note = {...clonedPayload.note};
    }
};

export default mutations;

