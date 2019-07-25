import { Component, ComponentFactoryResolver, Host, Input, Optional, SkipSelf } from '@angular/core';
import { ModalService } from '../../../../../modal/modal.service';
import { CardConfirmModalComponent } from './card-confirm-modal/card-confirm-modal.component';
import { IStore } from '../../../../../store';
import { Store } from '@ngrx/store';
import { AddProductToCart } from '../../../../../store/actions/cart.action';
import { IProduct } from '../../../../../store/reducers/products.reducer';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  providers: [ModalService]
})
export class ProductCardComponent {

  @Input()
  public product: IProduct;

  @Input()
  public isOdd: boolean;

  constructor(
    @SkipSelf() @Optional() private modalService: ModalService,
    private cfr: ComponentFactoryResolver,
    private store: Store<IStore>,
  ) {
  }

  public addToCart(product: IProduct): void {
    this.modalService.open({
      resolver: this.cfr,
      component: CardConfirmModalComponent, context: {
        product,
        save: () => {
          this.store.dispatch(new AddProductToCart(product));
          this.modalService.close();
        },
        close: () => {
          this.modalService.close();
        }
      }
    });
  }
}
