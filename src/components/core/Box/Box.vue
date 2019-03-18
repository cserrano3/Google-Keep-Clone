<template>
    <div class="box">
        <div class="box--container content">
            <textarea  ref="textArea" @keyup="increaseSize()" class="box--input" :placeholder="defaultText"></textarea>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            defaultText: 'Write note...'
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
