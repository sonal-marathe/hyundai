import { routes } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { DesignsComponent } from './designs/designs.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent ,
    AboutComponent,
    BookingComponent,
    ContactComponent ,
    DesignsComponent
    
  ],
  imports: [
    BrowserModule ,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
