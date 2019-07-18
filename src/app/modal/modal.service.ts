import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface IModalData {
  component: any;
  context: any;
  resolver: ComponentFactoryResolver;
}

@Injectable()
export class ModalService {

  private modalSequence$$ = new Subject();

  public constructor() {
    console.log('ModalService Init');
  }

  public open(data: IModalData): void {
    this.modalSequence$$.next(data);
  }

  public close(): void {
    this.modalSequence$$.next({});
  }

  public get modalSequence$(): Observable<IModalData | {}> {
    return this.modalSequence$$.asObservable();
  }

}
