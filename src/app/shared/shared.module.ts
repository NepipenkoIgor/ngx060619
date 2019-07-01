import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ]
})
export class SharedModule {
}
