import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { alertDeleteComponent } from './alert-delete/alert-delete.component';
import { DashboardSynonymsRoutingModule } from './dashboard-synonyms-routing.module';
import { DashboardSynonymsComponent } from './dashboard-synonyms.component';
import { SynonymFacadeService } from './dashboard-synonyms.facade.service';

@NgModule({
  providers: [SynonymFacadeService],
  declarations: [DashboardSynonymsComponent, alertDeleteComponent],
  imports: [CommonModule, DashboardSynonymsRoutingModule, SharedModule],
})
export class DashboardSynonymsModule {}
