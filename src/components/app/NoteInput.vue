<template>
    <div class="note-input" id="note-input">
        <app-box class="note-input--app-box">
            <template v-slot:content>
                <app-input v-if="isEditing" v-model="title" id="input-title" class="note-input--title"></app-input>
                <app-textarea v-model="value" class="note-input--area" @blur="isEditing = false" :placeholder="'Enter some text'"></app-textarea>
            </template>
        </app-box>
    </div>

</template>
<script>
import Box from '../core/Box/Box.vue';
import TextArea from '../core/Textarea/Textarea.vue';
import Input from '../core/Input/Input.vue';
import Buzzer from '../../utils/eventBus.js';

export default {
    components: {
        'app-box': Box,
        'app-textarea': TextArea,
        'app-input': Input
    },
    mounted() {
        Buzzer.$on('reset-input', (value) => {
            this.isEditing = value;
            if(this.hasContent) {
                this.postNote({title: this.title, noteText: this.value});
                this.title = '';
                this.value = '';
            }
        });
    },
    props: {
        postNote: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            value: '',
            title: '',
            isEditing: false
        }
    },
    computed: {
        hasContent() {
            return !this.isEditing && this.value && this.title;
        }
    }
}
</script>
<style>
    .app-box {
        width: 100vw;
    }
</style>
