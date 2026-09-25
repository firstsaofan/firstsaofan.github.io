import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '桃源耕云客（firstsaofan）文档中心',
  tagline: '多个项目的文档、使用指南与技术记录',
  favicon: 'img/favicon.svg',
  future: {
    v4: true,
  },
  url: 'https://firstsaofan.github.io',
  baseUrl: '/',
  trailingSlash: false,
  organizationName: 'firstsaofan',
  projectName: 'firstsaofan.github.io',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          exclude: [
            'intro.mdx',
            'agent-guide.mdx',
            'projects/fire-free/agent-guide.mdx',
            'projects/aion2/**',
            'projects/token-counter/**',
            'projects/anime/**',
          ],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '桃源耕云客（firstsaofan）文档中心',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://github.com/firstsaofan/firstsaofan.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '项目',
          items: [
            {label: 'FIRE自由', to: '/docs/projects/fire-free'},
            {label: 'firstsaofan工具集', to: '/docs/projects/firstsaofan-toolset'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 桃源耕云客（firstsaofan）. 文档持续更新中。`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
