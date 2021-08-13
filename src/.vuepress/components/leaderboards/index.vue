<template>
  <table>
    <thead>
      <tr>
        <th>順位</th>
        <th>プレイヤー名</th>
        <th>合計投票数</th>
      </tr>
    </thead>
    <tbody>
      <VuerProfile v-for="profile in info" :key="profile.name" :profile="profile"/>
    </tbody>
  </table>
</template>


<script>
import axios from "axios"

export default {
  components: {
    VuerProfile: () => import('./vuer-profile')
  },

  data () {
    return {
      info: null
    }
  },

  mounted () {
      axios
      .get(`/api`)
      .then(response => (this.info = response.data))  
  },
}
</script>

<style lang="scss" scoped>
table{
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

table tr{
  border-bottom: solid 1px #eee;
  cursor: pointer;
}

table th {
  
    padding: 7px;
    color: #9A9A9A;
    background-color: #E8E8E8;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 1.5px;
    text-indent: 1.5px;
    line-height: 10px;
}

table tr td:first-child, table tr td:last-child {
    font-weight: 900;
    color: #8F8F8F;
}

</style>
