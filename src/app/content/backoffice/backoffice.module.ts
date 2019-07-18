import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';
import { BackofficeComponent } from './backoffice.component';
import { SharedModule } from '../../shared/shared.module';
import { BackofficeRoutingModule } from './backoffice-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ExchangeRatesComponent,
    ExchangeRatesDirective,
    HiddenDirective,
    BackofficeComponent,
  ],
  imports: [
    SharedModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule { }
