import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { profileFacade } from './dashboard-profile.facade';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bdc-bo-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.scss'],
})
export class DashboardProfileComponent implements OnInit {
  protected profile$ = this.profileFacade.selectProfile();
  protected isReadOnly = true;
  protected hide = true;
  protected form: FormGroup = this.fb.nonNullable.group({
    firstName: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.pattern('^(?=.*?[A-Z])(?=.*[0-9])(?=.*?[@#%$!&*])[a-zA-Z0-9@#%$!&*]{8,50}$'),
      ],
    ],
  });

  constructor(private fb: FormBuilder, private profileFacade: profileFacade) { }
  public ngOnInit(): void {
    this.profileFacade.dispachProfile();
    this.initFormValue();
  }
  protected initFormValue() {
    this.profile$
      .pipe(
        map(profile => {
          this.form.get('firstName')?.setValue(profile.first_name);
          this.form.get('lastName')?.setValue(profile.last_name);
          this.form.get('email')?.setValue(profile.email);
        })
      )
      .subscribe();
  }
  protected editProfile() {
    this.isReadOnly = false;
  }
  protected noChangeEdit() {
    this.isReadOnly = true;
  }
  protected togglePasswordVisibility(event: Event): void {
    event?.stopPropagation();
    this.hide = !this.hide;
  }
  protected sendForm() {
    const form = {
      first_name: this.form.value.firstName,
      last_name: this.form.value.lastName,
      email: this.form.value.email,
      password: this.form.value.password,
      password_confirmation: this.form.value.password,
    };
    this.profileFacade.postEditProfile(form).subscribe();
  }
}
