import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { LoginFacade } from './login.facade';
import { LoginPayload } from '../../core/models/login';
import { MatIconButton } from '@angular/material/button';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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
      [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$')],
    ],
    rememberEmail: [false],
  });
  protected isLogginIn$!: Observable<boolean>;
  private destroy$ = new Subject<void>();
  public hide = true;

  constructor(
    private loginFacade: LoginFacade,
    private fb: FormBuilder,
    private router: Router,
    sanitizer: DomSanitizer,
    matIconRegister: MatIconRegistry
  ) {
    matIconRegister.addSvgIcon(
      'eyeText',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/eye-txt.svg')
    );
  }

  public ngOnInit(): void {
    this.getEmailFromStorage();
    this.loginFacade.isAuthenticated
      .pipe(finalize(() => this.router.navigateByUrl('dashboard/listado-de-preguntas')))
      .subscribe();
    this.isLogginIn$ = this.loginFacade.isLogginIn.pipe(takeUntil(this.destroy$));
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected handleSubmitLogin(): void {
    const formValue = this.form.value;
    this.loginFacade.submitLogin(formValue);
    this.form.get('rememberEmail')!.value
      ? localStorage.setItem('rememberEmail', this.form.get('username')!.value!)
      : localStorage.removeItem('rememberEmail');
    console.log(formValue);
  }

  private getEmailFromStorage(): void {
    const localEmail = localStorage.getItem('rememberEmail');
    if (localEmail) {
      this.form.get('username')!.setValue(localEmail);
    }
  }
}
