import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appExchangeRates]'
})
export class ExchangeRatesDirective implements OnInit {

  @Input('appExchangeRatesFrom')
  public rates: any[];

  @Input('appExchangeRatesAutoplay')
  public set playAuto(mode: 'on' | 'off') {
    if (!mode) {
      return;
    }
    this.autoplay = mode;
  };

  public context: any | null = null;
  public index = 0;
  public intervalID: number | null = null;
  public autoplay = 'on';
  public ms = 2000;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) {
  }


  public ngOnInit(): void {
    this.context = {
      $implicit: this.rates[this.index],
      controller: {
        next: () => this.next(),
        prev: () => this.prev(),
      }
    };

    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
    this.resetInterval();
  }

  public next(): void {
    this.resetInterval();
    this.index++;
    if (this.index >= this.rates.length) {
      this.index = 0;
    }
    this.context.$implicit = this.rates[this.index];
  }

  public prev(): void {
    this.resetInterval();
    this.index--;
    if (this.index < 0) {
      this.index = this.rates.length - 1;
    }
    this.context.$implicit = this.rates[this.index];
  }

  private resetInterval(): void {
    if (this.autoplay !== 'on') {
      return;
    }
    this.clearInterval()
      .initInterval();
  }

  private initInterval(): void {
    this.intervalID = setInterval(() => {
      this.next();
    }, this.ms);
  }

  private clearInterval(): ExchangeRatesDirective {
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }
    return this;
  }

}
