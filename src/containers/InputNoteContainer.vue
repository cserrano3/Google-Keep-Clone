<template>
    <div>
        <app-note-input :postNote="postNote" :updateGrid="getNotes">
        </app-note-input>
    </div>
</template>
<script>
import NoteInput from '../components/app/NoteInput/NoteInput.vue';
import {POST_NOTE, GET_NOTES} from './../store/types.js';
import {mapActions} from 'vuex';
export default {
    components: {
        'app-note-input': NoteInput,
    },
    mounted() {
        this.getNotes();
    },
    methods: {
        ...mapActions({
            postNote: POST_NOTE,
            getNotes: GET_NOTES
        })
    }
}
</script>
