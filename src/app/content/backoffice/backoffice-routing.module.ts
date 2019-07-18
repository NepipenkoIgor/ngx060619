import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';

export const routes: Route[] = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
      },
      {
        path: 'products',
        loadChildren: './content/products/products.module#ProductsModule'
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {
}
