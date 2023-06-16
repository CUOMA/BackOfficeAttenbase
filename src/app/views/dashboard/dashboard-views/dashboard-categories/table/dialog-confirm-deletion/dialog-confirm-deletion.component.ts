import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'bdc-bo-dialog-confirm-deletion',
  templateUrl: './dialog-confirm-deletion.component.html',
  imports: [SharedModule],
  standalone: true,
  styleUrls: ['./dialog-confirm-deletion.component.scss'],
})
export class DialogConfirmDeletionComponent {}
