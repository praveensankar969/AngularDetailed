import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModelComponent } from './model/model.component';
import { ModelHomeComponent } from './model-home/model-home.component';
import { AccordianComponent } from './accordian/accordian.component';


@NgModule({
  declarations: [
    ModelComponent,
    ModelHomeComponent,
    AccordianComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule
  ]
})
export class ModsModule { }
