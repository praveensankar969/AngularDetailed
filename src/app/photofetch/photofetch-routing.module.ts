import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotohomeComponent } from './photohome/photohome.component';

const routes: Routes = [
  {path : "", component:PhotohomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotofetchRoutingModule { }
