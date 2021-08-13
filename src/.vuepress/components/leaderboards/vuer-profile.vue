<template>
  <tr>
    <td>
      <div>
        {{ profile.rank }}
      </div>
    </td>
    <td>
      <img :src="`https://crafatar.com/avatars/${profile.uuid}?size=16`"/><span style="display:inline-block;line-height:16px;">{{ profile.playername }}</span>
    </td>
    <td>{{ profile.total }}</td>
  </tr>
</template>

<script>
import axios from "axios"

export default {

  data () {
    return {
      info: null
    }
  },

  props: {
    profile: Object
  }
}
</script>

<style lang="scss" scoped>


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

table tr td:last-child {
    text-align: right;
    padding-right: 30px;
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
