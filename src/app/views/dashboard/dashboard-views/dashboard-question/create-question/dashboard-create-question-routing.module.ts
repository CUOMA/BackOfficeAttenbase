import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCreateQuestionComponent } from './dashboard-create-question.component';

const routes: Routes = [
  { path: '', component: DashboardCreateQuestionComponent },
  {
    path: 'vista-previa',
    loadChildren: () =>
      import('./question-summary/question-summary.module').then(m => m.QuestionSummaryModule),
    data: {
      preload: false,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardCreateQuestionRoutingModule {}
