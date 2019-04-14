<template>
<div class="textarea">
    <textarea
        ref="textArea"
        @keyup="increaseSize()"
        :value="value"
        :style="customStyle"
        class="textarea--input"
        :class="customClass"
        @input="updateValue"
        :placeholder="placeholder">
    </textarea>
</div>
</template>
<script>
export default {
    props: {
        placeholder: {
            type: String
        },
        value: {
            type: String,
        },
        customClass: {
            type:String
        },
    },
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
            this.customStyle = (this.$refs.textArea.scrollHeight) + 'px';
            this.$refs.textArea.style.height += this.customStyle;
        },
        increaseSize() {
            this.$refs.textArea.style.height = "1px";
            this.$refs.textArea.style.height = (this.$refs.textArea.scrollHeight)+"px";
        },
        updateValue(event) {
            this.$emit('input', event.target.value);
        }
    }
}
</script>
<style>

</style>
