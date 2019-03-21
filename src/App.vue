<template>

  <div id="app" @click="resetInput">
    <app-header></app-header>
    <div class="main">
      <app-note-input></app-note-input>
    </div>

  </div>
</template>

<script>
import Header from './components/core/Header/Header.vue';
import NoteInput from './components/app/NoteInput.vue';
import Buzzer from './utils/eventBus.js';

export default {

  name: 'app',
  components: {
    'app-header': Header,
    'app-note-input': NoteInput 
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
