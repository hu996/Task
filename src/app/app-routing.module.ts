import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
{path:"",redirectTo:"about",pathMatch:"full"},
  {path:"about",component:AboutComponent,title:"about"},
{path:"Portfolio",component:PortfolioComponent,title:"Portfolio"},
{path:"Contact",component:ContactComponent,title:"Contact"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:'enabled'
  })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
