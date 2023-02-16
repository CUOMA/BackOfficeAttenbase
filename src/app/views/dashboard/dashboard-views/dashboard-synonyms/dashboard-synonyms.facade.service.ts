import { Injectable } from '@angular/core';

export class SynonymFacadeService {
  public lastItemDelete!: string;

  public getItemDelete(valor: string) {
    this.lastItemDelete = valor;
    console.log(this.lastItemDelete);
  }
}
