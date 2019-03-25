<template functional>
    <button class="button" @click="props.onClick">
        {{props.label}}
    </button>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        label: {
            type: String,
            required: true
        },
        onClick: {
            type: Function,
            required: true
        }
    }
})
</script>
<style>

</style>
