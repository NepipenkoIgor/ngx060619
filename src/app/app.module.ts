import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './content/backoffice/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './content/backoffice/sidebar/sidebar.component';
import { ExchangeRatesComponent } from './content/backoffice/header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './content/backoffice/header/exchange-rates/exchange-rates.directive';
import { HiddenDirective } from './content/backoffice/header/exchange-rates/hidden.directive';
import { ProductsModule } from './content/products/products.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { ModalModule } from './modal/modal.module';
import { LoginComponent } from './content/login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { BackofficeComponent } from './content/backoffice/backoffice.component';
import { SignupComponent } from './content/signup/signup.component';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ExchangeRatesComponent,
    ExchangeRatesDirective,
    HiddenDirective,
    LoginComponent,
    BackofficeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ProductsModule,
    HttpClientModule,
    ModalModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// Module/Directive/Pipe/Service
// NgModule => es6 module
// declarations => let/const  // directive, pipe
// imports = import;
// exports = export;  directive, pipe , module
