import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSynonymComponent } from './new-synonym.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewSynonymRoutingModule } from './new-synonym-routing.module';

@NgModule({
  declarations: [NewSynonymComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, NewSynonymRoutingModule],
})
export class NewSynonymModule {}
