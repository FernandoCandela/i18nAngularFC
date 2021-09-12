import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SiniestrosComponent } from './pages/siniestros/siniestros.component';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SiniestrosAddComponent } from './pages/siniestros-add/siniestros-add.component';
import { SiniestrosUpdateComponent } from './pages/siniestros-update/siniestros-update.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function rootLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    SiniestrosComponent,
    SiniestrosAddComponent,
    SiniestrosUpdateComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: rootLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}