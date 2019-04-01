import {NOTES} from '../types.js';

const getters = {
    [NOTES]: (state) => {
        return state.notes;
    },
};

export default getters;