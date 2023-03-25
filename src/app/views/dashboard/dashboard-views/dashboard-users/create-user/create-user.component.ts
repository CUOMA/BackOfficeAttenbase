import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'bdc-bo-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent {
  constructor(private fb: FormBuilder) {}

  public hide = true;

  public form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
    useradress: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
    useremail: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern('^(?=.*?[A-Z])(?=.*[0-9])(?=.*?[@#%$!&*])[a-zA-Z0-9@#%$!&*]{8,50}$'),
      ],
    ],
  });
  protected togglePasswordVisibility(event: Event): void {
    event?.stopPropagation();
    this.hide = !this.hide;
  }
  protected handleSubmitLogin(): void {
    const formValue = this.form.value;
    console.log(formValue);
  }
  protected alertSaveUser(): void {
    alert('usuario guardado');
  }
}
