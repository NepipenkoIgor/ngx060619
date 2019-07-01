import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    ExchangeRatesComponent,
    ExchangeRatesDirective,
    HiddenDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// Module/Directive/Pipe/Service
// NgModule => es6 module
// declarations => let/const  // directive, pipe
// imports = import;
// exports = export;  directive, pipe , module
