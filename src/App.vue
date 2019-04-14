<template>

  <div id="app" @click="resetInput">
    <app-header></app-header>
    <div class="main">
      <input-note-container></input-note-container>
      <grid-container></grid-container>
      <modal-container></modal-container>
    </div>
  </div>
</template>

<script>
import InputNoteContainer from './containers/InputNoteContainer.vue';
import GridContainer from './containers/GridContainer.vue';
import ModalContainer from './containers/ModalContainer.vue';

import Header from './components/core/Header/Header.vue';
import Buzzer from './utils/eventBus.js';

export default {

  name: 'app',
  components: {
    'input-note-container': InputNoteContainer,
    'grid-container': GridContainer,
    'modal-container': ModalContainer,
    'app-header': Header
  },
  methods: {
    resetInput(event) {
        if(event.target.classList.contains('note-input--area')
          || event.target.classList.contains('note-input--title')) {
          Buzzer.$emit('reset-input', true);
        } else {
          Buzzer.$emit('reset-input', false);
        }
    }
  }
}
</script>

<style>
  #app {
    min-height: 100vh;
  }
</style>
