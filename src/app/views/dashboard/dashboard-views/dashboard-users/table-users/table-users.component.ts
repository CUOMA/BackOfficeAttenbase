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

@Component({
  selector: 'bdc-bo-tabla-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss'],
})
export class TableUsersComponent implements OnChanges, OnInit, AfterViewInit {
  protected displayedColumns: string[] = [
    'first_name',
    'email',
    'last_login',
    'userClients',
    'role',
    'seeMore',
  ];
  @Input() users!: any;
  protected showFirstLastButtons: boolean = true;
  protected disabled: boolean = false;
  protected pageIndex: number = 0;
  protected pageSize: number = 10;
  protected areUsersLoading$!: Observable<any>;
  protected color: ThemePalette = 'primary';
  protected mode: MatProgressSpinnerModule = 'indeterminate';
  private destroy$ = new Subject<void>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  protected dataSource = new MatTableDataSource<Registro>();
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
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.sort = this.sort;
    }
  }

  ngOnInit(): void {
    console.log(this.dataSource);
    this.areUsersLoading$ = this.usersFacade.areUsersLoading.pipe(takeUntil(this.destroy$));
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.paginator.pageSize = this.pageSize;

    // this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.sort = this.sort;

    // this.sort.sortChange.pipe(() => this.users()).subscribe;
  }

  // protected deleteSynonyms(id: number, element: string) {
  //   this.store.dispatch(categoriesApiActions.deleteCategoriesRequest({ id }));
  //   this.alertCategoryDeleted(element);
  // }

  // protected editSynonyms(id: number): any {
  //   this.router.navigate(['/dashboard/sinonimos/editar-sinonimo'], { queryParams: { id } });
  // }

  // private alertCategoryDeleted(element: string) {
  //   this.alertService.openFromComponent({
  //     duration: 5000,
  //     data: {
  //       templateHTML: `Eliminaste ${element}`,
  //     },
  //   });
  // }
}

export class Registro {
  constructor(
    public first_name: string,
    public email: string,
    public last_login: string,
    // public userClients: any,
    public role: string
  ) {}
}
