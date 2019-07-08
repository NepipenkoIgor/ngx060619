import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { SharedModule } from '../../shared/shared.module';
import { ProductsService } from './products.service';
import { BASE_URL, BASE_URL_TOKEN } from '../../config';
import { CardConfirmModalComponent } from './product-card/card-confirm-modal/card-confirm-modal.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    CardConfirmModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    {provide: BASE_URL_TOKEN, useValue: BASE_URL},
  ],
  exports: [
    ProductsComponent
  ],
  entryComponents: [CardConfirmModalComponent]
})
export class ProductsModule {
}
