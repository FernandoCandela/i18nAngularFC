import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { SiniestrosComponent } from '../pages/siniestros/siniestros.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'siniestros', component: SiniestrosComponent },
  { path: '', redirectTo: '/siniestros', pathMatch: 'full' }
];