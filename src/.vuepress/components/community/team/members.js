import { shuffle } from 'lodash'

const members = [
  {
    name: 'hato810424',
    description: 'オーナーだよ～',
    languages: ['jp'],
    github: 'hato810424',
    twitter: 'hato810424',
    minecraft_uuid: '6b80409a32964d6e8614da041c5ec185',
    work: {
      role: '管理者'
    }
  }
].concat(
  shuffle([
    {
      name: 'EndoRe07',
      languages: ['jp', 'en'],
      github: 'Elic0de',
      minecraft_uuid: '9cd931f107f9490ca64e27b6e5644ae8',
      work: {
        role: '開発者',
        org: 'プラグイン'
      }
    },
    {
      name: 'karaagemorimori',
      languages: ['jp'],
      minecraft_uuid: '83fd8656d10744ebb79a0a8e5d58abd5',
      github: 'karaagemorimori',
      work: {
        role: '接客'
      }
    },
    {
      name: 'Tanisi30',
      languages: ['jp'],
      minecraft_uuid: 'ce9b3c107dd6421caa4e5c0c5eb98bb5',
      work: {
        role: '接客'
      }
    },
    {
      name: 'SHU84',
      languages: ['jp'],
      minecraft_uuid: 'b0f09277201846aeb63c039d6e9be2be',
      work: {
        role: '接客'
      }
    },
    {
      name: 'frosch_y',
      languages: ['jp'],
      youtube: 'UC8pCIVFqNezdRAtitGBLUbg',
      minecraft_uuid: 'e98ec65ea77b40ceb46ba6e9e22f6fd6',
      work: {
        role: '接客'
      }
    },
    {
      name: 'kakiP1107',
      languages: ['jp'],
      minecraft_uuid: '4d18bbdf19c34efe9524133e1c11dd09',
      work: {
        role: '接客'
      }
    },
    {
      name: 'doudai',
      languages: ['jp'],
      minecraft_uuid: 'abf88b94efaf4ae093593577be486dc4',
      work: {
        role: '接客'
      }
    }
  ])
)

export default members
