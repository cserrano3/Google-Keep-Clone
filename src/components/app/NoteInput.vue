<template>
    <div class="note-input">
        <app-box class="app-box">
            <template v-slot:content>
                <app-input v-if="isEditing"></app-input>
                <app-textarea v-model="value" @focus="isEditing = true" @blur="isEditing = false" :placeholder="'Enter some text'"></app-textarea>
            </template>
        </app-box>
    </div>

</template>
<script>
import Box from '../core/Box/Box.vue';
import TextArea from '../core/Textarea/Textarea.vue';
import Input from '../core/Input/Input.vue';
export default {
    components: {
        'app-box': Box,
        'app-textarea': TextArea,
        'app-input': Input
    },
    data() {
        return {
            value: '',
            isEditing: false
        }
    }
}
</script>
<style>
    .app-box {
        width: 100vw;
    }
</style>
