import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { HomeService } from './home.service';
import { mockHero } from '../../../../mock-data/heros';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

describe('HomeService', () => {
  let service: HomeService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(HomeService);
    testingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    testingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a hash value', () => {
    const result = service.genHash(123, 'ABC', '123');
    expect(result).toBe('5bcc051f4312bd3085bda5bc4995006e');
  });

  it('should return a hero', (done) => {
    const params = {
      name: 'hulk',
      ts: Date.now(),
      apikey: environment.apiPublicKey,
      hash: 'd260d779579c1ffcf11013800e3a615c',
    };

    service.getHeroName(params.name).subscribe((data: any) => {
      expect(data).toBeTruthy();
      expect(data.length).toBeGreaterThan(0);
      const hero = data;
      expect(hero.name).toBe('Hulk');
      done();
    });

    const mockReq = testingController.expectOne(
      `${service.api}/characters?name=${params.name}&ts=${params.ts}&apikey=${params.apikey}&hash=${params.hash}`
    );
    expect(mockReq.request.method).toEqual('GET');
    expect(mockReq.request.params.get('name')).toEqual(params.name);
    mockReq.flush(mockHero);
  });
});
