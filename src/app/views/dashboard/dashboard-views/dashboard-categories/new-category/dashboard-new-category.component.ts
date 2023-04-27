import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatChipEditedEvent } from '@angular/material/chips';
import { Subcategory } from 'src/app/core/models/category';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesFacade } from '../dashboard-categories.facade';

@Component({
  selector: 'bdc-bo-dashboard-new-category',
  templateUrl: './dashboard-new-category.component.html',
  styleUrls: ['./dashboard-new-category.component.scss'],
})
export class DashboardNewCategoryComponent implements OnInit {
  protected form!: any;
  protected addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  protected subcategories: Subcategory[] = [];
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public categoriesFacade: CategoriesFacade
  ) {}

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
    const formValue = {
      name: this.form.value.category,
      slug: this.form.value.category,
      icon: this.form.value.icon,
      subcategories: this.form.value.subcategories,
    };
    this.categoriesFacade.postNewCategory(formValue);
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
  protected dialogSelectIconCategory() {
    // this.dialog.open(DialogSelectIconCategoryComponent, {
    //   width: '490px',
    // });
  }
}
