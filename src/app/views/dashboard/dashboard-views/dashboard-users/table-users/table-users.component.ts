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
import { UsersFacade } from '../dashboard-users.facade';
import { AlertService } from 'src/app/core/services/alert.service';

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
    'userRol',
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
  protected dataSource!: MatTableDataSource<any>;

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
    }
  }

  ngOnInit(): void {
    console.log(this.users);
    this.areUsersLoading$ = this.usersFacade.areUsersLoading.pipe(takeUntil(this.destroy$));
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.paginator.pageSize = this.pageSize;
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
