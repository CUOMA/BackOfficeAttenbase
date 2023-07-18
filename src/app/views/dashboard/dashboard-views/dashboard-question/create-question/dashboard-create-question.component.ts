import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { DashboardCreateQuestionFacade } from './dashboard-create-question.facade';

@Component({
  selector: 'bdc-bo-dashboard-create-question',
  templateUrl: './dashboard-create-question.component.html',
  styleUrls: ['./dashboard-create-question.component.scss'],
})
export class DashboardCreateQuestionComponent implements OnInit {
  private facade = inject(DashboardCreateQuestionFacade);
  title$!: Observable<string>;

  ngOnInit(): void {
    this.title$ = this.facade.title;
  }
}
