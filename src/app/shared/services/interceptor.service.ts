import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL_TOKEN } from '../../config';
import { filter, map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

interface IRes {
  data: any;
  error?: any;
}

@Injectable()
export class InterceptorService implements HttpInterceptor {

  public constructor(
    @Inject(BASE_URL_TOKEN) private baseUrl: string,
    private authService: AuthService
  ) {
  }

  public intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {

    return this.authService.getTokenFromLocalStorage()
      .pipe(
        switchMap((accessToken: string) => {
          const headers: HttpHeaders = req.headers
            .append('Content-Type', 'application/json')
            .append('Authorization', `Bearer ${accessToken}`);
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
        })
      );


  }

  private _isHttpResonse(e: HttpEvent<IRes>): e is HttpResponse<IRes> {
    return e instanceof HttpResponse;
  }
}
