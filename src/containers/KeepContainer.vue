<template>
    <div>
        <app-note-input :postNote="postNote">
        </app-note-input>
    </div>
</template>
<script>
import NoteInput from '../components/app/NoteInput.vue';
import {POST_NOTE} from './../store/types.js';
import {mapActions} from 'vuex';
export default {
    mounted() {
        console.log('post note...... ', this.postNote);
    },
    components: {
        'app-note-input': NoteInput
    },
    methods: {
        ...mapActions({
            postNote: POST_NOTE
        })
    }
}
</script>
