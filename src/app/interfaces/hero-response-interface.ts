import { HeroInterface } from './hero-interface';

export interface HeroResponseInterface {
  code: number;
  status: string;
  copyright?: string;
  attributionText?: string;
  attributionHTML?: string;
  etag?: string;
  data?: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Array<HeroInterface>;
  };
}
