<template>
    <div class="note-input" id="note-input">
        <app-box :class="componentStyle">
            <template v-slot:content>
                <app-input v-if="isEditing" v-model="title" id="input-title" :customClass="noteInputClass"></app-input>
                <app-textarea v-model="value" :customClass="noteTextClass" @blur="isEditing = false" :placeholder="'Enter some text'"></app-textarea>
                <div class="note-input--button-wrapper">
                    <app-button :label="'Close'" :onClick="close" v-if="isEditing"></app-button>
                </div>
            </template>
        </app-box>
    </div>
</template>
<script>
import GenericCard from '../GenericCard.vue';
import Buzzer from '../../../utils/eventBus.js';
export default {
    extends: GenericCard,
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
        content: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            title: '',
            value: '',
            isEditing: false
        };
    },
    computed: {
        noteTextClass() {
            return 'note-input--area';
        },
        noteInputClass() {
            return 'note-input--title';
        }
    }
}
</script>
<style>
    .grid-item {
        padding: 10px;
        margin: 10px;
    }
</style>
