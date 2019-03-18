<template>

  <div id="app">
    <app-header></app-header>
    <div class="main">
      <app-box></app-box>      
    </div>

  </div>
</template>

<script>
import Header from './components/core/Header/Header.vue';
import Box from './components/core/Box/Box.vue';

export default {

  name: 'app',
  components: {
    'app-header': Header,
    'app-box': Box
  }
}
</script>

<style>

</style>
