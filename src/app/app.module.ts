import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from './modal/modal.module';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/effects/products.effect';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([ProductsEffects])
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
