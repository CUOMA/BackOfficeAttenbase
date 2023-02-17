import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardSynonymsRoutingModule } from './dashboard-synonyms-routing.module';
import { DashboardSynonymsComponent } from './dashboard-synonyms.component';
import { SynonymsFacade } from './dashboard-synonyms.facade';

@NgModule({
  providers: [SynonymsFacade],
  declarations: [DashboardSynonymsComponent],
  imports: [CommonModule, DashboardSynonymsRoutingModule, SharedModule],
})
export class DashboardSynonymsModule {}
