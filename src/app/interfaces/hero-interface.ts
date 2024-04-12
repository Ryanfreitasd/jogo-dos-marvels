interface Items {
  available: number;
  collectionURI: string;
  items: [
    {
      resourceURI: string;
      name: string;
      type?: string;
    }
  ];
  returned: number;
}

export interface HeroInterface {
  id: string;
  name: string;
  description: string;
  modified: Date;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: Items;
  series: Items;
  stories: Items;
  events: Items;
  urls: [
    {
      type: string;
      url: string;
    }
  ];
}
