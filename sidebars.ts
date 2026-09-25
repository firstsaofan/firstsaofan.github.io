import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: '项目文档',
      items: [
        {
          type: 'category',
          label: 'FIRE自由',
          items: [
            'projects/fire-free/index',
            'projects/fire-free/getting-started',
            'projects/fire-free/map',
            'projects/fire-free/content-and-account',
            'projects/fire-free/collaboration',
            'projects/fire-free/tools',
            'projects/fire-free/faq',
            'projects/fire-free/platform-rules',
            'projects/fire-free/disclaimer',
          ],
        },
        {
          type: 'category',
          label: 'firstsaofan工具集',
          items: ['projects/firstsaofan-toolset/index'],
        },
      ],
    },
  ],
};

export default sidebars;
