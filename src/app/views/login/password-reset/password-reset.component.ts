import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { RecoveyPassword } from '../../../core/models/recovery-password';
import { PasswordResetService } from './password-reset.service';

@Component({
  selector: 'bdc-bo-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss', '../../../../assets/sass/layout/entry.scss'],
})
export class PasswordResetComponent implements OnInit {
  protected emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  protected form!: FormGroup;
  protected hide: boolean = true;
  protected color!: 'primary';
  protected changePassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private passwordResetService: PasswordResetService
  ) {}

  ngOnInit(): void {
    this.setUpForm();
    console.log(this.activatedRoute.snapshot.queryParams.email);
  }

  public setUpForm() {
    this.form = this.fb.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.pattern('^(?=.*?[A-Z])(?=.*[0-9])(?=.*?[@#%$!&*])[a-zA-Z0-9@#%$!&*]{8,50}$'),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.pattern('^(?=.*?[A-Z])(?=.*[0-9])(?=.*?[@#%$!&*])[a-zA-Z0-9@#%$!&*]{8,50}$'),
          ],
        ],
      },
      { validators: passwordMatchValidator }
    );
  }

  public onSubmit() {
    const payload: RecoveyPassword = {
      email: this.activatedRoute.snapshot.queryParams.email,
      token: this.activatedRoute.snapshot.queryParams.token,
      password_confirmation: this.form.value.confirmPassword,
      password: this.form.value.password,
    };
    this.passwordResetService.recoveryPasword(payload).subscribe();
    this.changePassword = true;
  }
}

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  return password === confirmPassword ? null : { passwordMismatch: true };
};
