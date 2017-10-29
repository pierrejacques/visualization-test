<template>
  <div class="welcome">
    <h1>欢迎参加测试！</h1>
    <p class="instructions" v-html="instructions"></p>
    <div class="demo-imgs">
      <img class="demo-img" :src="src" v-for="src in srcs">
    </div>
    <button @click="go" class="btn-go">
      继续
    </button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Welcome',
  data() {
    return {
      instructions: '',
      srcs: []
    }
  },
  created() {
    this.$store.commit('refresh')
    axios.get('./static/description.json')
    .then(
      data => {
        this.instructions = data.data.instructions
        this.srcs = []
        data.data.imgs.forEach(item => {
          this.srcs.push(`./static/${item}.svg`)
        })
      }
    )
  },
  methods: {
    go() {
      this.$router.push({ name: 'Survey' })
    }
  }
}
</script>

<style scoped>
.welcome {
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  height: 80%;
}
.instructions {
  flex-grow: 1;
}
.demo-imgs {
  display: flex;
  width: 70%;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 60px;
}
.demo-img {
  width: 30%;
}
.btn-go {
  height: 60px;
  width: 400px;
  margin: auto;
}
</style>
