<template>
    <div class="modal-textarea">
        <textarea
        class="modal-textarea--input"
        ref="modalTextarea"
        @keyup="increaseSize()"
        :placeholder="'Note'"
        :value="value"
        :style="customStyle">
        </textarea>
    </div>
</template>
<script>
import Textarea from '../../core/Textarea/Textarea.vue';
export default {
    extends: Textarea,
    data() {
        return {
            customStyle: 0
        }
    },
    mounted() {
        this.increaseOnLoad();
    },
    methods: {
        increaseOnLoad() {
            this.customStyle = (this.$refs.modalTextarea.scrollHeight) + 'px';
            this.$refs.modalTextarea.style.height += this.customStyle;
        },
        increaseSize() {
            this.$refs.modalTextarea.style.height = "1px";
            this.$refs.modalTextarea.style.height = (this.$refs.modalTextarea.scrollHeight)+"px";
        },
    }
}
</script>
