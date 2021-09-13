import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddSiniestroComponent } from './siniestros/add-siniestro/add-siniestro.component';
import { EditSiniestroComponent } from './siniestros/edit-siniestro/edit-siniestro.component';
import { DeleteSiniestroComponent } from './siniestros/delete-siniestro/delete-siniestro.component';
import { ViewSiniestroComponent } from './siniestros/view-siniestro/view-siniestro.component';
import { ListSiniestroComponent } from './siniestros/list-siniestro/list-siniestro.component';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    NavMenuComponent,
    AddSiniestroComponent,
    EditSiniestroComponent,
    DeleteSiniestroComponent,
    ViewSiniestroComponent,
    ListSiniestroComponent,
  ],
  imports: [CommonModule, RouterModule, MatToolbarModule, TranslateModule],
  exports: [
    NavMenuComponent,
    EditSiniestroComponent,
    DeleteSiniestroComponent,
    ViewSiniestroComponent,
    ListSiniestroComponent,
  ],
})
export class PagesModule {}
