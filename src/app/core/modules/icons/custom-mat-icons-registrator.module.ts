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
  }
}
