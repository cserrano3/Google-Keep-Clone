<template>
    <div>
        <app-note-input :postNote="postNote" :updateGrid="getNotes">
        </app-note-input>
        <app-grid
            :items="notes"
            :openModal="openModal"
            :postNote="postNote">
        </app-grid>
        <app-modal></app-modal>
    </div>
</template>
<script>
import NoteInput from '../components/app/NoteInput/NoteInput.vue';
import Grid from '../components/app/Grid/Grid.vue';
import Modal from '../components/core/Modal/Modal.vue';
import {POST_NOTE, GET_NOTES, NOTES, OPEN_MODAL, GET_NOTE} from './../store/types.js';
import {mapActions, mapState, mapGetters} from 'vuex';
export default {
    components: {
        'app-note-input': NoteInput,
        'app-grid': Grid,
        'app-modal': Modal
    },
    created() {
        this.getNotes();
    },
    methods: {
        ...mapActions({
            postNote: POST_NOTE,
            getNotes: GET_NOTES,
            openModal: OPEN_MODAL
        })
    },
    computed: {
        ...mapGetters({
           notes: NOTES,
           sucess: GET_NOTE
        })
    }
}
</script>
