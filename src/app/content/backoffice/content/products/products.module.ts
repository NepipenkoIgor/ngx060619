import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { SharedModule } from '../../../../shared/shared.module';
import { CardConfirmModalComponent } from './product-card/card-confirm-modal/card-confirm-modal.component';
import { InitDirective } from './init.directive';
import { ProductsRoutingModule } from './products-routing.module';
import { OneProductComponent } from './one-product/one-product.component';
import { ProductResolverService } from './one-product/product-resolver.service';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    CardConfirmModalComponent,
    InitDirective,
    OneProductComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductsComponent
  ],
  providers: [
    ProductResolverService
  ],
  entryComponents: [CardConfirmModalComponent]
})
export class ProductsModule {
}
