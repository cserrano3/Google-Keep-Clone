import Vue from  'vue';
import Vuex from 'vuex';
import note from './note/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        namespaced: true,
        note
    }
});
