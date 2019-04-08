import { IS_OPEN } from '../types.js';

const getters = {
    [IS_OPEN]: (state) => {
        return state.isOpen;
    }
};

export default getters;
