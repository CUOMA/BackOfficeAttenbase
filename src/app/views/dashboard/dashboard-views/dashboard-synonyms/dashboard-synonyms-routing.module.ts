import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSynonymsComponent } from './dashboard-synonyms.component';

const routes: Routes = [{ path: '', component: DashboardSynonymsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardSynonymsRoutingModule {}
