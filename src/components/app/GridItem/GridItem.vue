<template>
    <div class="grid-item">
        <app-box :class="componentStyle">
            <template v-slot:content>
                <app-input v-if="isEditing" v-model="title" id="input-title" class="note-input--title"></app-input>
                <app-textarea v-model="value" class="note-input--area" :placeholder="'Enter some text'"></app-textarea>
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
    data() {
        return {
            title: this.content.note.title,
            value: this.content.note.noteText
        };
    }
}
</script>
<style>
    .grid-item {
        padding: 10px;
        margin: 10px;
    }
</style>
