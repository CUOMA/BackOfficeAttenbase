import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'bdc-bo-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.scss'],
})
export class DashboardUsersComponent implements AfterViewInit {
  protected displayedColumns: string[] = [
    'username',
    'useremail',
    'lastlogin',
    'userclients',
    'userrol',
    'seeMore',
  ];

  ELEMENT_DATA: any[] = [
    {
      userName: 'santiago martinez',
      userEmail: 'smartinez@gmail.com',
      lastLogin: '12 dec 2022, 10:00am',
      userClients: 'movistar',
      userRol: 'administrador',
    },
    {
      userName: 'adrian ojeda',
      userEmail: 'aojeda@gmail.com',
      lastLogin: '12 dec 2022, 10:00am',
      userClients: 'movistar',
      userRol: 'administrador',
    },
    {
      userName: 'florencia sosa',
      userEmail: 'florsosa@gmail.com',
      lastLogin: '12 dec 2022, 10:00am',
      userClients: 'movistar',
      userRol: 'administrador',
    },
    {
      userName: 'natalia morello',
      userEmail: 'natumorello@gmail.com',
      lastLogin: '12 dec 2022, 10:00am',
      userClients: 'movistar',
      userRol: 'administrador',
    },
    {
      userName: 'federico gimenez',
      userEmail: 'federicgimenez@gmail.com',
      lastLogin: '12 dec 2022, 10:00am',
      userClients: 'movistar',
      userRol: 'administrador',
    },
    {
      userName: 'gustavo gilevensxchi',
      userEmail: 'gusti@gmail.com',
      lastLogin: '12 dec 2022, 10:00am',
      userClients: 'movistar',
      userRol: 'administrador',
    },
    {
      userName: 'ricardo azcurra',
      userEmail: 'ricky12@gmail.com',
      lastLogin: '12 dec 2022, 10:00am',
      userClients: 'movistar',
      userRol: 'administrador',
    },
  ];
  protected showFirstLastButtons: boolean = true;
  protected disabled: boolean = false;
  protected pageIndex: number = 0;
  protected length: number = this.ELEMENT_DATA.length;
  protected pageSize: number = 10;
  protected openMenu: boolean = false;

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private intl: MatPaginatorIntl) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const numberPages = Math.ceil(length / pageSize);
      const startIndex = page;
      return `Página ${startIndex + 1} de ${numberPages}`;
    };
    this.intl.previousPageLabel = 'Página anterior';
    this.intl.nextPageLabel = 'Página siguiente';
  }
}
