import { shuffle } from 'lodash'

const members = [
  {
    name: 'hato810424',
    description: `鯖主でーす、気軽に声かけてね`,
    languages: ['jp'],
    github: 'hato810424',
    twitter: 'hato810424',
    youtube: 'UCIqGVfoI2XKqF5hEFRkLRsQ',
    steam: 'hato810424',
    minecraft_uuid: '6b80409a32964d6e8614da041c5ec185',
    work: {
      role: 'サーバーインフラ',
      org: '最高責任者'
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
        role: 'プラグイン開発,サーバーインフラ',
        org: '上級管理者'
      }
    },
    {
      name: 'karaagemorimori',
      description: `揚げ物大好きwikiを作れる`,
      languages: ['jp'],
      minecraft_uuid: '83fd8656d10744ebb79a0a8e5d58abd5',
      github: 'karaagemorimori',
      twitter: 'karamori_Micra',
      youtube: 'UC8ILPa6jylLWEXHmnhDAssw',
      steam: '76561198879854511',
      work: {
        role: ['接客', '広報', '建築', 'wiki部'],
        org: 'MCJR鯖-鯖主'
      }
    },
    {
      name: 'Tanisi30',
      languages: ['jp'],
      minecraft_uuid: 'ce9b3c107dd6421caa4e5c0c5eb98bb5',
      work: {
        role: '?'
      }
    },
    {
      name: 'SHU84',
      languages: ['jp'],
      minecraft_uuid: 'b0f09277201846aeb63c039d6e9be2be',
      work: {
        role: '?'
      }
    },
    {
      name: 'frosch_y',
      description: `26%洗剤の人　イベントとかやっている自称アスレ勢`,
      languages: ['jp'],
      youtube: 'UC8pCIVFqNezdRAtitGBLUbg',
      minecraft_uuid: 'e98ec65ea77b40ceb46ba6e9e22f6fd6',
      work: {
        role: 'コマンド',
      }
    },
    {
      name: 'kakiP1107',
      description: `自称プロ建築地の人（無能とか言わんといてね）`,
      languages: ['jp'],
      minecraft_uuid: '4d18bbdf19c34efe9524133e1c11dd09',
      twitter: '7gY0vPUE01MuYjb',
      work: {
        role: '建築'
      }
    },
    {
      name: 'yohane',
      description: 'ヨハネです。困ったことがありましたら気軽にお声がけください！',
      github: 'Yohane0227',
      twitter: 'Yohane27_',
      steam: 'yohane1636',
      youtube: 'UCSXnjIIX7I1dw5jiQxmdm6w',
      languages: ['jp'],
      minecraft_uuid: '878178de06834b22b50d06088f13efc2',
      work: {
        role: 'サポーター'
      }
    },
    {
      name: 'doudai',
      description: `なんか運営にされた人暇なときに監視してる悪事をするとお仕置きよ`,
      languages: ['jp'],
      twitter: 'doudai9',
      minecraft_uuid: 'abf88b94efaf4ae093593577be486dc4',
      work: {
        role: '接客'
      }
    },
    {
      name: 'more5804',
      languages: ['jp'],
      minecraft_uuid: '65d9cc294ea44acb8278b477227cb8e9',
      work: {
        role: '接客'
      }
    },
    {
      name: 'CleanestQuill89',
      languages: ['jp'],
      minecraft_uuid: '10df97fbae094e7490f4e7f26b998b12',
      work: {
        role: '建築',
        org: '青鬼鯖-鯖主'
      }
    },
    {
      name: 'Genkiyade',
      languages: ['jp'],
      minecraft_uuid: 'c2c5071f71574930918473d49e8417bb',
      work: {
        role: '広報',
        org: 'FFA鯖-鯖主'
      }
    },
    {
      name: 'reitan234',
      languages: ['jp'],
      twitter: 'lemon_tantan_',
      minecraft_uuid: 'cb446eb6b06f4cc4a2b66a3aa815ff83',
      work: {
        role: '接客',
      }
    },
    {
      name: 'rainbowfishzzz',
      languages: ['jp'],
      minecraft_uuid: '8439a93c40c048b5be1d7d4b3dd42f38',
      work: {
        role: '接客',
      }
    },
    {
      name: 'Yeahn',
      languages: ['jp'],
      twitter: 'yeahnmc',
      minecraft_uuid: '2d048f12e93340e89dd8a7e9f95007aa',
      work: {
        role: '接客',
      }
    },
    {
      name: 'Rui00831',
      languages: ['jp'],
      twitter: 'Rui00831',
      minecraft_uuid: '14965c9af1cf479685279ed30cb19722',
      work: {
        role: '接客',
      }
    },
    {
      name: 'ships3ATT',
      languages: ['jp'],
      twitter: 'freedom96718575',
      minecraft_uuid: '39811cfb0fae457995f54f42ffba5363',
      work: {
        role: '接客',
      }
    },
    {
      name: 'tsubu_sensei1021',
      languages: ['jp'],
      twitter: 'mc_minamikana',
      minecraft_uuid: '2e229038a943426cb50fb34b86b03de8',
      work: {
        role: '接客',
        org: 'Life鯖-鯖主'
      }
    },
    {
      name: 'Sou2014',
      languages: ['jp'],
      twitter: 'minecrafter_so',
      minecraft_uuid: 'ac840433bf8e4c49b473adc8eba84e11',
      work: {
        role: '接客',
      }
    }
  ])
)

export default members
