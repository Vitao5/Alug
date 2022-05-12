import { NotFoundComponent } from './view/not-found/not-found.component';
import { HomeComponent } from './view/home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
       path: '',
       component: HomeComponent
    },
    {
    path: 'anunciar',
    component: NotFoundComponent
    },
    {
    path: 'locacao',
    component: NotFoundComponent
    },
    {
     path: 'vendas',
     component: NotFoundComponent
     },
     {
      path: 'contato',
      component: NotFoundComponent
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes,{ useHash: true})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }