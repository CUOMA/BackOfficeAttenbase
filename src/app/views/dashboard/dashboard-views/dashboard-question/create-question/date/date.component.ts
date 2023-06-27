import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'bdc-bo-date-component',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {
  protected form!: FormGroup;

  protected dateFrom!: Date | null;
  protected dateTo!: Date | null;
  protected minDateFrom: Date = new Date();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      dateFrom: [null, Validators.required],
      dateTo: [null, Validators.required],
      hourFrom: [null, Validators.required],
      // hourTo: [null, Validators.required],
    });
  }
  protected onDateFromChange(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    this.dateFrom = event.value;
  }
  protected onDateToChange(event: MatDatepickerInputEvent<Date>) {
    this.dateTo = event.value;
  }
}
