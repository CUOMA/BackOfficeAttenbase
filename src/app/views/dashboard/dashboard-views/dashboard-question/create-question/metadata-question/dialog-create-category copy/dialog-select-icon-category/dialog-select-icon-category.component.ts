import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatChipEditedEvent } from '@angular/material/chips';
import { Subcategory } from 'src/app/core/models/category';

@Component({
  selector: 'bdc-bo-dialog-select-icon-category',
  templateUrl: './dialog-select-icon-category.component.html',
  styleUrls: ['./dialog-select-icon-category.component.scss'],
})
export class DialogSelectIconCategoryComponent implements OnInit {
  protected form!: any;
  protected addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  protected subcategories: Subcategory[] = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setUpForm();
  }
  protected setUpForm() {
    this.form = this.fb.group({
      category: ['', [Validators.required]],
      subcategories: [, [Validators.required]],
      icon: [''],
    });
  }
  protected createCategory() {
    console.log(this.form.value);
  }
  protected add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.subcategories.push({ name: value });
    }
    event.chipInput!.clear();
  }

  protected remove(subcategory: Subcategory): void {
    const index = this.subcategories.indexOf(subcategory);
    if (index >= 0) {
      this.subcategories.splice(index, 1);
    }
  }
  protected edit(subcategory: Subcategory, event: MatChipEditedEvent) {
    const value = event.value.trim();
    if (!value) {
      this.remove(subcategory);
      return;
    }
    const index = this.subcategories.indexOf(subcategory);
    if (index >= 0) {
      this.subcategories[index].name = value;
    }
  }
}
