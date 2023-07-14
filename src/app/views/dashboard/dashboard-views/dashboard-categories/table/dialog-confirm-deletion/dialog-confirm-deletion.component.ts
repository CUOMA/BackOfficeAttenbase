import { Component, Inject, inject, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesFacade } from '../../dashboard-categories.facade';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'bdc-bo-dialog-confirm-deletion',
  templateUrl: './dialog-confirm-deletion.component.html',
  imports: [SharedModule],
  standalone: true,
  styleUrls: ['./dialog-confirm-deletion.component.scss'],
})
export class DialogConfirmDeletionComponent {
  constructor(
    private categoriesFacade: CategoriesFacade,
    @Inject(MAT_DIALOG_DATA) public id: number
  ) {}
  protected forceDelete() {
    const id = +this.id;
    this.categoriesFacade.forceDeleteCategory(id);
  }
}
