import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';

import { timer } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'bdc-bo-recovery-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss', '../../../../assets/sass/layout/entry.scss'],
})
export class RecoverPasswordComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  public form!: FormGroup;
  public recoveryEmail!: boolean;
  public resendEnabled = true;
  public timer!: number;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.recoveryEmail = true;
    this.setUpForm();
  }

  public resendPin(): void {
    this.setUpCountdownResendPinStream();
    // this.signinFacade.validatePersonDataTrigger$.next();
  }
  private setUpCountdownResendPinStream(): void {
    const countdownStart = 20;
    this.resendEnabled = false;
    timer(0, 1000)
      .pipe(
        map(i => countdownStart - i),
        take(countdownStart + 1)
      )
      .subscribe({
        next: time => (this.timer = time),
        complete: () => (this.resendEnabled = true),
      });
  }
  public setUpForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  public onSubmit() {
    this.recoveryEmail = false;
    const formValue = this.form.value;
    console.log(formValue);
    this.setUpCountdownResendPinStream();
  }
}
