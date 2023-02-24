import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgLetModule } from 'ng-let';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NGRXModule } from './core/modules/ngrx.module';
import { DebugComponent } from './views/debug/debug.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NGRXModule,
    NgLetModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
