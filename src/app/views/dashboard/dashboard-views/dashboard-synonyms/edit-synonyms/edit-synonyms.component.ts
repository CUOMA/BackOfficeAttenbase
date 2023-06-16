import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SynonymousFacade } from '../dashboard-synonymous.facade';

export interface Synonym {
  name: string;
}

@Component({
  selector: 'bdc-bo-edit-synonyms',
  templateUrl: './edit-synonyms.component.html',
  styleUrls: ['./edit-synonyms.component.scss'],
})
export class EditSynonymsComponent implements OnInit {
  protected addOnBlur = true;
  protected id!: number;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  protected synonymId$!: Observable<any>;
  synonyms: Synonym[] = [
  ];
  constructor(
    private fb: FormBuilder,
    public store: Store,
    public router: Router,
    public route: ActivatedRoute,
    public synonymsFacade: SynonymousFacade
  ) {}
  public ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.synonymId$ = this.synonymsFacade.detailSynonym(this.id);
  }
  protected form = this.fb.nonNullable.group({
    synonymName: new FormControl('', Validators.required),
    synonymList: new FormControl('', Validators.required),
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
