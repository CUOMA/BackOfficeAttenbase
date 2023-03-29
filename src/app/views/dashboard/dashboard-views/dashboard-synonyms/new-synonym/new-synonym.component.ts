import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

export interface Synonym {
  name: string;
}
@Component({
  selector: 'bdc-bo-new-synonym',
  templateUrl: './new-synonym.component.html',
  styleUrls: ['./new-synonym.component.scss'],
})
export class NewSynonymComponent {
  constructor(private form_builder: FormBuilder) {}

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  synonyms: Synonym[] = [];

  protected form = this.form_builder.nonNullable.group({
    synonymName: ['', Validators.required],
    synonymList: [''],
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
    alert('se edito el sinonimo');
  }
}
