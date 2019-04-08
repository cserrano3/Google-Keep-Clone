<template>
    <div>
        <app-box :class="componentStyle">
            <template v-slot:content>
                <app-input v-if="isEditing" v-model="title"></app-input>
                <app-textarea v-model="value" @blur="isEditing = false" :placeholder="'Enter some text'"></app-textarea>
                <div class="generic-card--button-wrapper">
                    <app-button :label="'Close'" :onClick="close" v-if="isEditing"></app-button>
                </div>
            </template>
        </app-box>
    </div>

</template>
<script>
import Box from '../../core/Box/Box.vue';
import TextArea from '../../core/Textarea/Textarea.vue';
import Input from '../../core/Input/Input.vue';
import Buzzer from '../../../utils/eventBus.js';
import Button from '../../core/Button/Button.vue';

export default {
    abstract: false,
    components: {
        'app-box': Box,
        'app-textarea': TextArea,
        'app-input': Input,
        'app-button': Button
    },
    props: {
        postNote: {
            type: Function,
            required: true
        },
        content: {
            type: Object
        },
    },
    methods: {
        close() {
            this.isEditing = false;
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
            return (!this.isEditing && this.value !== '' && this.title !== '');
        },
    }
}
</script>
<style>
    .generic-card--button-wrapper {
        margin: 5px;
        display: flex;
        justify-content: flex-end;
    }
</style>
