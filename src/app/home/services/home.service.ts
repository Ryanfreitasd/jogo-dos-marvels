import { HeroResponseInterface } from './../../interfaces/hero-response-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import md5 from 'md5';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  readonly api = environment.baseUrl;

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
}
