import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'redirect-listado-de-preguntas',
    redirectTo: 'dashboard/listado-de-preguntas',
    // loadChildren: () =>
    //   import(
    //     '../../views/dashboard/dashboard-views/dashboard-question/dashboard-question.module'
    //   ).then(m => m.DashboardQuestionModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackArrowButtonRoutingModule {}
