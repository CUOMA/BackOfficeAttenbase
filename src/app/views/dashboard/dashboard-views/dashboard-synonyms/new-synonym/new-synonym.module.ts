import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewSynonymComponent } from './new-synonym.component';
import { NewSynonymRoutingModule } from './new-synonym-routing.module';
import { SynonymousFacade } from '../dashboard-synonymous.facade';

@NgModule({
  providers: [SynonymousFacade],
  declarations: [NewSynonymComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, NewSynonymRoutingModule],
})
export class NewSynonymModule {}
