import { shuffle } from 'lodash'

const members = [
  {
    name: 'hato810424',
    title: 'まじまんじ',
   // city: 'Tokyo',
    languages: ['jp'],
    github: 'hato810424',
    twitter: 'hato810424',
    minecraft_uuid: '6b80409a32964d6e8614da041c5ec185',
    work: {
      role: '管理者'
    },
   // reposOfficial: ['vuejs/*', 'vuejs-templates/*'],
   // links: ['https://www.patreon.com/evanyou']
  }
].concat(
  shuffle([
    {
      name: 'EndoRe07',
      title: 'Real-Time Rerouter',
      //city: 'Paris, France',
      languages: ['jp', 'en'],
      github: 'Elic0de',
      minecraft_uuid: '9cd931f107f9490ca64e27b6e5644ae8',
      work: {
        role: '開発者',
        org: 'プラグイン'
      },
      // reposOfficial: ['vuefire', 'vue-router'],
      // reposPersonal: ['vuex-mock-store', 'vue-promised', 'vue-motion'],
      // links: ['https://www.patreon.com/posva']
    },
    {
      name: 'karaagemorimori',
      //city: 'Hangzhou, China',
      languages: ['jp'],
      minecraft_uuid: '83fd8656d10744ebb79a0a8e5d58abd5',
      github: 'karaagemorimori',
      work: {
        role: '接客'
      }
      //reposOfficial: ['vue-cli', 'vue-loader']
    }
  ])
)

export default members
