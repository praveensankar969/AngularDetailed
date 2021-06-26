import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableChildComponent } from './table-child/table-child.component';
import { TableChildCompaniesComponent } from './table-child-companies/table-child-companies.component';
import { TableChildPartnersComponent } from './table-child-partners/table-child-partners.component';

const routes: Routes = [
  {path: "", component : CollectionsHomeComponent, children:[
    {path: "", component:TableChildComponent},
    {path: "companies", component:TableChildCompaniesComponent},
    {path: "partners", component: TableChildPartnersComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
