<template lang="html">
  <div class="result">
    <h1>感谢您的参与！</h1>
    <table class="result-table" cellspacing = 0>
      <thead>
        <th>图片编号</th>
        <th>用时</th>
        <th>是否准确</th>
      </thead>
      <tbody>
        <tr v-for="item in result">
          <td>{{item.id}}</td>
          <td>{{item.time}}</td>
          <td>
            <span v-if="item.isCorrect">2</span>
            <span v-else>0</span>
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
      this.result.sort((a, b) => (Number(a.id) > Number(b.id) ? 1 : -1))
    }
  }
}
</script>

<style lang="less" scoped>
h1 {
  margin: 50px 0 10px;
}
.result-table {
  border-collapse: collapse;
  width: 400px;
  margin: auto;
  td, th {
    border: 1px solid #154;
    line-height: 30px;
    &:nth-of-type(1) { width: 20%; }
    &:nth-of-type(2) { width: 40%; }
    &:nth-of-type(3) { width: 40%; }
  }
}
button {
  margin-top: 10px;
}
.false {
  background: #f77;
}

</style>
