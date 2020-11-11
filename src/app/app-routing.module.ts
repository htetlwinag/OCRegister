import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RegisterlistComponent} from './registerlist/registerlist.component';
import {InformComponent} from './inform/inform.component';
import {LoginComponent} from './login/login.component';
import {StudentListComponent} from './student-list/student-list.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path : 'login', component : LoginComponent},
  {path : 'register-list', component : RegisterlistComponent},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'inform', component : InformComponent},
  {path : 'student-list', component : StudentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {DashboardComponent ; RegisterlistComponent ; InformComponent;  StudentListComponent;}
