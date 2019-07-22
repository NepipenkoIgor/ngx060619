import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { ValidatorsService } from '../services/validators.service';

@Directive({
  selector: '[appUsernameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UsernameValidatorDirective,
      multi: true
    }
  ]
})
export class UsernameValidatorDirective implements Validator {

  public constructor(
    private validatorsService: ValidatorsService
  ) {
  }

  public validate(control: FormControl): ValidationErrors | null {
    return this.validatorsService.usernameValidator(control);
  }
}
