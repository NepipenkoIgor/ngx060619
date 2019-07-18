import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { OneProductComponent } from './one-product/one-product.component';
import { ProductResolverService } from './one-product/product-resolver.service';

export const routes: Route[] = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':id',
    data: {
      title: 'One Product'
    },
    resolve: {
      product: ProductResolverService
    },
    component: OneProductComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }
