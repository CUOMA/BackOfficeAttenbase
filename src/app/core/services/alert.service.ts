import { Injectable, inject } from '@angular/core';
import {
  AlertData,
  AlertComponent,
} from '../../views/dashboard/dashboard-views/dashboard-synonyms/alert/alert.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MaterialModule } from '../modules/material.module';

@Injectable({
  // providedIn: 'root',
  providedIn: MaterialModule,
})
export class AlertService {
  private snackBar = inject(MatSnackBar);

  public openFromComponent(data: MatSnackBarConfig<AlertData>): void {
    this.snackBar.openFromComponent<AlertComponent, AlertData>(AlertComponent, data);
  }
}
