import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersFacade } from './dashboard-users.facade';

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
  protected users$ = this.usersFacade.selectUsers();
  protected showFirstLastButtons: boolean = true;
  protected disabled: boolean = false;
  protected pageIndex: number = 0;
  protected pageSize: number = 10;
  protected openMenu: boolean = false;

  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private intl: MatPaginatorIntl, public usersFacade: UsersFacade) {}

  ngAfterViewInit() {
    this.usersFacade.dispatchGetUsers();
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
