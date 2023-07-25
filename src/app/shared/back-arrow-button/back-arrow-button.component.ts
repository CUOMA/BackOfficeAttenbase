import { Component, Input, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogUnsavedChangeComponent } from './dialog-unsaved-change/dialog-unsaved-change.component';

@Component({
  selector: 'bdc-bo-back-arrow-button',
  templateUrl: './back-arrow-button.component.html',
  styleUrls: ['./back-arrow-button.component.scss'],
})
export class BackArrowButtonComponent {
  @Input() public routeMap!: string;
  @Input() public showConfirmationModal = false;

  private dialog = inject(MatDialog);
  protected unsavedChanges() {
    this.dialog.open(DialogUnsavedChangeComponent);
  }
}
