<template lang="html">
  <div class="result">
    <h1>感谢您的参与！</h1>
    <table class="result-table" cellspacing = 0>
      <thead>
        <th>图片编号</th>
        <th>一</th>
        <th>二</th>
        <th>三</th>
      </thead>
      <tbody>
        <tr v-for="item in result">
          <td>{{item.id}}</td>
          <td v-for="ans in item.result"
              :class="{ false: !ans.isCorrect }">
            {{ans.time}}
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="$router.push({ name: 'Welcome' })">再次测试</button>
  </div>
</template>

<script>
export default {
  name: 'Result',
  data() {
    return {
      result: '',
    }
  },
  created() {
    this.result = this.$route.params.result
    if (this.result) {
      this.result.sort((a, b) => a.id > b.id)
    }
  }
}
</script>

<style lang="less" scoped>
h1 {
  margin: 50px 0 100px;
}
.result-table {
  border-collapse: collapse;
  width: 40%;
  margin: auto;
  td, th {
    border: 1px solid #154;
    line-height: 30px;
    &:nth-of-type(1) { width: 20%; }
    &:nth-of-type(2) { width: 27%; }
    &:nth-of-type(3) { width: 27%; }
  }
}
button {
  margin-top: 100px;
}
.false {
  background: #f77;
}

</style>
