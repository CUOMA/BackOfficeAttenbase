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
        path: 'perfil',
        loadChildren: () =>
          import('./dashboard-views/dashboard-profile/dashboard-profile.module').then(
            m => m.DashboardProfileModule
          ),
      },
      {
        path: 'metricas',
        loadChildren: () =>
          import('./dashboard-views/dashboard-metrics/dashboard-metrics.module').then(
            m => m.DashboardMetricsModule
          ),
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./dashboard-views/dashboard-users/dashboard-users.module').then(
            m => m.DashboardUsersModule
          ),
      },
      {
        path: 'alerta',
        loadChildren: () =>
          import('./dashboard-views/dashboard-alert/dashboard-alert.module').then(
            m => m.DashboardAlertModule
          ),
      },
      {
        path: '**',
        redirectTo: 'listado-de-preguntas',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
