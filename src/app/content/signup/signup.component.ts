import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      email: ['', this.commonValidators],
      password: this.fb.group({
        password: this.fb.control('', this.commonValidators),
        cpassword: this.fb.control('', this.commonValidators)
      }, {
        validator: this.validatorsService.equalValidator
      })
    }, {
      updateOn: 'submit'
    });

    this.signupForm.valueChanges.subscribe(v => {
      console.log(v);
    });
  }

  public signup(user: any): void {
    console.log(user);
  }
}
