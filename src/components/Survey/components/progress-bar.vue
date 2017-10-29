<template lang="html">
  <div class="progress-bar">
    <div class="bar"
         :class="{ active: bar < progress }"
         v-for="bar in bars"></div>
  </div>
</template>

<script>
export default {
  name: 'progressBar',
  props: [
    'total'
  ],
  computed: {
    bars() {
      const arr = []
      for (let i = 0; i < this.total; i++) {
        arr.push(i)
      }
      return arr
    },
    progress() {
      return this.$store.state.progress
    }
  }
}
</script>

<style lang="css">
.progress-bar {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 5px;
}
.bar {
  flex-grow: 1;
}
.bar.active {
  background: #456;
}
</style>
