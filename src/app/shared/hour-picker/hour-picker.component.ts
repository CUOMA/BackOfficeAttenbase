import { Component, Input, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'bdc-bo-hour-picker',
  templateUrl: './hour-picker.component.html',
  styleUrls: ['./hour-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HourPickerComponent),
      multi: true,
    },
  ],
})
export class HourPickerComponent implements ControlValueAccessor {
  @Input() disabled = false;
  value!: string;
  onChange!: (value: string) => void;
  onTouched!: () => void;

  protected readonly periodControl = new FormControl({ value: '', disabled: false });
  writeValue(value: string): void {
    this.value = value;
  }

  protected handleChange(e: any): void {
    this.onChange(e.target.value);
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
