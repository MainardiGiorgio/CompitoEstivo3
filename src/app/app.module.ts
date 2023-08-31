import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrenotazioneComponent } from './prenotazione/prenotazione.component';
import { ListaprenotazioneComponent } from './listaprenotazione/listaprenotazione.component';
import { DettaglioprenotazioneComponent } from './dettaglioprenotazione/dettaglioprenotazione.component';

@NgModule({
  declarations: [
    AppComponent,
    PrenotazioneComponent,
    ListaprenotazioneComponent,
    DettaglioprenotazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
