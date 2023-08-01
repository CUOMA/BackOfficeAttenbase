import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardQuestionComponent } from './dashboard-question.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardQuestionComponent,
  },
  {
    path: 'detalle',
    loadChildren: () =>
      import('./detail-question/detail-question.module').then(
        m => m.DetailQuestionModule
      ),
  },
  {
    path: 'crear-pregunta',
    loadChildren: () =>
      import('./create-question/dashboard-create-question.module').then(
        m => m.DashboardCreateQuestionModule
      ),
    data: {
      preload: false,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardQuestionRoutingModule { }
