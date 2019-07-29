import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SigUpRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SwitcherComponent } from './switcher/switcher.component';

@NgModule({
  declarations: [SignupComponent, SwitcherComponent],
  imports: [
    SharedModule,
    SigUpRoutingModule
  ]
})
export class SignUpModule {
}
