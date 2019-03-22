import {POST_NOTE_SUCCESS, POST_NOTE_ERROR} from '../types.js';

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
    }
}

export default mutations;

