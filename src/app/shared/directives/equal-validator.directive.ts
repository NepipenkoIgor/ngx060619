import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { ValidatorsService } from '../services/validators.service';

@Directive({
  selector: '[appEqualValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EqualValidatorDirective,
      multi: true
    }
  ]
})
export class EqualValidatorDirective implements Validator {

  public constructor(
    private validatorsService: ValidatorsService
  ) {
  }

  public validate(control: FormGroup): ValidationErrors | null {
    return this.validatorsService.equalValidator(control);
  }

}
