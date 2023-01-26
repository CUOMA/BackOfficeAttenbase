import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardSynonymsRoutingModule } from './dashboard-synonyms-routing.module';
import { DashboardSynonymsComponent } from './dashboard-synonyms.component';

@NgModule({
  providers: [],
  declarations: [DashboardSynonymsComponent],
  imports: [CommonModule, DashboardSynonymsRoutingModule],
})
export class DashboardSynonymsModule {}
