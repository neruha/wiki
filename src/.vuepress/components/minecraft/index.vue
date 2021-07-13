<template>
  <main>
    <TextureItem v-for="texture in textures" :key="texture.name" :texture="texture"/>
  </main>
</template>

<script>
import textures from './textures'
export default {
  components: {
    TextureItem: () => import('./texture-item')
  },
  data: () => ({
    textures
  })
}
</script>