import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SigUpRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    SharedModule,
    SigUpRoutingModule
  ]
})
export class SignUpModule {
}
