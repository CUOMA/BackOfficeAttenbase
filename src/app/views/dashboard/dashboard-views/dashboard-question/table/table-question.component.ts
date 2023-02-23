import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  ChangeDetectionStrategy,
  SimpleChanges,
} from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { QuestionFacade } from '../dashboard-question.facade';

@Component({
  selector: 'bdc-bo-tabla-question',
  templateUrl: './table-question.component.html',
  styleUrls: ['./table-question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableQuestionComponent implements AfterViewInit {
  @Input() questions: any[] = [];
  protected displayedColumns: string[] = [
    'question',
    'category',
    'subcategory',
    'lastupdate',
    'state',
    'seeMore',
  ];
  //   {
  //     question: '¿Como hago para reestablecer la cuenta luego del corte?',
  //     category: 'Pagos',
  //     subcategory: 'linea movil',
  //     lastupdate: '10 dec 2022, 10:00h',
  //     state: 'aprobada',
  //   },
  //   {
  //     question: '¿Como hago para reestablecer la cuenta luego del corte?',
  //     category: 'Pagos',
  //     subcategory: 'linea movil',
  //     lastupdate: '10 dec 2022, 10:00h',
  //     state: 'aprobada',
  //   },
  //   {
  //     question: '¿Como hago para reestablecer la cuenta luego del corte?',
  //     category: 'Pagos',
  //     subcategory: 'linea movil',
  //     lastupdate: '10 dec 2022, 10:00h',
  //     state: 'aprobada',
  //   },
  //   {
  //     question: '¿Como hago para reestablecer la cuenta luego del corte?',
  //     category: 'Pagos',
  //     subcategory: 'linea movil',
  //     lastupdate: '10 dec 2022, 10:00h',
  //     state: 'aprobada',
  //   },
  //   {
  //     question: '¿Como hago para reestablecer la cuenta luego del corte?',
  //     category: 'Pagos',
  //     subcategory: 'linea movil',
  //     lastupdate: '10 dec 2022, 10:00h',
  //     state: 'aprobada',
  //   },
  //   {
  //     question: '¿Como hago para reestablecer la cuenta luego del corte?',
  //     category: 'Pagos',
  //     subcategory: 'linea movil',
  //     lastupdate: '10 dec 2022, 10:00h',
  //     state: 'aprobada',
  //   },
  //   {
  //     question: '¿Como hago para reestablecer la cuenta luego del corte?',
  //     category: 'Pagos',
  //     subcategory: 'linea movil',
  //     lastupdate: '10 dec 2022, 10:00h',
  //     state: 'aprobada',
  //   },
  //   {
  //     question: '¿Como hago para reestablecer la cuenta luego del corte?',
  //     category: 'Pagos',
  //     subcategory: 'linea movil',
  //     lastupdate: '10 dec 2022, 10:00h',
  //     state: 'aprobada',
  //   },
  //   {
  //     question: '¿Como hago para reestablecer la cuenta luego del corte?',
  //     category: 'Pagos',
  //     subcategory: 'linea movil',
  //     lastupdate: '10 dec 2022, 10:00h',
  //     state: 'aprobada',
  //   },
  //   {
  //     question: '¿Como hago para reestablecer la cuenta luego del corte?',
  //     category: 'Pagos',
  //     subcategory: 'linea movil',
  //     lastupdate: '10 dec 2022, 10:00h',
  //     state: 'aprobada',
  //   },
  //   {
  //     question: '¿Como hago para reestablecer la cuenta luego del corte?',
  //     category: 'Pagos',
  //     subcategory: 'linea movil',
  //     lastupdate: '10 dec 2022, 10:00h',
  //     state: 'aprobada',
  //   },
  //   {
  //     question: '¿Como hago para reestablecer la cuenta luego del corte?',
  //     category: 'Pagos',
  //     subcategory: 'linea movil',
  //     lastupdate: '10 dec 2022, 10:00h',
  //     state: 'aprobada',
  //   },
  // ];
  protected showFirstLastButtons: boolean = true;
  protected disabled: boolean = false;
  protected pageIndex: number = 0;
  protected pageSize: number = 2;
  constructor(private intl: MatPaginatorIntl, public questionFacade: QuestionFacade) {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource(this.questions);

  ngAfterViewInit() {
    this.paginator.pageSize = this.pageSize;
    this.dataSource.paginator = this.paginator;
  }
}
