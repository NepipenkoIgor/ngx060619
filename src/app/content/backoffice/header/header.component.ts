import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, HostListener,
  Input,
  OnChanges,
  OnInit, SimpleChanges
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSidenav } from '@angular/material';
import { IStore } from '../../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { totalCount } from '../../../store/reducers/cart.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public drawer: MatSidenav;

  public headerTitleColor = this.sanitizer.bypassSecurityTrustStyle('color: orange');

  public rates = [{value: 26.25, currency: 'USD'}, {value: 30.25, currency: 'EUR'}, {value: 0.42, currency: 'RUB'}];

  public isOpen = false;

  public productsCount$: Observable<number>;

  constructor(
    private sanitizer: DomSanitizer,
    private store: Store<IStore>,
  ) {
  }

  public ngOnInit(): void {
    this.productsCount$ = this.store.select(totalCount);
  }

  @HostListener('window:click', ['$event'])
  public handleCartClose(e): void {
    const isInCart = e.target.closest('.cart') || e.target.matches('.remove');
    if (isInCart) {
      return;
    }
    this.isOpen = false;
  }


  public toggleSidenav(): void {
    this.drawer.toggle();
  }

}
