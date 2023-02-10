import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'bdc-bo-dashboard',
  templateUrl: './dashboard-create-question.component.html',
  styleUrls: ['./dashboard-create-question.component.scss'],
})
export class DashboardCreateQuestionComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {
    const countdownStart = 4;
    const timer$ = timer(0, 1000).pipe(
      map(i => countdownStart - i),
      take(countdownStart + 1)
    );
  }
}
