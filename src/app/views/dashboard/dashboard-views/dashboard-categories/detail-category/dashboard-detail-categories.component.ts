import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AlertService } from 'src/app/core/services/alert.service';
import { emptyStateModel } from 'src/app/shared/empty-state/empty-state.component';
import { categoriesApiActions } from '../../../../../store/actions/categories.actions';
import { CategoriesFacade } from '../dashboard-categories.facade';

@Component({
  selector: 'bdc-bo-dashboard-categories',
  templateUrl: './dashboard-detail-categories.component.html',
  styleUrls: ['./dashboard-detail-categories.component.scss'],
})
export class DashboardDetailCategoriesComponent implements OnInit {
  protected areCategoriesLoading$!: Observable<any>;
  protected categoryId$!: Observable<any>;
  private destroy$ = new Subject<void>();
  protected id!: number;
  panelOpenState = false;
  protected emptyStateData: emptyStateModel = {
    src: '/assets/svg/empty-state/empty-state-categories.svg',
    title: 'Aún no hay subcategorías creadas.',
    paragraph: 'Las subcategorías ayudan a especificar la clasificación de las preguntas.',
  };
  constructor(
    public categoriesFacade: CategoriesFacade,
    public route: ActivatedRoute,
    public store: Store,
    public router: Router,
    public alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.categoryId$ = this.categoriesFacade.detailCategory(this.id);
    this.areCategoriesLoading$ = this.categoriesFacade.areCategoriesLoading.pipe(
      takeUntil(this.destroy$)
    );
  }

  protected deleteCategory(id: number) {
    this.store.dispatch(categoriesApiActions.deleteCategoriesRequest({ id }));
    this.router.navigateByUrl('dashboard/categorias');
  }
}
