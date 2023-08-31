import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioPrenotazioneComponent } from './dettaglioprenotazione/dettaglioprenotazione.component';
import { ListaPrenotazioniComponent } from './listaprenotazione/listaprenotazione.component';
import { PrenotazioneFormComponent } from './prenotazione/prenotazione.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista-prenotazioni', pathMatch: 'full' },
  { path: 'lista-prenotazioni', component: ListaPrenotazioniComponent },
  { path: 'prenotazione/:id', component: DettaglioPrenotazioneComponent },
  { path: 'nuova-prenotazione', component: PrenotazioneFormComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
