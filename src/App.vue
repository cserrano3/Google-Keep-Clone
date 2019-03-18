<template>

  <div id="app">
    <app-header></app-header>
    <div class="main">
      <app-note-input></app-note-input>
    </div>

  </div>
</template>

<script>
import Header from './components/core/Header/Header.vue';
import NoteInput from './components/app/NoteInput.vue';

export default {

  name: 'app',
  components: {
    'app-header': Header,
    'app-note-input': NoteInput
  }
}
</script>

<style>

</style>
