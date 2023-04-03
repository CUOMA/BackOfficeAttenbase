import { Component } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

export interface Synonym {
  name: string;
}

@Component({
  selector: 'bdc-bo-edit-synonyms',
  templateUrl: './edit-synonyms.component.html',
  styleUrls: ['./edit-synonyms.component.scss'],
})
export class EditSynonymsComponent {
  constructor(private form_builder: FormBuilder) {}

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  synonyms: Synonym[] = [
    { name: 'no hay señal' },
    { name: 'no funciona movistar' },
    { name: 'no anda el telefono' },
  ];

  protected form = this.form_builder.nonNullable.group({
    synonymName: new FormControl('Problemas de Señal', Validators.required),
    synonymList: new FormControl(this.synonyms.values, Validators.required),
  });

  protected add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our synonym
    if (value) {
      this.synonyms.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  protected remove(synonym: Synonym): void {
    const index = this.synonyms.indexOf(synonym);

    if (index >= 0) {
      this.synonyms.splice(index, 1);
    }
  }

  protected edit(synonym: Synonym, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(synonym);
      return;
    }

    // Edit existing fruit
    const index = this.synonyms.indexOf(synonym);
    if (index >= 0) {
      this.synonyms[index].name = value;
    }
  }
  protected sendSynonymEdition() {
    alert(`{
      origen: ${this.form.value.synonymName},
      sinonimos: ${this.form.value.synonymList},
    }`);
  }
}
