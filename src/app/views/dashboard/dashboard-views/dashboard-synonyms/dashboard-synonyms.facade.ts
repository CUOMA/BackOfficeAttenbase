import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class SynonymsFacade {
  public deleteSynonim(): Observable<any> {
    return of([
      {
        position: 'Problemas de Señal',
        name: ['Problemas de señal', 'Problemas con el teléfono', 'No hay señal'],
      },
    ]);
  }
}
