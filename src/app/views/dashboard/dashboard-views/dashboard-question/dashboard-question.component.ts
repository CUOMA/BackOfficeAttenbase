import { Component } from '@angular/core';

@Component({
  selector: 'bdc-bo-dashboard-question',
  templateUrl: './dashboard-question.component.html',
  styleUrls: ['./dashboard-question.component.scss'],
})
export class DashboardQuestionComponent {
  protected tabs = [
    { label: 'Pendientes', value: 'Pendiente' },
    { label: 'Publicadas', value: 'aprobada' },
    { label: 'Archivadas', value: 'archivada' },
    { label: 'Borradores', value: 'borrador' },
  ];
  protected selectedTab = this.tabs[2];
  protected questions = ELEMENT_DATA.filter(obj => obj.state === this.selectedTab.value);

  selectTab(tab: { label: string; value: string }) {
    this.selectedTab = tab;
    this.questions = ELEMENT_DATA.filter(obj => obj.state === tab.value);
  }
}

const ELEMENT_DATA = [
  {
    question: '¿Como hago para reestablecer la cuenta luego del corte?',
    category: 'Pagos',
    subcategory: 'linea movil',
    lastupdate: '10 dec 2022, 10:00h',
    state: 'borrador',
  },
  {
    question: '¿Como hago para reestablecer la cuenta luego del corte?',
    category: 'Pagos',
    subcategory: 'linea movil',
    lastupdate: '10 dec 2022, 10:00h',
    state: 'archivada',
  },
  {
    question: '¿Como hago para reestablecer la cuenta luego del corte?',
    category: 'Pagos',
    subcategory: 'linea movil',
    lastupdate: '10 dec 2022, 10:00h',
    state: 'Pendiente',
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
    state: 'borrador',
  },
  {
    question: '¿Como hago para reestablecer la cuenta luego del corte?',
    category: 'Pagos',
    subcategory: 'linea movil',
    lastupdate: '10 dec 2022, 10:00h',
    state: 'Pendiente',
  },
  {
    question: '¿Como hago para reestablecer la cuenta luego del corte?',
    category: 'Pagos',
    subcategory: 'linea movil',
    lastupdate: '10 dec 2022, 10:00h',
    state: 'borrador',
  },
  {
    question: '¿Como hago para reestablecer la cuenta luego del corte?',
    category: 'Pagos',
    subcategory: 'linea movil',
    lastupdate: '10 dec 2022, 10:00h',
    state: 'Pendiente',
  },
];
