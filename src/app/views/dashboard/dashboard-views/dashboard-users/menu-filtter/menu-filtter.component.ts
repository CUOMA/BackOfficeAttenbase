import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'bdc-bo-menu-filtter',
  templateUrl: './menu-filtter.component.html',
  styleUrls: ['./menu-filtter.component.scss'],
})
export class MenuFiltterComponent {
  rols = new FormControl('');
  rolsList: any[] = [
    { value: 'Todos', selected: false },
    { value: 'Administrador/a', selected: false },
    { value: 'Propietario/a', selected: false },
    { value: 'Moderador/a', selected: false },
    { value: 'Editor/a', selected: false },
    { value: 'Agente', selected: false },
    // 'Todos',
    // 'Administrador/a',
    // 'Propietario/a',
    // 'Moderador/a',
    // 'Editor/a',
    // 'Agente',
  ];
  clients = new FormControl('');
  clientsList: any[] = [
    { value: 'movistar', selected: false },
    { value: 'telefonica', selected: false },
    { value: 'telefonica individuos', selected: false },
    { value: 'telefonica empresas', selected: false },
  ];

  // clientsGroup = this._formBuilder.group({
  //   movistar: false,
  //   telefonica: false,
  //   telefonicaIndividuos: false,
  // });
  // constructor(private _formBuilder: FormBuilder) {}

  sendFiltters() {
    alert('se enviaron los filtros al padre');
  }
}
