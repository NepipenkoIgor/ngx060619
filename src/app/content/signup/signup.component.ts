import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../shared/services/validators.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;
  public commonValidators = [Validators.required,
    Validators.minLength(6)];


  constructor(
    private validatorsService: ValidatorsService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', [
        ...this.commonValidators,
        this.validatorsService.usernameValidator
      ], [this.validatorsService.username]],
      emails: this.fb.array([this.fb.control('')]),
      male: [true],
      password: this.fb.group({
        password: this.fb.control('', this.commonValidators),
        cpassword: this.fb.control('', this.commonValidators)
      }, {
        validator: this.validatorsService.equalValidator
      })
    });

    this.signupForm.valueChanges.subscribe(v => {
      console.log(v);
    });
  }

  public signup(user: any): void {
    console.log(user);
  }

  public getControls(control: FormGroup, path: string): FormControl[] {
    return (control.get(path) as FormArray).controls as FormControl[];
  }

  public addEmail(): void {
    (this.signupForm.get('emails') as FormArray).push(this.fb.control(''));
  }

  public removeEmail(index: number): void {
    (this.signupForm.get('emails') as FormArray).removeAt(index);
  }
}
