import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { RestaComponent } from './resta/resta.component';
import { Resta2Component } from './resta2/resta2.component';
import { Restra3Component } from './restra3/restra3.component';
import { YouTubeComponent } from './you-tube/you-tube.component';

const routes: Routes = [
  {
    path:'resta2',
    component:Resta2Component
  },
  {
    path:'resta3',
    component:Restra3Component
  },
  {
    path:'',
    component:EmailComponent
  },
  {
    path:'u',
    component:YouTubeComponent
  },
  {
    path:'resta',
    component:RestaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
