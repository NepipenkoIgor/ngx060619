import { Directive } from '@angular/core';
import { ValidatorsService } from '../services/validators.service';
import { FormControl, NG_ASYNC_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCheckusername]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: CheckusernameDirective,
      multi: true
    }
  ]
})
export class CheckusernameDirective implements Validator {


  public constructor(
    private validatorsService: ValidatorsService
  ) {
  }

  public validate(control: FormControl): ValidationErrors | null {
    return this.validatorsService.username(control);
  }

}
