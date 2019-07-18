import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appInit]'
})
export class InitDirective implements OnInit {

  @Input()
  public product: any;

  @Input()
  public first: boolean;

  constructor() {
  }

  public ngOnInit(): void {
    console.log(1)
    if (!this.first) {
      return;
    }
    console.log(this.product);
  }

}
