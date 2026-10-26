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
            'projects/fire-free/about',
            'projects/fire-free/getting-started',
            'projects/fire-free/map',
            'projects/fire-free/fire-paths',
            'projects/fire-free/content-and-account',
            'projects/fire-free/titles',
            'projects/fire-free/collaboration',
            'projects/fire-free/tools',
            'projects/fire-free/faq',
            'projects/fire-free/platform-rules',
            'projects/fire-free/disclaimer',
            'projects/fire-free/changelog',
          ],
        },
        {
          type: 'category',
          label: 'firstsaofan工具集',
          items: ['projects/firstsaofan-toolset/index'],
        },
      ],
    },
    {
      type: 'category',
      label: '.NET 知识库',
      items: [
        'dotnet/index',
        'dotnet/roadmaps',
        'dotnet/books',
        'dotnet/cheat-sheets',
        'dotnet/blogs',
        'dotnet/newsletters',
        'dotnet/podcasts',
        'dotnet/youtube',
        'dotnet/community',
        'dotnet/conferences',
      ],
    },
  ],
};

export default sidebars;
