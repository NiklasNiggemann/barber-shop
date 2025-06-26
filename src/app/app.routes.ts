import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouteGuard } from './modules/route-guard';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentEditComponent } from './appointment-edit/appointment-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AppointmentRequestComponent } from './appointment-request/appointment-request.component';

export const routes: Routes = 
[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeeListComponent, canActivate:[RouteGuard]},
  { path: 'employees/:id', component: EmployeeEditComponent, canActivate:[RouteGuard]},
  { path: 'appointments', component: AppointmentListComponent, canActivate:[RouteGuard] },
  { path: 'appointments/:id', component: AppointmentEditComponent, canActivate:[RouteGuard] },
  { path: 'appointments/request', component: AppointmentRequestComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[RouteGuard] },
  { path: '**', redirectTo: '/home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
