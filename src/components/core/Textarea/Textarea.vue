<template>
<div class="textarea">
    <textarea
        ref="textArea"
        @keyup="increaseSize()"
        :value="value"
        class="textarea--input"
        :class="customClass"
        @input="updateValue"
        :placeholder="placeholder">
    </textarea>
</div>
</template>
<script>
export default {
    abstract: false,
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
    methods: {
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
