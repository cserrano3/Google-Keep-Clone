import {GET_NOTE} from '../types.js';

const getters = {
    [GET_NOTE]: (state) => {
        return state.note;
    }
}

export default getters;

