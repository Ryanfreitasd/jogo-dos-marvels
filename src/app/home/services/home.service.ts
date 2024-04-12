import { HeroResponseInterface } from './../../interfaces/hero-response-interface';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import md5 from 'md5';
import { HeroInterface } from '../../interfaces/hero-interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly api = environment.baseUrl;

  constructor(private http: HttpClient) {}

  genHash(ts: number, publicApiKey: string, privateApiKey: string): string {
    const data = ts + privateApiKey + publicApiKey;
    const hash = md5(data);
    return hash;
  }

  getHeroName(name: string): Observable<HeroResponseInterface> {
    const ts = Date.now();
    const hash = this.genHash(
      ts,
      environment.apiPublicKey,
      environment.apiPrivateKey
    );

    const params = {
      name: name,
      ts: ts,
      apikey: environment.apiPublicKey,
      hash: hash,
    };

    return this.http.get<HeroResponseInterface>(`${this.api}/characters`, {
      params: params,
    });
  }

  getDataInLocalStorage(key: string): HeroResponseInterface | null {
    const data = localStorage.getItem(key);

    if (data) {
      const herosResponse = JSON.parse(data);
      return herosResponse;
    }

    return null;
  }

  setDataInLocalStorage(data: HeroResponseInterface) {
    if (data) {
      localStorage.setItem('data', JSON.stringify(data));
    }
  }
}
