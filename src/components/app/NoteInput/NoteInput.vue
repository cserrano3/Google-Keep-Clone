<template>
    <div class="note-input" id="note-input">
        <app-box :styleComponent="boxStyle">
            <template v-slot:content>
                <app-input v-if="isEditing" v-model="title" :customClass="noteInputClass"></app-input>
                <app-textarea v-model="value" :customClass="noteTextClass" @blur="isEditing = false" :placeholder="'Enter some text'"></app-textarea>
                <div class="note-input--button-wrapper">
                    <app-button :label="label" :onClick="close" v-if="isEditing"></app-button>
                </div>
            </template>
        </app-box>
    </div>
</template>
<script>
import GenericCard from '../GenericCard/GenericCard.vue';
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
                this.updateGrid();
            }
        });
    },
    props: {
        content: {
            type: Object,
            default: null
        },
        postNote: {
            type: Function
        },
        updateGrid: {
            type: Function
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
        },
        boxStyle() {
            return {
                component: 'box',
                container: 'box--container'
            };
        },
        label(){
            return 'Close';
        }
    }
}
</script>
<style>
</style>
