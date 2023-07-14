import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AlertService } from 'src/app/core/services/alert.service';
import { MatSort } from '@angular/material/sort';
import { UsersFacade } from '../dashboard-users.facade';
import { User } from 'src/app/core/models/userTable.interface';
import { DataSourceUser } from 'src/app/core/models/userDataSourceTable.interface';
import { categoriesApiActions } from 'src/app/store/actions/categories.actions';
import { emptyStateModel } from 'src/app/shared/empty-state/empty-state.component';

@Component({
  selector: 'bdc-bo-tabla-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss'],
})
export class TableUsersComponent implements OnChanges, OnInit, AfterViewInit {
  protected displayedColumns: string[] = [
    'userName',
    'userEmail',
    'lastLogin',
    'userClients',
    'role',
    'seeMore',
  ];
  @Input() users!: User[];
  protected showFirstLastButtons: boolean = true;
  protected disabled: boolean = false;
  protected pageIndex: number = 0;
  protected pageSize: number = 10;
  protected areUsersLoading$!: Observable<any>;
  protected color: ThemePalette = 'primary';
  protected mode: MatProgressSpinnerModule = 'indeterminate';
  private destroy$ = new Subject<void>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  protected usersData = (users: User[]): DataSourceUser[] => {
    let data = users.map((user: User) => {
      return {
        userName: user.first_name.toLocaleLowerCase() + ' ' + user.last_name.toLocaleLowerCase(),
        userEmail: user.email.toLocaleLowerCase(),
        lastLogin: user.last_login.toLocaleLowerCase(),
        role: user.role.toLocaleLowerCase(),
        userClients: user.userClients,
      };
    });
    return data;
  };

  protected emptyStateData: emptyStateModel = {
    src: '/assets/svg/empty-state/empty-state-users.svg',
    title: 'Añadí un usuario',
    paragraph:
      'Los usuarios que designes podrán llevar a cabo distintas acciones dentro de la plataforma.',
  };
  protected dataSource = new MatTableDataSource();
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    public usersFacade: UsersFacade,
    private cdRef: ChangeDetectorRef,
    public store: Store,
    public router: Router,
    public alertService: AlertService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['users'].currentValue) {
      this.dataSource = new MatTableDataSource<any>(this.usersData(this.users));
      this.dataSource.sort = this.sort;
    }
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(this.usersData(this.users));

    this.areUsersLoading$ = this.usersFacade.areUsersLoading.pipe(takeUntil(this.destroy$));
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.paginator.pageSize = this.pageSize;

    this.dataSource.sort = this.sort;
  }

  protected deleteSynonyms(id: number, element: string) {
    this.store.dispatch(categoriesApiActions.deleteCategoriesRequest({ id }));
    this.alertCategoryDeleted(element);
  }

  protected editSynonyms(id: number): any {
    this.router.navigate(['/dashboard/sinonimos/editar-sinonimo'], { queryParams: { id } });
  }

  private alertCategoryDeleted(element: string) {
    this.alertService.openFromComponent({
      duration: 5000,
      data: {
        templateHTML: `Eliminaste ${element}`,
      },
    });
  }
}
