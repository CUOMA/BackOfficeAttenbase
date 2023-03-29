import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSynonymsComponent } from './dashboard-synonyms.component';

const routes: Routes = [
  { path: '', component: DashboardSynonymsComponent },
  {
    path: 'editar-sinonimo',
    loadChildren: () =>
      import('./edit-synonyms/edit-synonyms.module').then(m => m.EditSynonymsModule),
    data: {
      preload: false,
    },
  },
  {
    path: 'crear-sinonimo',
    loadChildren: () => import('./new-synonym/new-synonym.module').then(m => m.NewSynonymModule),
    data: {
      preload: false,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardSynonymsRoutingModule {}
