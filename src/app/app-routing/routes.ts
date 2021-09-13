import { Routes } from '@angular/router';
import { AddSiniestroComponent } from '../pages/siniestros/add-siniestro/add-siniestro.component';
import { DeleteSiniestroComponent } from '../pages/siniestros/delete-siniestro/delete-siniestro.component';
import { ViewSiniestroComponent } from '../pages/siniestros/view-siniestro/view-siniestro.component';
import { ListSiniestroComponent } from '../pages/siniestros/list-siniestro/list-siniestro.component';
import { EditSiniestroComponent } from '../pages/siniestros/edit-siniestro/edit-siniestro.component';

export const routes: Routes = [
  { path: 'create', component: AddSiniestroComponent },
  { path: 'view/:id', component: ViewSiniestroComponent },
  { path: 'list', component: ListSiniestroComponent },
  { path: 'delete/:id', component: DeleteSiniestroComponent },
  { path: 'edit/:id', component: EditSiniestroComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];
