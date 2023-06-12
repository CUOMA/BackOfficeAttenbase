import { Component, Input } from '@angular/core';

export interface emptyStateModel {
  src: string;
  title: string;
  paragraph: string;
}
@Component({
  selector: 'bdc-bo-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
})
export class EmptyStateComponent {
  @Input() emptyStateData!: emptyStateModel;
}
