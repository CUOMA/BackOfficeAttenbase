import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'bdc-bo-unsaved-changes',
  templateUrl: './dialog-unsaved-change.component.html',
  styleUrls: ['./dialog-unsaved-change.component.scss'],
})
export class DialogUnsavedChangeComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogUnsavedChangeComponent) {}
}
