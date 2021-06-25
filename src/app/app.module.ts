import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ElementsModule } from './elements/elements.module';
import { ViewsModule } from './views/views.module';
import { CollectionsModule } from './collections/collections.module';
import { ModsModule } from './mods/mods.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementsModule,
    ViewsModule,
    CollectionsModule,
    ModsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
