export default {
  widgets: [
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
                  buildHookId: '5ff4fb80f9cccf3fa8eb4573',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qersf74z',
                  apiId: 'bc41f183-e840-4479-a67f-95b31bd94ca7'
                },
                {
                  buildHookId: '5ff4fb813c350d36e820f43b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6rnnk6sr',
                  apiId: '4560b083-feb3-4e0f-ab42-ed4e229de25f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abdulrauf11/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6rnnk6sr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
