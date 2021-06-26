import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiRoutingModule } from './wiki-routing.module';
import { WikiSearchComponent } from './wiki-search/wiki-search.component';
import { WikiSearchHomeComponent } from './wiki-search-home/wiki-search-home.component';
import { WikiResultTableComponent } from './wiki-result-table/wiki-result-table.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    WikiSearchComponent,
    WikiSearchHomeComponent,
    WikiResultTableComponent
  ],
  imports: [
    CommonModule,
    WikiRoutingModule
  ],
  providers: []
})
export class WikiModule { }
