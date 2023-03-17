import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditSynonymsComponent } from './edit-synonyms.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditSynonymsRoutingModule } from './edit-synonyms-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditSynonymsComponent],
  imports: [CommonModule, EditSynonymsRoutingModule, SharedModule, ReactiveFormsModule],
})
export class EditSynonymsModule {}
