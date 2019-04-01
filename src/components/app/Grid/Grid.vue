<template>
    <div class="grid">
        <div
            class="grid--container"
            v-masonry
            transition-duration="0.3s"
            item-selector=".grid--item"
            horizontal-order="true"
            fit-width="true">
            <div v-for="item in items" :key="item.title" class=".grid--item">
                {{item}}
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import {VueMasonryPlugin} from 'vue-masonry';

Vue.use(VueMasonryPlugin);
export default {
    name: 'app-grid',
    props: {
        items: {
            type: Array,

        }
    },
    mounted() {
        console.log('items......... ', this.items);
    }
}
</script>
<style>
    .app-box {
        height: 200px;
    }
</style>
