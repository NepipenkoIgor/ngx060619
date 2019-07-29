import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IUser } from '../../store/reducers/user.reducer';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) {
  }


  public login(user: any): Observable<IUser> {
    return this.http.post<IUser>('/auth/signin', {...user});
  }


  public signup(user: any): Observable<IUser> {
    return this.http.post<IUser>('/auth/signup', {...user});
  }

  public checkUser(): Observable<IUser> {
    return this.http.get<IUser>('/user/checkuser');
  }

  public tokenToLocalStorage(user: IUser): Observable<any> {
    if (!user || !user.accessToken) {
      return of(null);
    }
    localStorage.setItem('accessToken', user.accessToken);
    return of(user);
  }

  public getTokenFromLocalStorage(): Observable<any> {
    return of(localStorage.getItem('accessToken'));
  }

  public removeFromLocalStorage(name: string): Observable<any> {
    return of(localStorage.removeItem(name));
  }
}
