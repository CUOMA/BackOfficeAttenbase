import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCreateQuestionComponent } from './dashboard-create-question.component';

const routes: Routes = [{ path: '', component: DashboardCreateQuestionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardCreateQuestionRoutingModule {}
