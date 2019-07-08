import { Component, Host, Input, Optional, SkipSelf } from '@angular/core';
import { IProduct } from '../../../mock';
import { ModalService } from '../../../modal/modal.service';
import { CardConfirmModalComponent } from './card-confirm-modal/card-confirm-modal.component';

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
   @SkipSelf() @Optional() private modalService: ModalService
  ) {
  }

  public addToCart(product: IProduct): void {
    this.modalService.open({
      component: CardConfirmModalComponent, context: {
        product,
        save: () => {
          console.log('Add to cart');
          this.modalService.close();
        },
        close: () => {
          this.modalService.close();
        }
      }
    });
  }
}
