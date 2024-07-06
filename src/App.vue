<template>
  <MainHeader />
  <div class="main-content">
    <Parameters
      @changeIterations="changeIterations"
      @changeRoughtness="changeRoughtness" />
    <Canvas
      class="main-content__canvas"
      :iterations="iterations"
      :roughtness="roughtness" />
    </div>
</template>
<script setup lang="ts">
  import MainHeader from './components/MainHeader.vue';
  import Parameters from './components/Parameters.vue';
  import Canvas from './components/Canvas.vue';
  import { ref } from 'vue';

  const iterations = ref(1);
  const roughtness = ref(1);

  function changeIterations(value: number) {
    iterations.value = value;
  }

  function changeRoughtness(value: number) {
    roughtness.value = value;
  }
</script>
<style scoped>
.main-content {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  .main-content__canvas {
    max-width: 50rem;
    max-height: 50rem;
  }
}
</style>
