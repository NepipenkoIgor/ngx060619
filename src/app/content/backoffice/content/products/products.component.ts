import { Component, OnInit, Optional, SkipSelf } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { Observable } from 'rxjs';
import { IStore } from '../../../../store';
import { Store } from '@ngrx/store';
import { GetProductsPending } from '../../../../store/actions/products.action';
import { IProduct } from '../../../../store/reducers/products.reducer';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public products$: Observable<IProduct[]>;
  public searchTerm: string;
  public onlyFavorites: boolean;

  constructor(
    private store: Store<IStore>,
  ) {
  }

  ngOnInit() {
    this.products$ = this.store.select('products');
    this.store.dispatch(new GetProductsPending());
  }


  public search(ev: Event): void {
    const el: HTMLInputElement = (ev.target as HTMLInputElement);
    this.searchTerm = el.value;
  }

  public toggleFavorites(ev: MatCheckboxChange): void {
    this.onlyFavorites = ev.checked;
  }

  // TODO why rerender  item._id ???
  public trackByFn(index: number, item: IProduct): string {
    return item._id;
  }
}
