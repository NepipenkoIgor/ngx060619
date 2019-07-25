import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICartProduct } from '../../../../../store/reducers/cart.reducer';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  public product: ICartProduct;

  @Output()
  public remove: EventEmitter<ICartProduct> = new EventEmitter();
  @Output()
  public increment: EventEmitter<ICartProduct> = new EventEmitter();
  @Output()
  public decrement: EventEmitter<ICartProduct> = new EventEmitter();

  public round(price: number): number {
    return Math.round(price);
  }

  public removeProduct(): void {
    this.remove.emit(this.product);
  }

  public incrementProduct(): void {
    this.increment.emit(this.product);
  }

  public decrementProduct(): void {
    if (this.product.count === 1) {
      this.removeProduct();
      return;
    }
    this.decrement.emit(this.product);
  }


}
