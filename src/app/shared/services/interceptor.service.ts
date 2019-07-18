import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL_TOKEN } from '../../config';
import { filter, map } from 'rxjs/operators';

interface IRes {
  data: any;
  error?: any;
}

@Injectable()
export class InterceptorService implements HttpInterceptor {

  public constructor(
    @Inject(BASE_URL_TOKEN) private baseUrl: string
  ) {
  }

  public intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    const headers: HttpHeaders = req.headers
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imlnb3IiLCJpYXQiOjE1NjM0NTYyODl9.hxDtApKLT4gZIQCldGAbVCrk0YgVudADE4HQAxZd7v4');
    const jsonReq: HttpRequest<T> = req.clone({
      headers,
      url: `${this.baseUrl}${req.url}`
    });

    return next.handle(jsonReq)
      .pipe(
        filter(this._isHttpResonse),
        map((res: HttpResponse<IRes>) => {
          return res.clone({body: res.body && res.body.data});
        })
      );
  }

  private _isHttpResonse(e: HttpEvent<IRes>): e is HttpResponse<IRes> {
    return e instanceof HttpResponse;
  }
}
