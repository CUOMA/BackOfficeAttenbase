import { Component } from '@angular/core';
import { CategoriesFacade } from '../dashboard-categories.facade';

@Component({
  selector: 'bdc-bo-dialog-select-icon',
  templateUrl: './dialog-select-icon.component.html',
  styleUrls: ['dialog-select-icon.component.scss'],
})
export class DialogSelectIconComponent {
  private icon = '';
  constructor(public categoriesFacade: CategoriesFacade) {}
  protected selectedIcon(icon: string) {
    this.icon = icon;
  }
  protected handleSelectIcon(): void {
    this.categoriesFacade.selectedIcon.next(this.icon);
  }
}
