<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>

      <blockquote>
        <p>おっと！？このページは存在しません。</p>
      </blockquote>

      <p v-show="isTranslation">
        ドキュメントには常に新しいページが追加されています。このページはまだすべての翻訳に含まれていないかもしれません。
      </p>

      <RouterLink to="/">
        ホームにもどる
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { repos } from '../../components/guide/contributing/translations-data.js'

export default {
  data () {
    return {
      isTranslation: false
    }
  },

  mounted () {
    const toOrigin = url => (String(url).match(/https?:\/\/[^/]+/) || [])[0]
    const referrer = toOrigin(document.referrer)

    // Did we get here from a translation?
    if (referrer && referrer !== location.origin && repos.some(({ url }) => toOrigin(url) === referrer)) {
      this.isTranslation = true
    }
  }
}
</script>
