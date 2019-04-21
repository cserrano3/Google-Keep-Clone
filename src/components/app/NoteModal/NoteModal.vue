<template>
        <transition name="fade">
    <div class="modal--backdrop" v-if="isOpen">

        <div class="modal--container">
            <app-input v-if="isEditing" :customClass="modalTitleClass" :value="item.title" v-model="item.title"></app-input>
            <app-textarea ref="damn" customStyle="{height: sizeHeight}" :value="item.noteText" v-model="item.noteText"></app-textarea>
            <div class="modal--button-wrapper">
                <app-button :label="label" :onClick="closeModal" v-if="isEditing"></app-button>
            </div>
        </div>

    </div>
        </transition>
</template>
<script>
import Button from '../../core/Button/Button.vue';
import ModalTextarea from '../ModalTextarea/ModalTextarea.vue';
import Input from '../../core/Input/Input.vue';
export default {
    components: {
        'app-button': Button,
        'app-textarea': ModalTextarea,
        'app-input': Input
    },
    props: {
        item: {
            type: Object,
            required: true
        },
        isOpen: {
            type: Boolean,
            default: false
        },
        closeModal: {
            type: Function
        }
    },
    data() {
        return {
            isEditing: true,
            label: 'Close',
            sizeHeight: ''
        }
    },
    computed: {
        modalTitleClass() {
            return 'modal--title';
        }
    }
}
</script>
<style>
</style>
