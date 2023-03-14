import { Component, Input } from '@angular/core';
import { Pages } from 'src/app/core/models/pages';

@Component({
  selector: 'bdc-bo-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent  {
  @Input() isOpen!: boolean;
 
  public pages: Pages[] = [
    { label: 'Preguntas', relativePath: 'listado-de-preguntas', icon: 'list-question', data: 356 },
    { label: 'Categorías', relativePath: 'categorias', icon: 'categories', data: 356 },
    { label: 'Sinónimos', relativePath: 'sinonimos', icon: 'synonymous', data: 3514 },
    { label: 'Métricas', relativePath: 'metricas', icon: 'segment' },
    { label: 'Usuarios', relativePath: 'usuarios', icon: 'users' },
    { label: 'Perfil', relativePath: 'perfil', icon: 'profile' },
    { label: 'Alertas', relativePath: 'alerta', icon: 'bell', data: 3 },
  ];
}
