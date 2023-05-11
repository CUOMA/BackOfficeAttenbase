import { Component, Input } from '@angular/core';

@Component({
  selector: 'bdc-bo-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
})
export class EmptyStateComponent {
  @Input() emptyStateData!: any;
  public emptyStateObject = {
    icon: 'empty-state-1',
    title: 'Crea una nueva categoria',
    paragraph: 'Las categorías ayudarán a organizar el contenido en tu plataforma.',
  };
}
