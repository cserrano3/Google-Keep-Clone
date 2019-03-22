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
        if(event.target.classList.contains('textarea') ||
          event.target.classList.contains('textarea--input') || //TODO: For the love of god, improve this selection, it's O(2n) chances of error
          event.target.classList.contains('input--field') ||
          event.target.classList.contains('box--container')) {
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
