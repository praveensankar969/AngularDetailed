import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotofetchRoutingModule } from './photofetch-routing.module';
import { PhotohomeComponent } from './photohome/photohome.component';


@NgModule({
  declarations: [
    PhotohomeComponent
  ],
  imports: [
    CommonModule,
    PhotofetchRoutingModule
  ]
})
export class PhotofetchModule { }
