<template lang="html">
  <div class="question-group">
    <img class="graph" :src = "src">
    <p class="question">{{subquestion.q}}</p>
    <button v-for="(item, idx) in subquestion.options"
            @click="next(idx + 1)"
            class="option"
            >
    {{item}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'questionGroup',
  props: [
    'question'
  ],
  data() {
    return {
      subquestion: '',
      result: []
    }
  },
  computed: {
    src() {
      return `./static/${this.subquestion.src}.svg`
    }
  },
  created() {
    this.subquestion = this.question.questions.shift()
  },
  methods: {
    next(ans) {
      const lastTime = this.$store.state.time
      this.$store.commit('progress')
      this.result.push({
        isCorrect: ans === this.subquestion.a,
        time: this.$store.state.time - lastTime
      })
      if (this.question.questions.length > 0) {
        this.subquestion = this.question.questions.shift()
      } else {
        this.$emit('next', this.result)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.graph {
  width: 60%;
  margin: auto;
}
</style>
