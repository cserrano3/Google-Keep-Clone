<template>

  <div id="app" @click="resetInput">
    <app-header></app-header>
    <div class="main">
      <keep-container></keep-container>
    </div>

  </div>
</template>

<script>
import KeepContainer from './containers/KeepContainer.vue';
import Header from './components/core/Header/Header.vue';
import Buzzer from './utils/eventBus.js';

export default {

  name: 'app',
  components: {
    'keep-container': KeepContainer,
    'app-header': Header
  },
  methods: {
    resetInput(event) {
      console.log('event ............ ', event.target);
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
