<template>
  <table>
    <thead>
      <tr>
        <th>順位</th>
        <th>プレイヤー名</th>
        <th>週間投票数</th>
        <th>最高週間投票数</th>
        <th>合計</th>
      </tr>
    </thead>
    <tbody>
      <tr  v-for="(value, key) in merged" :key="key">
        <td>
          <div>
            {{ value.rank }}
          </div>
        </td>
        <td>
          <img :src="`https://crafatar.com/avatars/${value.uuid}?size=16`"/><span style="display:inline-block;line-height:16px;">{{ value.playername }}</span>
        </td>
        <td>{{ value.weekly }}</td>
        <td>{{ value.highest }}</td>
        <td>{{ value.total }}</td>
      </tr>
    </tbody>
  </table>
</template>


<script>

const getDate = async () => {
  const response = await fetch("/api")
  const data = await response.json()
  return data
} 

export default {
  data () {
    const dates = {}

    return {
      dates,
    }
  },

  computed: {
    merged () {
      return this.dates
    }
  },

  mounted () {
    let stats = null

    try {
      stats = JSON.parse(sessionStorage.getItem('leaderboard-stats'))
    } catch {
    }
    
    if (!stats) {
      this.load()
      return
    }

    const { dates } = stats

    this.dates = dates
  },

  methods: {
    async load () {
      await this.loadDate()
      this.saveStats()
    },

    async loadDate () {
      this.dates = "読み込み中"

      let date = '-'

      try {
        date = await getDate()
      } catch {
      }

      this.dates = date
    },

    saveStats () {
      const data = {
        dates: this.dates
      }

      // limits request rates, so we store the stats in sessionStorage
      sessionStorage.setItem('leaderboard-stats', JSON.stringify(data))
    }
  }
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

table td{
  text-align: center;
  width: 25%;
  padding: 5px;
  font-weight: 900;
  color: #8F8F8F;
}

table tr td:first-child {
    text-align: center;
}

table tr td:nth-child(2) {
    text-align: left;
}

table tr td:nth-child(3) {
    text-align: right;
    padding-right: 30px;
    font-weight: 900;
    font-size: 14px;
    letter-spacing: 1px;
    text-indent: 1px;
}

table tr td:nth-child(4) {
    text-align: right;
    padding-right: 30px;
    font-weight: 900;
    font-size: 14px;
    letter-spacing: 1px;
    text-indent: 1px;
}

table tr td:last-child {
    text-align: right;
    padding-left: 30px;
    font-weight: 900;
    font-size: 14px;
    letter-spacing: 1px;
    text-indent: 1px;
}

table td.span{
  display: inline-block;
  line-height: 32px;
}

table img{
  margin-right: 5px;
  min-height: 16px;
  min-width: 16px;
  max-width: 16px;
  max-height: 16px;
  border-radius: 3px;
  display: inline-block;
  vertical-align: top;
}

table tr td:first-child, table tr td:last-child {
    font-weight: 900;
    color: #8F8F8F;
}

table tbody tr:first-child td:first-child div {
    color: white;
    display: inline-block;
    position: relative;
    padding: 0.5px;
    padding-bottom: 3.5px;
    padding-right: 5px;
    padding-left: 5px;
    line-height: 14px;
    border-radius: 100%;
    background-color: #fbc233;
    text-shadow: 0 1px 0 rgb(0 0 0 / 19%);
    box-shadow: inset 0px 0px 0px 1px rgb(0 0 0 / 19%), inset 0 0 0 2px rgb(255 255 255 / 19%);
}

table tbody tr:nth-child(2) td:first-child div {
    color: white;
    display: inline-block;
    position: relative;
    padding: 0.5px;
    padding-bottom: 3px;
    padding-right: 5px;
    padding-left: 5px;
    line-height: 14px;
    border-radius: 100%;
    background-color: #e2e2e4;
    text-shadow: 0 1px 0 rgb(0 0 0 / 19%);
    box-shadow: inset 0px 0px 0px 1px rgb(0 0 0 / 19%), inset 0 0 0 2px rgb(255 255 255 / 19%);
}

table tbody tr:nth-child(3) td:first-child div {
    color: white;
    display: inline-block;
    position: relative;
    padding: 0;
    padding-bottom: 4px;
    padding-right: 5px;
    padding-left: 5px;
    line-height: 14px;
    border-radius: 100%;
    background-color: #da7e4b;
    text-shadow: 0 1px 0 rgb(0 0 0 / 19%);
    box-shadow: inset 0px 0px 0px 1px rgb(0 0 0 / 19%), inset 0 0 0 2px rgb(255 255 255 / 19%);
}

</style>
