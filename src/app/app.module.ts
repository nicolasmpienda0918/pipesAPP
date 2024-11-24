import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//Configuracion del locale de la app
import localEsCL from '@angular/common/locales/es-CL'
import localFrCA from '@angular/common/locales/fr-CA'


import  {registerLocaleData} from '@angular/common'

registerLocaleData(localEsCL)
registerLocaleData(localFrCA)

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule



],
  providers: [
    // Definir de forma global un idioma en toda la aplicacion
    {
        provide: LOCALE_ID, useValue: 'es-CL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
