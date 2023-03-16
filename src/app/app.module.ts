import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaComponent } from './resta/resta.component';
import { Resta2Component } from './resta2/resta2.component';
import { IonicModule } from '@ionic/angular';
import { Restra3Component } from './restra3/restra3.component';
import { EmailComponent } from './email/email.component';
import { YouTubeComponent } from './you-tube/you-tube.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaComponent,
    Resta2Component,
    Restra3Component,
    EmailComponent,
    YouTubeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
