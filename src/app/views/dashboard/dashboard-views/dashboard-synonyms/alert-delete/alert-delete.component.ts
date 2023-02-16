import { Component, OnInit, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { SynonymFacadeService } from '../dashboard-synonyms.facade.service';

@Component({
  selector: 'bdc-bo-alert',
  templateUrl: './alert-delete.component.html',
  styles: [
    `
      :host {
        display: flex;
        font-size: 14px;
        .action {
          display: flex;
          align-items: center;
          .mat-icon {
            font-size: 14px;
            padding-top: 10px;
          }
          span {
            color: #8bb4b4;
            font-weight: 500;
          }
        }
      }
    `,
  ],
})
export class alertDeleteComponent {
  constructor(private synonymFacadeService: SynonymFacadeService) {}
  item: string = this.synonymFacadeService.lastItemDelete;
  snackBarRef = inject(MatSnackBarRef);
}
