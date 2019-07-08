import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IModalData, ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('modalContent', {read: ViewContainerRef, static: false})
  public modal: ViewContainerRef;
  public modalContext: ComponentRef<any>;
  public childComponent: ComponentFactory<any>;

  public isOpen = false;

  public constructor(
    private modalService: ModalService,
    private _cfr: ComponentFactoryResolver,
  ) {
  }

  public ngOnInit(): void {
    this.modalService.modalSequence$
      .subscribe(({component, context}: IModalData) => {
        if (!component) {
          this.close();
          return;
        }
        this.isOpen = true;
        this.childComponent = this._cfr.resolveComponentFactory(component);
        this.modalContext = this.modal.createComponent(this.childComponent);
        Object.keys(context).forEach((key: string) => {
          this.modalContext.instance[key] = context[key];
        });
      });
  }

  private close(): void {
    if (this.modalContext) {
      this.modalContext.destroy();
    }
    this.isOpen = false;
  }

}
