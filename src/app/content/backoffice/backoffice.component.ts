import { Component, OnInit } from '@angular/core';
import { Unsubscriber } from '../../unsubscriber';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent extends Unsubscriber {
  public title = 'ng060619';
  public drawer: MatSidenav;

  public setSidenav(drawer: MatSidenav): void {
    Promise.resolve().then(() => this.drawer = drawer);
  }

}
