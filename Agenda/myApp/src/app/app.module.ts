import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AgendaPage } from '../pages/agenda/agenda';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { ContactosPage } from '../pages/contactos/contactos';
import { ContactService } from '../services/contacts.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AgendaPage,
    AcercaDePage,
    ContactosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AgendaPage,
    AcercaDePage,
    ContactosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactService
  ]
})
export class AppModule {}
