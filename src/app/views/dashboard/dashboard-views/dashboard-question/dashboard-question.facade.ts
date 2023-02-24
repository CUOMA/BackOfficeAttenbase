import { Injectable } from '@angular/core';

@Injectable()
export class QuestionFacade {
  public ELEMENT_DATA = [
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
  public questionFilter!: any;
  constructor() {}

  public getQuestions(selectedTab: string) {
    return (this.questionFilter = this.ELEMENT_DATA.filter(obj => obj.state === selectedTab));
  }
}
