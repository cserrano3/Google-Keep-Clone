<template>
    <app-grid :items="notes" :openModal="openModal"></app-grid>
</template>
<script>
import Grid from '../components/app/Grid/Grid.vue';
import { GET_NOTES, NOTES, OPEN_MODAL } from './../store/types.js';
import  { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        'app-grid': Grid,
    },
    created() {
        this.getNotes();
    },
    methods: {
        ...mapActions({
            getNotes: GET_NOTES,
            openModal: OPEN_MODAL
        })
    },
    computed: {
        ...mapGetters({
            notes: NOTES
        })
    }
}
</script>
<style>

</style>
