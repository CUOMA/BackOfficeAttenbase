import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { finalize, takeUntil, catchError } from 'rxjs/operators';
import { LoginPayload } from '../../core/models/login';
import { LoginFacade } from './login.facade';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { selectIsLogginError } from '../../store/selectors/authentication.selectors';

@Component({
  selector: 'bdc-bo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../../assets/sass/layout/entry.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  @Output() login = new EventEmitter<LoginPayload>();
  public clicked = false;
  public form = this.fb.nonNullable.group({
    username: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern('^(?=.*?[A-Z])(?=.*[0-9])(?=.*?[@#%$!&*])[a-zA-Z0-9@#%$!&*]{8,50}$'),
      ],
    ],
    rememberEmail: [false],
  });
  protected $loginError!: Observable<boolean>;
  protected isLogginIn$!: Observable<boolean>;
  private destroy$ = new Subject<void>();
  public hide = true;
  constructor(
    private loginFacade: LoginFacade,
    private fb: FormBuilder,
    private router: Router,
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.getEmailFromStorage();
    this.loginFacade.isAuthenticated
      .pipe(finalize(() => this.router.navigateByUrl('dashboard/listado-de-preguntas')))
      .subscribe();
    this.isLogginIn$ = this.loginFacade.isLogginIn.pipe(takeUntil(this.destroy$));
    this.$loginError = this.store.select(selectIsLogginError);
    this.validateForm();
  }

  private validateForm() {
    this.$loginError.subscribe({
      next: error => {
        this.form.get('username')?.setErrors({
          nonExistantEmail: error ? true : null,
        });
        this.form.get('password')?.setErrors({
          nonExistantEmail: error ? true : null,
        });
        console.log(error);
      },
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected togglePasswordVisibility(event: Event): void {
    event?.stopPropagation();
    this.hide = !this.hide;
  }

  protected handleSubmitLogin(): void {
    const formValue = this.form.value;
    this.loginFacade.submitLogin(formValue);
    this.form.get('rememberEmail')!.value
      ? localStorage.setItem('rememberEmail', this.form.get('username')!.value!)
      : localStorage.removeItem('rememberEmail');
  }

  private getEmailFromStorage(): void {
    const localEmail = localStorage.getItem('rememberEmail');
    if (localEmail) {
      this.form.get('username')!.setValue(localEmail);
    }
  }
}
