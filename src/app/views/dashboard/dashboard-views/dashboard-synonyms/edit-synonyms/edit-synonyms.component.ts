import { Component, OnInit, AfterViewInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SynonymousFacade } from '../dashboard-synonymous.facade';
import { tap } from 'rxjs/internal/operators/tap';

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
  protected synonyms: Synonym[] = [];
  form: FormGroup = this.fb.group({
    synonymName: ['', Validators.required],
    synonymList: this.fb.array([], Validators.required),
  });

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
    this.synonymId$ = this.synonymsFacade.detailSynonym(this.id).pipe(
      tap(synonym => {
        this.form.patchValue({
          synonymName: synonym.word,
          synonymList: synonym.synonyms,
        });
        tap(this.form.value.synonymList);
      })
    );
    this.synonymId$.subscribe(console.log);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      const synonymList = this.form.get('synonymList') as FormArray;
      synonymList.push(new FormControl(value));
    }
    event.chipInput!.clear();
  }

  remove(synonym: string): void {
    const synonymList = this.form.get('synonymList') as FormArray;
    const index = synonymList.value.indexOf(synonym);

    if (index >= 0) {
      synonymList.removeAt(index);
    }
  }

  edit(synonym: string, event: MatChipEditedEvent): void {
    const value = event.value.trim();
    if (!value) {
      this.remove(synonym);
      return;
    }
    const synonymList = this.form.get('synonymList') as FormArray;
    const index = synonymList.value.indexOf(synonym);
    if (index >= 0) {
      synonymList.at(index).setValue(value);
    }
  }
  sendSynonymEdition() {
    alert(`{
      origen: ${this.form.value.synonymName},
      sinonimos: ${this.form.value.synonymList},
    }`);
  }
}
