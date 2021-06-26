import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModelComponent } from './model/model.component';
import { ModelHomeComponent } from './model-home/model-home.component';


@NgModule({
  declarations: [
    ModelComponent,
    ModelHomeComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule
  ]
})
export class ModsModule { }
