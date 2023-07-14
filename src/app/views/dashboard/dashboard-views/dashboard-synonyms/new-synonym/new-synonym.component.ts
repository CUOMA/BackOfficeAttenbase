import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { SynonymousFacade } from '../dashboard-synonymous.facade';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';

export interface Synonym {
  name: string;
}
@Component({
  selector: 'bdc-bo-new-synonym',
  templateUrl: './new-synonym.component.html',
  styleUrls: ['./new-synonym.component.scss'],
})
export class NewSynonymComponent {
  protected addOnBlur = true;
  protected readonly separatorKeysCodes = [ENTER, COMMA] as const;
  protected synonyms: Synonym[] = [];
  protected form = this.form_builder.nonNullable.group({
    synonymName: new FormControl('', Validators.required),
    synonymList: new FormControl(this.synonyms, Validators.required),
  });

  constructor(
    private form_builder: FormBuilder,
    private synonymousFacade: SynonymousFacade,
    public router: Router,
    public alertService: AlertService
  ) {}

  protected add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.synonyms.push({ name: value });
    }
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
    if (!value) {
      this.remove(synonym);
      return;
    }
    const index = this.synonyms.indexOf(synonym);
    if (index >= 0) {
      this.synonyms[index].name = value;
    }
  }
  protected createNewSynonyms() {
    const formValue = {
      word: this.form.value.synonymName,
      synonyms: this.form.value.synonymList,
    };
    this.synonymousFacade.createSynonyms(formValue).subscribe({
      complete: () => {
        this.router.navigateByUrl('dashboard/sinonimos');
        this.alertService.openFromComponent({
          duration: 5000,
          data: {
            templateHTML: `Creaste un nuevo sinónimo.`,
          },
        });
      },
      error: error => {
        const isError = error.error.error.name;
        this.alertService.openFromComponent({
          duration: 5000,
          data: {
            templateHTML: `${isError}`,
          },
        });
      },
    });
  }
}
