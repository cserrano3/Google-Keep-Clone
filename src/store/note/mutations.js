import {POST_NOTE_SUCCESS, POST_NOTE_ERROR, GET_NOTE_SUCCESS, GET_NOTE_ERROR} from '../types.js';
import { DEEP_CLONE } from '../../utils/constants.js';

const mutations = {
    [POST_NOTE_SUCCESS]: (state, payload) => {
        const { title, noteText } = payload;
        state.note.title = title;
        state.note.noteText = noteText,
        state.success = 'Note saved!'
    },
    [POST_NOTE_ERROR]: (state, payload) => {
        const { error } = payload;
        state.error = {...error};
    },
    [GET_NOTE_SUCCESS]: (state, payload) => {
        const clonedPayload = DEEP_CLONE(payload);
        state.note = {...clonedPayload.note};
    },
    [GET_NOTE_ERROR]: (state, payload) => {
        const clonedPayload = DEEP_CLONE(payload);
        state.error = { ...clonedPayload.error };
    }
}

export default mutations;

