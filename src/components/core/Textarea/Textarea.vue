<template>
<div class="textarea">
    <textarea  ref="textArea" @keyup="increaseSize()" class="textarea--input" :placeholder="placeholder"></textarea>
</div>
</template>
<script>
export default {
    props: {
        placeholder: {
            type: String
        }
    },
    methods: {
        increaseSize() {
            this.$refs.textArea.style.height = "1px";
            this.$refs.textArea.style.height = (this.$refs.textArea.scrollHeight)+"px";
        }
    }
}
</script>
<style>

</style>
