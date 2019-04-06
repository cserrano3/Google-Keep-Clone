import {GET_NOTES_SUCCESS, GET_NOTES_ERROR} from '../types.js';

const mutations = {
    [GET_NOTES_SUCCESS]: (state, payload) => {
        console.log('how does the notes come from a payload ... ', payload);
        state.notes = [...payload];
        state.sucess = 'Fetched all notes.';
    },
    [GET_NOTES_ERROR]: (state, payload) => {
        const { error } = payload;
        state.error = {...error};
    }
}

export default mutations;
