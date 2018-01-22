import { Component } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { DesignsComponent } from './designs/designs.component';
import { HomeComponent } from "./home/home.component";


export const router: Routes = [
   
   { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
	{ path: 'booking', component: BookingComponent },
    { path: 'designs', component: DesignsComponent }
	
	
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
