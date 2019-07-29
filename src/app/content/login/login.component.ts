import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../store';
import { LoginPending } from '../../store/actions/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  public constructor(
    public store: Store<IStore>
  ) {
  }

  public login(loginInfo: { username: string, password: string }): void {
    this.store.dispatch(new LoginPending(loginInfo));
  }
}
