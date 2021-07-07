const sidebar = {
  // cookbook: [
  //   {
  //     title: 'Cookbook',
  //     collapsable: false,
  //     children: [
  //       '/cookbook/',
  //       '/cookbook/editable-svg-icons',
  //       '/cookbook/debugging-in-vscode',
  //       '/cookbook/automatic-global-registration-of-base-components'
  //     ]
  //   }
  // ],
  guide: [
    {
      title: '初めての方へ',
      collapsable: false,
      children: [
        '/guide/introduction',
      ]
    },
    // {
    //   title: 'Components In-Depth',
    //   collapsable: false,
    //   children: [
    //     '/guide/component-registration',
    //     '/guide/component-props',
    //     '/guide/component-attrs',
    //     '/guide/component-custom-events',
    //     '/guide/component-slots',
    //     '/guide/component-provide-inject',
    //     '/guide/component-dynamic-async',
    //     '/guide/component-template-refs',
    //     '/guide/component-edge-cases'
    //   ]
    // },
    // {
    //   title: 'Transitions & Animation',
    //   collapsable: false,
    //   children: [
    //     '/guide/transitions-overview',
    //     '/guide/transitions-enterleave',
    //     '/guide/transitions-list',
    //     '/guide/transitions-state'
    //   ]
    // },
    // {
    //   title: 'Reusability & Composition',
    //   collapsable: false,
    //   children: [
    //     {
    //       title: 'Composition API',
    //       children: [
    //         '/guide/composition-api-introduction',
    //         '/guide/composition-api-setup',
    //         '/guide/composition-api-lifecycle-hooks',
    //         '/guide/composition-api-provide-inject',
    //         '/guide/composition-api-template-refs'
    //       ]
    //     },
    //     '/guide/mixins',
    //     '/guide/custom-directive',
    //     '/guide/teleport',
    //     '/guide/render-function',
    //     '/guide/plugins'
    //   ]
    // },
    // {
    //   title: 'Advanced Guides',
    //   collapsable: false,
    //   children: [
    //     {
    //       title: 'Reactivity',
    //       children: [
    //         '/guide/reactivity',
    //         '/guide/reactivity-fundamentals',
    //         '/guide/reactivity-computed-watchers'
    //       ]
    //     },
    //     '/guide/optimizations',
    //     '/guide/change-detection'
    //   ]
    // },
    // {
    //   title: 'Tooling',
    //   collapsable: false,
    //   children: [
    //     '/guide/single-file-component',
    //     '/guide/testing',
    //     '/guide/typescript-support',
    //     '/guide/mobile',
    //     '/guide/tooling/deployment'
    //   ]
    // },
    // {
    //   title: 'Scaling Up',
    //   collapsable: false,
    //   children: ['/guide/routing', '/guide/state-management', '/guide/ssr', '/guide/security']
    // },
    // {
    //   title: 'Accessibility',
    //   collapsable: false,
    //   children: [
    //     '/guide/a11y-basics',
    //     '/guide/a11y-semantics',
    //     '/guide/a11y-standards',
    //     '/guide/a11y-resources'
    //   ]
    // }
  ],
  // api: [
  //   '/api/application-config',
  //   '/api/application-api',
  //   '/api/global-api',
  //   {
  //     title: 'Options',
  //     path: '/api/options-api',
  //     collapsable: false,
  //     children: [
  //       '/api/options-data',
  //       '/api/options-dom',
  //       '/api/options-lifecycle-hooks',
  //       '/api/options-assets',
  //       '/api/options-composition',
  //       '/api/options-misc'
  //     ]
  //   },
  //   '/api/instance-properties',
  //   '/api/instance-methods',
  //   '/api/directives',
  //   '/api/special-attributes',
  //   '/api/built-in-components.md',
  //   {
  //     title: 'Reactivity API',
  //     path: '/api/reactivity-api',
  //     collapsable: false,
  //     children: [
  //       '/api/basic-reactivity',
  //       '/api/refs-api',
  //       '/api/computed-watch-api'
  //     ]
  //   },
  //   '/api/composition-api'
  // ],
  // examples: [
  //   {
  //     title: 'Examples',
  //     collapsable: false,
  //     children: [
  //       '/examples/markdown',
  //       '/examples/commits',
  //       '/examples/grid-component',
  //       '/examples/tree-view',
  //       '/examples/svg',
  //       '/examples/modal',
  //       '/examples/elastic-header',
  //       '/examples/select2',
  //       '/examples/todomvc'
  //     ]
  //   }
  // ],
  // migration: [
  //   '/guide/migration/introduction',
  //   '/guide/migration/migration-build',
  //   {
  //     title: 'Details',
  //     collapsable: false,
  //     children: [
  //       '/guide/migration/array-refs',
  //       '/guide/migration/async-components',
  //       '/guide/migration/attribute-coercion',
  //       '/guide/migration/attrs-includes-class-style',
  //       '/guide/migration/children',
  //       '/guide/migration/custom-directives',
  //       '/guide/migration/custom-elements-interop',
  //       '/guide/migration/data-option',
  //       '/guide/migration/emits-option',
  //       '/guide/migration/events-api',
  //       '/guide/migration/filters',
  //       '/guide/migration/fragments',
  //       '/guide/migration/functional-components',
  //       '/guide/migration/global-api',
  //       '/guide/migration/global-api-treeshaking',
  //       '/guide/migration/inline-template-attribute',
  //       '/guide/migration/key-attribute',
  //       '/guide/migration/keycode-modifiers',
  //       '/guide/migration/listeners-removed',
  //       '/guide/migration/mount-changes',
  //       '/guide/migration/props-data',
  //       '/guide/migration/props-default-this',
  //       '/guide/migration/render-function-api',
  //       '/guide/migration/slots-unification',
  //       '/guide/migration/suspense',
  //       '/guide/migration/transition',
  //       '/guide/migration/transition-as-root',
  //       '/guide/migration/transition-group',
  //       '/guide/migration/v-on-native-modifier-removed',
  //       '/guide/migration/v-model',
  //       '/guide/migration/v-if-v-for',
  //       '/guide/migration/v-bind',
  //       '/guide/migration/vnode-lifecycle-events',
  //       '/guide/migration/watch'
  //     ]
  //   }
  // ],
  // ssr: [
  //   ['/guide/ssr/introduction', 'Introduction'],
  //   '/guide/ssr/getting-started',
  //   '/guide/ssr/universal',
  //   '/guide/ssr/structure',
  //   '/guide/ssr/build-config',
  //   '/guide/ssr/server',
  //   '/guide/ssr/routing',
  //   '/guide/ssr/hydration'
  // ],
  contributing: [
    {
      title: 'Contribute to the Docs',
      collapsable: false,
      children: [
        '/guide/contributing/doc-style-guide'
      ]
    }
  ]
}

