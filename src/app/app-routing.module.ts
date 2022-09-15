import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './main/aboutus/aboutus.component';
import { ContactusComponent } from './main/contactus/contactus.component';
import { HeaderComponent } from './main/header/header.component';
import { MainComponent } from './main/main/main.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'main', component: MainComponent, children:[
    {path: 'header', component: HeaderComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'contactus', component: ContactusComponent},
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
