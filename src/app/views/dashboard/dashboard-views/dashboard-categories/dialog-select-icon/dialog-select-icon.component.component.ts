import { Component } from '@angular/core';

@Component({
  selector: 'bdc-bo-dialog-select-icon',
  templateUrl: './dialog-select-icon.component.html',
  styleUrls: ['dialog-select-icon.component.scss'],
})
export class DialogSelectIconComponent {
  protected selectedIcon(icon: string) {
    console.log(icon);
  }
}
