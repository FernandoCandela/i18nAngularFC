import { Routes } from '@angular/router';
import { AddSiniestroComponent } from '../pages/siniestros/add-siniestro/add-siniestro.component';
import { ViewSiniestroComponent } from '../pages/siniestros/view-siniestro/view-siniestro.component';
import { ListSiniestroComponent } from '../pages/siniestros/list-siniestro/list-siniestro.component';
import { EditSiniestroComponent } from '../pages/siniestros/edit-siniestro/edit-siniestro.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { LoginComponent } from '../pages/login/login.component';
import { ProfileComponent } from '../pages/profile/profile.component';

export const routes: Routes = [
  { path: 'create', component: AddSiniestroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'view/:id', component: ViewSiniestroComponent },
  { path: 'list', component: ListSiniestroComponent },
  { path: 'edit/:id', component: EditSiniestroComponent },
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];
