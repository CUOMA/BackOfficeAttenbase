import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardSynonymsRoutingModule } from './dashboard-synonyms-routing.module';
import { DashboardSynonymsComponent } from './dashboard-synonyms.component';
import { SynonymsFacade } from './dashboard-synonyms.facade';
import { ScrollSynonymsComponent } from './scroll-synonyms/scroll-synonyms.component';

@NgModule({
  providers: [SynonymsFacade],
  declarations: [DashboardSynonymsComponent, ScrollSynonymsComponent],
  imports: [CommonModule, DashboardSynonymsRoutingModule, SharedModule],
})
export class DashboardSynonymsModule {}
