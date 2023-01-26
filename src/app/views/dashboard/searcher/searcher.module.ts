import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SearcherComponent } from './searcher.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [SearcherComponent],
  imports: [CommonModule, MatIconModule, MatFormFieldModule, MatInputModule],
  exports: [SearcherComponent],
})
export class SearcherModule {}
