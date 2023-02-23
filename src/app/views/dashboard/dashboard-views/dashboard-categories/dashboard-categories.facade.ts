import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class CategoriesFacade {
  public deleteCategories(): Observable<any> {
    return of([
      {
        position: 'Problemas de Señal',
        name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
      },
    ]);
  }
}
