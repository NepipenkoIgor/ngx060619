import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  MatBadgeModule,
  MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule, MatMenuModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { BASE_URL, BASE_URL_TOKEN } from '../config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorsService } from './services/validators.service';
import { UsernameValidatorDirective } from './directives/username-validator.directive';
import { EqualValidatorDirective } from './directives/equal-validator.directive';
import { CheckusernameDirective } from './directives/checkusername.directive';
import { ProductsService } from './services/products.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthGuardService } from './services/auth-guard.service';
import { PreloadService } from './services/preload.service';
import { AuthService } from './services/auth.service';

@NgModule({
  exports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    UsernameValidatorDirective,
    EqualValidatorDirective,
    CheckusernameDirective,
    MatBadgeModule,
    FlexLayoutModule,
    MatMenuModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
  ],
  declarations: [UsernameValidatorDirective, EqualValidatorDirective, CheckusernameDirective],
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ValidatorsService,
        {provide: BASE_URL_TOKEN, useValue: BASE_URL},
        ProductsService,
        AuthGuardService,
        PreloadService,
        AuthService
      ]
    };
  }
}
