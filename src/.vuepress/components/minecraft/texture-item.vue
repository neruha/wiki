<template>
  <div class="texture">
    <div class="logo">
      <a :href="texture.urlLink">
        <img :alt="`${texture.name}'s logo`" :src="logo" width="125" height="auto">
      </a>
    </div>
    <div class="profile">
      <p class="description">{{ texture.description }}</p>
      <dl>
        <dt>
          <i class="fa fa-link"></i>
          <span class="sr-only">Link</span>
        </dt>
        <dd>
          <a :href="texture.urlLink">{{ texture.urlText }}</a>
        </dd>

        <dt>
          <i class="fa fa-map-marker"></i>
          <span class="sr-only">Location</span>
        </dt>
        <dd>{{ texture.location }}</dd>

        <dt>
          <i class="fa fa-globe"></i>
          <span class="sr-only">Languages</span>
        </dt>
        <dd class="language-list">
          <ul>
            <li v-for="language in languages" :key="language">{{ language }}</li>
          </ul>
        </dd>

        <dt title="Proficiencies">
          <i class="fa fa-briefcase"></i>
          <span class="sr-only">Proficiencies</span>
        </dt>
        <dd class="proficiency-list">
          <ul>
            <li v-for="proficiency in texture.proficiencies" :key="proficiency.name">
              <a v-if="proficiency.url" :href="proficiency.url">
                {{ proficiency.name }}
              </a>
              <template v-else>{{ proficiency.name }}</template>
            </li>
          </ul>
        </dd>

        <dd class="social">
          <SocialIcon v-if="texture.email" type="Email" :link="mailHref"/>
          <SocialIcon v-for="link in texture.socialLinks" :key="link.name" :type="link.name" :link="link.url"/>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    texture: Object
  },

  components: {
    SocialIcon: () => import('@theme/components/ui/SocialIcon.vue')
  },

  computed: {
    languages () {
      return [].concat(this.texture.languages)
    },

    mailHref () {
      return `mailto:${this.texture.email}?subject=Hire ${this.texture.name}`
    },

    logo () {
      if (/(https:\/\/|\/).*/.test(this.texture.logo)) {
        return this.texture.logo
      }

      return `/images/textures/${this.texture.logo}`
    }
  }
}
</script>

<style lang="scss" scoped>
.texture {
  display: flex;
  padding: 25px 0;

  &:first-of-type {
    margin-top: 0.6em;
  }

  &+.texture {
    border-top: 1px dotted #ddd;
  }
}

.logo {
  flex: 0 0 125px;
}

.profile {
  padding: 0 26px;
  flex: 1;

  p {
    margin-top: 0;
  }

  ul, li, dd, dt {
    display: inline;
    padding: 0;
    margin: 0;
    line-height: 1.3;
  }

  dl {
    margin: 0.6em 0 0;
  }

  dt {
    text-transform: uppercase;
    font-size: 0.84em;
    font-weight: 600;
    min-width: 1.2em;
    margin-right: 0.5em;
    display: inline-block;
  }

  dd {
    font-weight: 600;

    &::after {
      display: block;
      content: '';
      margin-top: 0.6em;
    }
  }

  li+li::before {
    display: inline-block;
    content: '·';
    margin: 0 0.4em;
  }
}

dd.proficiency-list {
  line-height: 1.6;
}

dd.social {
  margin-top: 1.2em;
  display: block;

  a {
    display: inline-block;
    margin-right: 0.3em;
    font-size: 1.3em;
    text-decoration: none;
  }
}
</style>