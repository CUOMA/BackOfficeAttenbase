import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'bdc-bo-date-component',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent {
  protected dateFrom!: Date | null;
  protected dateTo!: Date | null;
  protected minDateFrom: Date = new Date();

  protected onDateFromChange(event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    this.dateFrom = event.value;
  }
  protected onDateToChange(event: MatDatepickerInputEvent<Date>) {
    this.dateTo = event.value;
  }
}
