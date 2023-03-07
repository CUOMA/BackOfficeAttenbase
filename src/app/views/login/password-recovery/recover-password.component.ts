import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { throwError, timer } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { RecoverPasswordService } from './recover-password.service';

@Component({
  selector: 'bdc-bo-recovery-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss', '../../../../assets/sass/layout/entry.scss'],
})
export class RecoverPasswordComponent implements OnInit {
  protected emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  protected form!: FormGroup;
  protected recoveryEmail!: boolean;
  protected resendEnabled = true;
  protected timer!: number;
  protected formValue!: any;

  constructor(private fb: FormBuilder, private recoverPasswordService: RecoverPasswordService) {}

  ngOnInit(): void {
    this.recoveryEmail = true;
    this.setUpForm();
  }

  public resendPin(): void {
    this.setUpCountdownResendPinStream();
    this.postRecoverypassword(this.formValue);
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
    this.formValue = this.form.value;
    this.postRecoverypassword(this.formValue);
    this.setUpCountdownResendPinStream();
  }

  public postRecoverypassword(form: { email: string }) {
    this.recoverPasswordService
      .recoveryPasword(form)
      .pipe(
        tap(_ => (this.recoveryEmail = false)),
        catchError((res: HttpErrorResponse) => {
          if (res.status === 400) {
            this.form.get('email')?.setErrors({
              nonExistantEmail: res.error.error,
            });
          }

          return throwError(res);
        })
      )
      .subscribe();
  }
}
