import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [ 
 { path:'',component:HomeComponent},
 { path:'about',component:AboutComponent},
 { path:'service',component:ServiceComponent},
 { path:'contact',component:ContactComponent },
 { path:'project',component:ProjectComponent },
 { path:'product',component:ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
