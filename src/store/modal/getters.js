import { IS_OPEN, NOTE_MODAL, ERROR_MODAL } from '../types.js';

const getters = {
    [IS_OPEN]: (state) => {
        return state.isOpen;
    },
    [NOTE_MODAL]: (state) => {
        return state.note
    },
    [ERROR_MODAL]: (state) => {
        return state.error;
    }
};

export default getters;
