import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MainModule { }
