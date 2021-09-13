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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    NavMenuComponent,
    AddSiniestroComponent,
    EditSiniestroComponent,
    DeleteSiniestroComponent,
    ViewSiniestroComponent,
    ListSiniestroComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    TranslateModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatCardModule,
    MatListModule
  ],
  exports: [
    NavMenuComponent,
    EditSiniestroComponent,
    DeleteSiniestroComponent,
    ViewSiniestroComponent,
    ListSiniestroComponent,
  ],
})
export class PagesModule {}
