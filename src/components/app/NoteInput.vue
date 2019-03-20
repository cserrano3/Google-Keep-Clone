<template>
    <div class="note-input">
        <app-box class="app-box">
            <template v-slot:content>
                <app-textarea v-model="value" :placeholder="'Enter some text'"></app-textarea>
            </template>
        </app-box>
    </div>

</template>
<script>
import Box from '../core/Box/Box.vue';
import TextArea from '../core/Textarea/Textarea.vue';
export default {
    components: {
        'app-box': Box,
        'app-textarea': TextArea
    },
    data() {
        return {
            value: ''
        }
    }
}
</script>
<style>
    .app-box {
        width: 100vw;
    }
</style>
