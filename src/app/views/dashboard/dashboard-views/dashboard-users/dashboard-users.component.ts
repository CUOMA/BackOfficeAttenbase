import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'bdc-bo-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.scss'],
})
export class DashboardUsersComponent implements AfterViewInit {
  protected displayedColumns: string[] = [
    'userName',
    'userEmail',
    'lastLogin',
    'userClients',
    'userRol',
    'seeMore',
  ];

  ELEMENT_DATA: Registro[] = [
    new Registro(
      'santiago martinez',
      'santiago@cuoma',
      '2022/03/01, 10:00am',
      ['Movistar', 'telefonica', 'Personal'],
      'Owner'
    ),
    new Registro(
      'adrián ojeda',
      'aojeda@cuoma',
      '2022/03/01, 10:00am',
      ['Movistar', 'telefonica', 'Personal'],
      'Administrador'
    ),
    new Registro(
      'federico gimenez',
      'federicgimenez@gmail.com',
      '2022/12/06, 10:00am',
      ['Movistar', 'telefonica', 'Personal'],
      'Moderador'
    ),
    new Registro(
      'gustavo gilevensxchi',
      'gusti@gmail.com',
      '2022/08/09, 10:00am',
      ['Movistar', 'Claro', 'telefonica'],
      'Administrador'
    ),
    new Registro(
      'florencia sosa',
      'florsosa@gmail.com',
      '2022/11/03, 10:00am',
      ['Movistar', 'Twenty', 'telefonica'],
      'Administrador'
    ),
    new Registro(
      'natalia morello',
      'natumo@gmail.com',
      '2022/06/05, 10:00am',
      ['Movistar', 'Mercadolibre', 'Centralpark'],
      'Administrador'
    ),
    new Registro(
      'natalia morello',
      'natumo@gmail.com',
      '2022/06/05, 10:00am',
      ['Movistar', 'Mercadolibre', 'Centralpark'],
      'Administrador'
    ),
    new Registro(
      'natalia morello',
      'natumo@gmail.com',
      '2022/06/05, 10:00am',
      ['Movistar', 'Mercadolibre', 'Centralpark'],
      'Administrador'
    ),
    new Registro(
      'natalia morello',
      'natumo@gmail.com',
      '2022/06/05, 10:00am',
      ['Movistar', 'Mercadolibre', 'Centralpark'],
      'Administrador'
    ),
    new Registro(
      'natalia morello',
      'natumo@gmail.com',
      '2022/06/05, 10:00am',
      ['Movistar', 'Mercadolibre', 'Centralpark'],
      'Administrador'
    ),
    new Registro(
      'natalia morello',
      'natumo@gmail.com',
      '2022/06/05, 10:00am',
      ['Movistar', 'Mercadolibre', 'Centralpark'],
      'Administrador'
    ),
  ];

  protected showFirstLastButtons: boolean = true;
  protected disabled: boolean = false;
  protected pageIndex: number = 0;
  protected length: number = this.ELEMENT_DATA.length;
  protected pageSize: number = 10;
  protected openMenu: boolean = false;

  dataSource = new MatTableDataSource<Registro>(this.ELEMENT_DATA);
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private intl: MatPaginatorIntl) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const numberPages = Math.ceil(length / pageSize);
      const startIndex = page;
      return `Página ${startIndex + 1} de ${numberPages}`;
    };
    this.intl.previousPageLabel = 'Página anterior';
    this.intl.nextPageLabel = 'Página siguiente';
  }
  protected deleteItem() {
    alert('se dehabilitara un cliente');
  }
}
export class Registro {
  constructor(
    public userName: string,
    public userEmail: string,
    public lastLogin: string,
    public userClients: any,
    public userRol: string
  ) {}
}
