import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailQuestionComponent } from './detail-question.component';

const routes: Routes = [
  {
    path: '',
    component: DetailQuestionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardQuestionRoutingModule { }
