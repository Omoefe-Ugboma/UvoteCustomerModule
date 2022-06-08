import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { getUserToken } from '../utils/auth-utils';

@Injectable({
  providedIn: 'root'
})
export class RemoteCallService {
  baseUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  private generateFullURL(url: string) {
    return `${this.baseUrl + url}`;
  }

  private getAuthHeader(): HttpHeaders {
    const token = getUserToken();

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: `Bearer ${token}`
    });

    return header;
  }

  guestPost(url: string, obj: any) {
    return this.http.post<any>(this.generateFullURL(url), obj);
  }

  guestGet(url: string) {
    return this.http.get<any>(this.generateFullURL(url));
  }


  authGet(url: string) {
    const httpOptions = {
      headers: this.getAuthHeader()
    };

    return this.http.get<any>(this.generateFullURL(url), httpOptions);
  }

  authPost(url: string, data: any) {
    const httpOptions = {
      headers: this.getAuthHeader()
    };

    return this.http.post<any>(this.generateFullURL(url), data, httpOptions );
  }

  authGet2(url: string, params?: any) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach(k => {
      httpParams = httpParams.set(k, params[k]);
    });
    const httpOptions = {
      headers: this.getAuthHeader(),
      params: httpParams
    };
    return this.http.get<any>(this.generateFullURL(url), httpOptions);
  }
}
