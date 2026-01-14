import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CO';

registerLocaleData(localeEsCo);
bootstrapApplication(AppComponent,{
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' },
    provideRouter(routes)
  ]
}).catch(err => console.error(err));