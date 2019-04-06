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
                <app-grid-item :content="item" :postNote="postNote"></app-grid-item>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import {VueMasonryPlugin} from 'vue-masonry';
import GridItem from '../GridItem/GridItem.vue';
Vue.use(VueMasonryPlugin);
export default {
    name: 'app-grid',
    components: {
        'app-grid-item': GridItem
    },
    props: {
        items: {
            type: Array,

        },
        postNote: {
            type: Function
        }
    },
    mounted() {
                console.log('notes ......... ', this.items);
    }
}
</script>
<style>
    .app-box {
        height: 200px;
    }
</style>
