import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export interface AlertData {
  templateHTML: string;
}

@Component({
  selector: 'bdc-bo-alert',
  templateUrl: './alert.component.html',
  imports: [MatIconModule, MatButtonModule],
  standalone: true,
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  protected data = inject(MAT_SNACK_BAR_DATA);
  private snackBarRef = inject(MatSnackBarRef);

  protected handleManualCloseAlert(): void {
    this.snackBarRef.dismissWithAction();
  }
}
