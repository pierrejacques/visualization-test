<template lang="html">
  <div class="question-group">
    <div class="graph-wrap">
      <img class="graph" :src = "src">
    </div>
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
      this.$store.commit('toc')
      this.result.push({
        id: this.subquestion.src,
        isCorrect: ans === this.subquestion.a,
        time: this.$store.state.dt
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
.graph-wrap {
  max-height: 550px;
  overflow: hidden;
}
.graph {
  position: relative;
  top: -250px;
  width: 1100px;
  margin: auto;
}
</style>
