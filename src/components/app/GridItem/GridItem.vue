<template>
    <div class="grid-item">
        <app-box :styleComponent="boxStyle">
            <template v-slot:content>
               
                {{content}}
                <div class="note-input--button-wrapper">
                    <app-button :label="'Close'" :onClick="close" v-if="isEditing"></app-button>
                </div>
            </template>
        </app-box>
    </div>
</template>
<script>
import GenericCard from '../GenericCard.vue';
export default {
    extends: GenericCard,
    props: {
        content: {
            type: Object
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
