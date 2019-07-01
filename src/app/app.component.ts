import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatCheckboxChange, MatSidenav } from '@angular/material';
import { IProduct, products$ } from './mock';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Unsubscriber } from './unsubscriber';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends Unsubscriber implements OnInit, OnDestroy {
  public title = 'ng060619';
  public drawer: MatSidenav;
  public products$: Observable<IProduct[]> = products$;
  public searchTerm: string;
  public onlyFavorites: boolean;

  public ngOnInit(): void {

  }


  public setSidenav(drawer: MatSidenav): void {
    Promise.resolve().then(() => this.drawer = drawer);
  }

  public search(ev: Event): void {
    const el: HTMLInputElement = (ev.target as HTMLInputElement);
    this.searchTerm = el.value;
  }

  public toggleFavorites(ev: MatCheckboxChange): void {
    this.onlyFavorites = ev.checked;
  }

  // TODO why rerender  item._id ???
  public trackByFn(index: number, item: IProduct): number {
    return item._id;
  }
}
