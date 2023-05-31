import { Component, Input } from '@angular/core';
import { BackArrowButton } from '../interfaces/backArrowButton.interface';

@Component({
  selector: 'bdc-bo-back-arrow-button',
  templateUrl: './back-arrow-button.component.html',
  styleUrls: ['./back-arrow-button.component.scss'],
})
export class BackArrowButtonComponent {
  @Input()
  public routeMap: BackArrowButton = {
    route: '',
  };
  // protected finalUrl: string;
  // public urlRedirect(): string {
  //   let url: string = window.location.href;
  //   let finalUrl: string;
  //   let urlSplit: string[] = url.split('/');
  //   console.log(urlSplit);
  //   if (urlSplit[urlSplit.length - 1] === '') {
  //     urlSplit.splice(-1, 2);
  //   } else {
  //     urlSplit.pop();
  //   }
  // finalUrl = urlSplit.join('/');
  //   finalUrl = urlSplit.reverse()[0];
  //   console.log(finalUrl);
  //   return finalUrl;
  // }
  // constructor() {
  //   this.finalUrl = this.urlRedirect();
  //   console.log(this.finalUrl);
  // }
  // constructor(private router: Router) {}
  // navigate() {
  //   let url: string = window.location.href;
  //   if (url.includes('nueva-categoria')) {
  //     this.router.navigate(['/dashboard/categorias']);
  //   } else if (url.includes('detalle')) {
  //     this.router.navigate(['/dashboard/categorias']);
  //   } else if (url.includes('crear-pregunta')) {
  //     this.router.navigate(['/dashboard/listado-de-preguntas']);
  //   } else if (url.includes('editar-sinonimo')) {
  //     this.router.navigate(['/dashboard/sinonimos']);
  //   } else if (url.includes('editar-sinonimo')) {
  //     this.router.navigate(['/dashboard/sinonimos']);
  //   } else if (url.includes('crear-sinonimo')) {
  //     this.router.navigate(['/dashboard/sinonimos']);
  //   } else if (url.includes('crear-usuario')) {
  //     this.router.navigate(['/dashboard/usuarios']);
  //   }
  // }
}
