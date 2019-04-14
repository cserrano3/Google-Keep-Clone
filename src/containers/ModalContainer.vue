<template>
    <app-note-modal :closeModal="closeModal" :isOpen="isOpen" :item="note"></app-note-modal>
</template>
<script>
import NoteModal from '../components/app/NoteModal/NoteModal.vue';
import {mapState, mapMutations} from 'vuex';
import {IS_OPEN, NOTE_MODAL, CLOSE_MODAL} from './../store/types.js';
export default {
    name: 'modal-container',
    components: {
        'app-note-modal': NoteModal
    },
    computed: {
        ...mapState({
            isOpen: state => state.modal.isOpen,
            note: state => state.modal.note
        })
    },
    methods: {
        ...mapMutations({
            closeModal: CLOSE_MODAL
        })
    }
}
</script>
