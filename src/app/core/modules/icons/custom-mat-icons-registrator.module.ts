import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  exports: [MatIconModule],
})
export class CustomMatIconsRegistratorModule {
  constructor(sanitizer: DomSanitizer, matIconRegister: MatIconRegistry) {
    matIconRegister.addSvgIcon(
      'eyeText',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/eye-txt.svg')
    );
    matIconRegister.addSvgIcon(
      'eyePassword',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/eye-psw.svg')
    );
    matIconRegister.addSvgIcon(
      'list-question',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/aside/list-container.svg')
    );
    matIconRegister.addSvgIcon(
      'categories',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/aside/categoria.svg')
    );
    matIconRegister.addSvgIcon(
      'synonymous',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/aside/sinonimos.svg')
    );
    matIconRegister.addSvgIcon(
      'segment',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/aside/segment.svg')
    );
    matIconRegister.addSvgIcon(
      'users',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/aside/users.svg')
    );
    matIconRegister.addSvgIcon(
      'profile',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/aside/user.svg')
    );
    matIconRegister.addSvgIcon(
      'bell',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/aside/bell.svg')
    );
    matIconRegister.addSvgIcon(
      'seeMore',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/see-more.svg')
    );
  }
}
