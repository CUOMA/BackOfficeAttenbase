import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'listado-de-preguntas',
        loadChildren: () =>
          import('./dashboard-views/dashboard-question/dashboard-question.module').then(
            m => m.DashboardQuestionModule
          ),
        data: {
          preload: false,
        },
      },
      {
        path: 'categorias',
        loadChildren: () =>
          import('./dashboard-views/dashboard-categories/dashboard-categories.module').then(
            m => m.DashboardCategoriesModule
          ),
        data: {
          preload: false,
        },
      },
      {
        path: 'sinonimos',
        loadChildren: () =>
          import('./dashboard-views/dashboard-synonyms/dashboard-synonyms.module').then(
            m => m.DashboardSynonymsModule
          ),
      },
      {
        path: '**',
        redirectTo: 'crear-pregunta',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
