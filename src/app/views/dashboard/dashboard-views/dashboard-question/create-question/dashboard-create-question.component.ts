import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardCreateQuestionFacade } from './dashboard-create-question.facade';
import { MatDialog } from '@angular/material/dialog';
import { DialogUnsavedChangeComponent } from './dialog-unsaved-change/dialog-unsaved-change.component';

@Component({
  providers: [DashboardCreateQuestionFacade],
  selector: 'bdc-bo-dashboard-create-question',
  templateUrl: './dashboard-create-question.component.html',
  styleUrls: ['./dashboard-create-question.component.scss'],
})
export class DashboardCreateQuestionComponent implements OnInit {
  protected title$!: Observable<string>;
  private createQuestionFacade = inject(DashboardCreateQuestionFacade);
  private dialog = inject(MatDialog);

  ngOnInit(): void {
    this.title$ = this.createQuestionFacade.titleQuestion;
  }

  protected unsavedChanges() {
    this.dialog.open(DialogUnsavedChangeComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
}
