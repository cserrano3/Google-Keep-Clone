<template functional>
    <div :class="props.styleComponent.component">
        <div :class="props.styleComponent.container">
            <slot name="content">
            </slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app-box',
    props: {
        styleComponent: {
            type: Object
        }
    }
}
</script>

<style>

</style>
