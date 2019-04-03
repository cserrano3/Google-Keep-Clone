<template>
    <div>
        <app-note-input :postNote="postNote">
        </app-note-input>
        <app-grid :items="notes"></app-grid>
    </div>
</template>
<script>
import NoteInput from '../components/app/NoteInput.vue';
import Grid from '../components/app/Grid/Grid.vue';
import {POST_NOTE, GET_NOTES, NOTES} from './../store/types.js';
import {mapActions, mapState} from 'vuex';
export default {
    components: {
        'app-note-input': NoteInput,
        'app-grid': Grid
    },
    mounted() {
        this.getNotes();

    },
    methods: {
        ...mapActions({
            postNote: POST_NOTE,
            getNotes: GET_NOTES
        })
    },
    computed: {
        ...mapState({
            notes: state => state.notes
        })
    }
}
</script>
