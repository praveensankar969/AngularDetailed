import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { TableChildComponent } from './table-child/table-child.component';
import { TableChildCompaniesComponent } from './table-child-companies/table-child-companies.component';
import { TableChildPartnersComponent } from './table-child-partners/table-child-partners.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent,
    TableChildComponent,
    TableChildCompaniesComponent,
    TableChildPartnersComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ]
})
export class CollectionsModule { }
