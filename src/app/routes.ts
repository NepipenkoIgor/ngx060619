import { Route } from '@angular/router';
import { LoginComponent } from './content/login/login.component';
import { BackofficeComponent } from './content/backoffice/backoffice.component';
import { SignupComponent } from './content/signup/signup.component';
import { AuthGuardService } from './auth-guard.service';

export enum URL {
  LOGIN = 'login',
  SIGNUP = 'signup',
  OFFICE = 'backoffice'
}

export const routes: Route[] = [
  {
    path: '',
    redirectTo: URL.LOGIN,
    pathMatch: 'full'
  },
  {
    path: URL.LOGIN,
    component: LoginComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: URL.SIGNUP,
    component: SignupComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: URL.OFFICE,
    component: BackofficeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
