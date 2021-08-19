<template>
  
  <div class="swipers">
    <div class="blocks">
      <swiper class="swiper" :options="swiperOptions">
        <div class="swiper-slide" :key="banner" v-for="banner in banners">
          <img :src="banner">
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
  export default {
    name: 'carrousel',
    data() {
      return {
        banners: [ 'https://cdn.discordapp.com/attachments/856795177338273822/876774663366271056/unknown.png', 'https://cdn.discordapp.com/attachments/743053130136158270/828439217994203197/2021-02-27_18.png', 'https://cdn.discordapp.com/attachments/743053130136158270/818089948300836894/2021-03-07_20.55.22.png' ],
        swiperOptions: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
@import "@theme/styles/_settings.scss";

.swipers {
  text-align: center;
  padding: 20px 0px;
  .blocks {
    display: flex;
    place-content: center;
    place-items: flex-start;
    img {
      width: 100%;
      height: 1000px;
    }
  }
}

.swiper {
  height: 300px;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
  }
}

</style>