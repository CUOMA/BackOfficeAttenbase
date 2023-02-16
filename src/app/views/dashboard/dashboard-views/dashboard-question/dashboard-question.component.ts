import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { timer } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'bdc-bo-dashboard-question',
  templateUrl: './dashboard-question.component.html',
  styleUrls: ['./dashboard-question.component.scss'],
})
export class DashboardQuestionComponent implements AfterViewInit {
  // propiedades del array que se van a renderizar por columna
  protected displayedColumns: string[] = [
    'question',
    'category',
    'subcategory',
    'lastupdate',
    'state',
    'seeMore',
  ];
  ELEMENT_DATA: any[] = [
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'aprobada',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'aprobada',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'aprobada',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'aprobada',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'aprobada',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'aprobada',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'aprobada',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'aprobada',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'aprobada',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'aprobada',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'aprobada',
    },
    {
      question: '¿Como hago para reestablecer la cuenta luego del corte?',
      category: 'Pagos',
      subcategory: 'linea movil',
      lastupdate: '10 dec 2022, 10:00h',
      state: 'aprobada',
    },
  ];

  links = ['Pendientes', 'Publicadas', 'Archivadas', 'Borradores'];
  activeLink = this.links[0];

  selectedTabComponent: any;
  selectTab(tab: any) {
    this.selectedTabComponent = tab.component;
  }
  protected tabs = [
    { label: 'Pendientes', component: NameComponent },
    { label: 'Publicadas', component: NameComponent },
    { label: 'Archivadas', component: NameComponent },
    { label: 'Borradores', component: NameComponent },
  ];

  protected showFirstLastButtons: boolean = true;
  protected disabled: boolean = false;
  protected pageIndex: number = 0;
  protected length: number = this.ELEMENT_DATA.length;
  protected pageSize: number = 10;

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private intl: MatPaginatorIntl) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items por pagina';
    this.intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      const numberPages = Math.ceil(length / pageSize);
      const startIndex = page;
      return `Página ${startIndex + 1} de ${numberPages}`;
    };
  }
}

@Component({
  selector: 'bdc-bo-tabla',
  template: '<p>hola </p>',
  styleUrls: [],
})
export class NameComponent {
  constructor() {}
}
