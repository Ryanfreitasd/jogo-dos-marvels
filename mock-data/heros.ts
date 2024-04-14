import { HeroResponseInterface } from '../src/app/interfaces/hero-response-interface';

export const mockHero: HeroResponseInterface = {
  code: 200,
  status: 'OK',
  data: {
    count: 1,
    limit: 1,
    offset: 0,
    total: 1,
    results: [
      {
        id: '123',
        name: 'Hulk',
        description: 'A big green monster',
        modified: new Date(),
        thumbnail: {
          path: '',
          extension: '.jpg',
        },
        resourceURI: '',
        comics: {
          available: 0,
          collectionURI: '',
          items: [
            {
              resourceURI: '',
              name: '',
              type: '',
            },
          ],
          returned: 0,
        },
        series: {
          available: 0,
          collectionURI: '',
          items: [
            {
              resourceURI: '',
              name: '',
              type: '',
            },
          ],
          returned: 0,
        },
        stories: {
          available: 0,
          collectionURI: '',
          items: [
            {
              resourceURI: '',
              name: '',
              type: '',
            },
          ],
          returned: 0,
        },
        events: {
          available: 0,
          collectionURI: '',
          items: [
            {
              resourceURI: '',
              name: '',
              type: '',
            },
          ],
          returned: 0,
        },
        urls: [
          {
            type: '',
            url: '',
          },
        ],
      },
    ],
  },
};
