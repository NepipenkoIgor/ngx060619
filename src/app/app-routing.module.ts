import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { PreloadService } from './shared/services/preload.service';

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
    loadChildren: './content/login/login.module#LoginModule',
    canActivate: [AuthGuardService]
  },
  {
    path: URL.SIGNUP,
    loadChildren: './content/signup/signup.module#SignUpModule',
    canActivate: [AuthGuardService]
  },
  {
    path: URL.OFFICE,
    loadChildren: './content/backoffice/backoffice.module#BackofficeModule',
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadService})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
