import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContainerComponent } from './container/container.component';
import { GestionComponent } from './gestion/gestion.component';

const routes: Routes = [
    {path:'', component:ApplicationComponent,children:[
     {path:'',component:DashboardComponent},
     {path:'poc',component:ContainerComponent},
     {path:'gestion/:id',component:GestionComponent},
     {path:'ajout',component:GestionComponent}

    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
