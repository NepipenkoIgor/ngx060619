import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Unsubscriber } from './unsubscriber';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends Unsubscriber {
  public title = 'ng060619';
  public drawer: MatSidenav;

  public setSidenav(drawer: MatSidenav): void {
    Promise.resolve().then(() => this.drawer = drawer);
  }

}
