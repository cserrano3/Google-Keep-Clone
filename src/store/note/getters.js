import {GET_NOTE} from '../types.js';

const getters = {
    [GET_NOTE]: (state) => {
        return state.success;
    }
}

export default getters;

