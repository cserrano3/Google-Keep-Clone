<template>
    <div class="grid-item" @click="openModal(content)">
        <app-box :styleComponent="boxStyle">
            <template v-slot:content>
                <div class="grid-item--title">
                   <label>{{content.note.title}}</label>
                </div>
                <div class="grid-item--note">
                    {{content.note.noteText}}
                </div>
                <div class="note-input--button-wrapper">
                    <app-button :label="'Close'" :onClick="close" v-if="isEditing"></app-button>
                </div>
            </template>
        </app-box>
    </div>
</template>
<script>
import GenericCard from '../GenericCard/GenericCard.vue';
export default {
    extends: GenericCard,
    props: {
        content: {
            type: Object,
            default: {},
            required: true
        },
        openModal: {
            type: Function,
            required: true
        }
    },
    data() {
        return {
            title: this.content.note.title,
            value: this.content.note.noteText
        };
    },
    computed: {
        boxStyle() {
            return {
                component: 'grid-item--container',
                container: ''
            }
        }
    }
}
</script>
<style>
</style>
