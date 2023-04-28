import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatChipEditedEvent } from '@angular/material/chips';
import { Subcategory } from 'src/app/core/models/category';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesFacade } from '../dashboard-categories.facade';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { DialogSelectIconComponent } from '../dialog-select-icon/dialog-select-icon.component.component';

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
    public categoriesFacade: CategoriesFacade,
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
      icon: 'rocket_launch',
      subcategories: this.form.value.subcategories,
    };
    this.categoriesFacade.postNewCategory(formValue).subscribe({
      complete: () => {
        this.router.navigateByUrl('dashboard/categorias');
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
            templateHTML: `No se creo la categoria: ${isError}`,
          },
        });
        this.router.navigateByUrl('dashboard/categorias');
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
  protected dialogSelectIconCategory() {
    this.dialog.open(DialogSelectIconComponent, {
      width: '680px',
    });
  }
}
