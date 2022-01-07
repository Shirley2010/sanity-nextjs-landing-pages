export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61d8a91574e734333b4654ed',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vs3nmhs9',
                  apiId: 'f409af4b-c0f7-41b1-bbf3-cd000cac7a02'
                },
                {
                  buildHookId: '61d8a9169d115d371579103a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4nhxkh2s',
                  apiId: '8019f2e3-545f-4c40-9e34-de44d5e6716f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Shirley2010/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4nhxkh2s.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
