<template lang="html">
  <div class="survey">
    <progress-bar :progress="progress" :total="total"></progress-bar>
    <div v-if="isBlock" class="block">
      <h1>图表{{Math.ceil(progress / 3)}}</h1>
      <button class="btn-block" @click="next">开始</button>
    </div>
    <question-group v-if="!isBlock" :question="question" @next="next">
    </question-group>
  </div>
</template>

<script>
import axios from 'axios'
import progressBar from './components/progress-bar.vue'
import questionGroup from './components/question-group.vue'
export default {
  name: 'survey',
  components: {
    progressBar,
    questionGroup
  },
  data() {
    return {
      data: [],
      progress: 1,
      total: '',
      isBlock: true,
      question: '',
      result: []
    }
  },
  created() {
    axios.get('./static/questions.json')
    .then(
      data => {
        this.data = data.data
        this.data.sort(() => 0.5 - Math.random())
        this.total = this.data.length * 3
      }
    )
  },
  methods: {
    next(result) {
      if (this.isBlock) {
        this.$store.commit('tic')
        this.isBlock = false
        this.question = this.data.shift()
      } else {
        this.result = [...this.result, ...result]
        this.progress += 3
        if (this.data.length > 0) {
          this.isBlock = true
        } else {
          this.$router.push({
            name: 'Result',
            params: {
              result: this.result
            }
          })
        }
      }
    }
  }
}
</script>

<style lang="css">
.block {
  margin-top: 300px;
}
.btn-block {
  margin-top: 30px;
  width: 100px;
  height: 50px;
}
</style>
