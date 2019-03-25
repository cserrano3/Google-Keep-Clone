<template>
    <div>
        <app-note-input :postNote="postNote">
        </app-note-input>
        <app-grid></app-grid>
    </div>
</template>
<script>
import NoteInput from '../components/app/NoteInput.vue';
import Grid from '../components/core/Grid/Grid.vue';
import {POST_NOTE} from './../store/types.js';
import {mapActions} from 'vuex';
export default {
    mounted() {
        console.log('post note...... ', this.postNote);
    },
    components: {
        'app-note-input': NoteInput,
        'app-grid': Grid
    },
    methods: {
        ...mapActions({
            postNote: POST_NOTE
        })
    }
}
</script>
