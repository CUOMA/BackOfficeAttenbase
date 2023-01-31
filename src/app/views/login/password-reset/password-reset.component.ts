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
  selector: 'bdc-bo-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss', '../../../../assets/sass/layout/entry.scss'],
})
export class RecoverPasswordComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  public form!: FormGroup;
  public hide: boolean = true;
  color!: 'primary';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.setUpForm();
  }

  public setUpForm() {
    this.form = this.fb.group({
      password: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
    });
  }

  public onSubmit() {
    const formValue = this.form.value;
    console.log(formValue);
  }
}