module.exports = {
  title: 'はと鯖　公式wikiサイト',
  description: 'はと鯖 - みんなの「楽しい」を提供しませんか',
  head: [
    [
      'link',
      {
        href:
          'https://fonts.googleapis.com/css?family=Inter:300,400,500,600|Open+Sans:400,600;display=swap',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: 'https://crafatar.com/renders/head/6b80409a32964d6e8614da041c5ec185'
      }
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/images/icons/apple-icon-152x152.png'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/images/icons/ms-icon-144x144.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    [
      'script',
      {
        src: 'https://player.vimeo.com/api/player.js'
      }
    ],
    [
      'script',
      {
        src: 'https://extend.vimeocdn.com/ga/72160148.js',
        defer: 'defer'
      }
    ]
  ],
  themeConfig: {
    //logo: '/logo.png',
    nav: [
      {
        text: 'トップ',
        ariaLabel: 'Documentation Menu',
        items: [
          {
            text: 'ガイド',
            link: '/guide/introduction'
          },
          {
            text: 'ルール',
            link: '/style-guide/'
          },
          {
            text: 'コントリビュート',
            link: '/guide/contributing/doc-style-guide'
          }
        ]
      },
      {
        text: 'お初さんはこちら！',
        link: '/guide/introduction'
      },
      {
        text: 'ルール',
        link: '/rules/'
      },
      {
        text: '運営チーム',
        link: '/community/team/'
      },
      {
        text: 'サーバー',
        ariaLabel: 'マインクラフトのサーバー',
        items: [
          {
            text: '生活鯖',
            link: '/server/seikatsu'
          },
          {
            text: 'ライフ鯖',
            link: '/server/life'
          },
          {
            text: 'ミニゲーム鯖',
            link: '/server/minigame'
          },
          {
            text: 'RTM鯖',
            link: '/server/rtm'
          },
          {
            text: '青鬼ごっこ鯖',
            link: '/server/aooni'
          }
        ]
      }
    ],
    repo: 'vuejs/docs',
    editLinks: true,
    editLinkText: 'GitHubで編集する!',
    lastUpdated: '最終更新日',
    docsDir: 'src',
    sidebarDepth: 2,
    sidebar: {
      collapsable: false,
      '/guide/contributing/': sidebar.contributing,
      '/guide/': sidebar.guide,
      '/community/': sidebar.guide
    },
    smoothScroll: false,
    algolia: {
      indexName: 'vuejs-v3',
      appId: 'BH4D9OD16A',
      apiKey: 'bc6e8acb44ed4179c30d0a45d6140d3f'
    },
    // carbonAds: {
    //   carbon: 'CEBDT27Y',
    //   custom: 'CKYD62QM',
    //   placement: 'vuejsorg'
    // },
    topBanner: false
  },
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '/mojang/': {
        target: "https://sessionserver.mojang.com/session/minecraft/profile/",
        changeOrigin: true,
        pathRewrite: {'^/mojang/': ''},
      }
    }
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer(timestamp) {
          const date = new Date(timestamp)

          const digits = [
            date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(),
            date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()
          ].map(num => String(num).padStart(2, '0'))

          return '{0}-{1}-{2}, {3}:{4}:{5} UTC'.replace(/{(\d)}/g, (_, num) => digits[num])
        }
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        }
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'info',
        before: info =>
          `<div class="custom-block info"><p class="custom-block-title">${info}</p>`,
        after: '</div>'
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    /** @param {import('markdown-it')} md */
    extendMarkdown: md => {
      md.options.highlight = require('./markdown/highlight')(
        md.options.highlight
      )
    }
  }
}
