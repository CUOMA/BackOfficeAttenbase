import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatChipEditedEvent } from '@angular/material/chips';
import { Subcategory } from 'src/app/core/models/category';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesFacade } from '../../../../dashboard-categories/dashboard-categories.facade';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'bdc-bo-dialog-create-category',
  templateUrl: './dialog-create-category.component.html',
  styleUrls: ['./dialog-create-category.component.scss'],
})
export class DialogCreateCategoryComponent implements OnInit {
  protected form!: FormGroup;
  protected addOnBlur = true;
  protected nameIcon = '';
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  protected showSelecIcon = false;
  protected subcategories: Subcategory[] = [];
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private categoriesFacade: CategoriesFacade,
    public router: Router,
    public alertService: AlertService
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
      icon: this.nameIcon,
      subcategories: this.form.value.subcategories,
    };
    this.categoriesFacade.postNewCategory(formValue).subscribe({
      complete: () => {
        this.alertService.openFromComponent({
          duration: 5000,
          data: {
            templateHTML: `Creaste una nueva Categoria`,
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

  protected showSelectIconCategory() {
    this.showSelecIcon = !this.showSelecIcon;
  }

  protected selectedIcon(icon: string) {
    this.form.patchValue({
      icon,
    });
    this.nameIcon = icon;
    this.showSelectIconCategory();
  }
}
