import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule,
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
    CheckusernameDirective
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {provide: BASE_URL_TOKEN, useValue: BASE_URL},
    ValidatorsService
  ],
  declarations: [UsernameValidatorDirective, EqualValidatorDirective, CheckusernameDirective],
})
export class SharedModule {
}
