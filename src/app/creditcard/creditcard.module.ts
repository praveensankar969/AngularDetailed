import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditcardRoutingModule } from './creditcard-routing.module';
import { HomeComponent } from './home/home.component';
import { CardformComponent } from './cardform/cardform.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    CardformComponent
  ],
  imports: [
    CommonModule,
    CreditcardRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreditcardModule { }
