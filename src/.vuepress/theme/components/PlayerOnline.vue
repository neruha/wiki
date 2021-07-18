<template>
  <div class="counter">
    <div class="num">
      <div>
        <span>{{ count }}</span>
        <br>
        <p>人</p>
      </div>
    </div>
    <p>プレイ中!</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PlayerOnline',

  data () {
    return {
      count: 0
    }
  },
  mounted() {
    axios
      .get('https://api.mcsrvstat.us/2/hatosaba.f5.si')
      .then(response => (this.count = response.data.players.online))
  }
}
</script>

<style lang="scss" scoped>
@import "@theme/styles/_settings.scss";

.counter {
    z-index: 2;
    text-align: right;
    position: fixed;
    top: 80px;
    right: 15px;
    text-align: center;
}

.counter .num {
    color: #fff;
    width: 100px;
    height: 100px;
    background-color: $green;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transform: rotate(15deg);
    font-weight: 700;
    margin: 0 0 0 auto;
}

.counter .num p {
    font-size: 20px;
    margin: -10px 0 0;
    text-align: right;
    transform: translateX(-5px);
}

.counter .num span {
    display: inline-block;
    font-size: 40px;
}

</style>