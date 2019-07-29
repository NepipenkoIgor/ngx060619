import { Component, OnInit } from '@angular/core';
import { IStore } from '../../../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICartProduct, selectAll } from '../../../../store/reducers/cart.reducer';
import { DecrementProductInCart, IncrementProductInCart, RemoveProductFromCart } from '../../../../store/actions/cart.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products$: Observable<ICartProduct[]>;

  constructor(
    private store: Store<IStore>
  ) {
  }

  ngOnInit() {
    // TODO selectors ????
    this.products$ = this.store.select(selectAll);
    // this.products$ = this.store.select(selectAll);
  }

  public removeProduct(product: ICartProduct): void {
    this.store.dispatch(new RemoveProductFromCart(product));
  }

  public incrementProduct(product: ICartProduct): void {
    this.store.dispatch(new IncrementProductInCart(product));
  }

  public decrementProduct(product: ICartProduct): void {
    this.store.dispatch(new DecrementProductInCart(product));
  }

  public trackByFn(index: number, item: ICartProduct): string {
    return item._id;
  }

}
