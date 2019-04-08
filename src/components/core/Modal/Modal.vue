<template>
    <div class="modal--backdrop" v-if="isOpen">
        <div class="modal--edit-note">

        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object
        },
        isOpen: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style>

</style>
