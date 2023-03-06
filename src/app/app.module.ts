import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgLetModule } from 'ng-let';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorsModule } from './core/modules/interceptors.module';
import { NGRXModule } from './core/modules/ngrx.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NGRXModule,
    NgLetModule,
    BrowserAnimationsModule,
    InterceptorsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
