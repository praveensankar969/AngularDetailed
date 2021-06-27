import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {path:"elements", loadChildren:()=>
    import("./elements/elements.module").then(m=> m.ElementsModule)
  },
  {path:"collections", loadChildren:()=>
  import("./collections/collections.module").then(m=> m.CollectionsModule)
  },
  {path:"views", loadChildren:()=>
  import("./views/views.module").then(m=> m.ViewsModule)
  },
  {path:"mods", loadChildren:()=>
  import("./mods/mods.module").then(m=> m.ModsModule)
  },
  {path:"wiki-search", loadChildren:()=>
  import("./wiki/wiki.module").then(m=> m.WikiModule)
  },
  {path:"fetch-photo", loadChildren:()=>
  import("./photofetch/photofetch.module").then(m=> m.PhotofetchModule)
  },
  {path:"credit-card", loadChildren:()=>
  import("./creditcard/creditcard.module").then(m=> m.CreditcardModule)
  },
  {path: "cards", component:CardComponent},
  {path: "", component:HomeComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
