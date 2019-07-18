import { Component, OnInit, Optional, SkipSelf } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { IProduct } from '../../../../mock';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ {provide: ProductsService, useClass: ProductsService, deps: [HttpClient]},]
})
export class ProductsComponent implements OnInit {
  public products$: Observable<IProduct[]>;
  public searchTerm: string;
  public onlyFavorites: boolean;

  constructor(
     private productsService: ProductsService
  ) {
  }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }


  public search(ev: Event): void {
    const el: HTMLInputElement = (ev.target as HTMLInputElement);
    this.searchTerm = el.value;
  }

  public toggleFavorites(ev: MatCheckboxChange): void {
    this.onlyFavorites = ev.checked;
  }

  // TODO why rerender  item._id ???
  public trackByFn(index: number, item: IProduct): number {
    return item._id;
  }
}
