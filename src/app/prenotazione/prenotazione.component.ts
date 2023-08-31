import { Component } from '@angular/core';
import { Prenotazione } from '../prenotazione.model';
import { PrenotazioniService } from '../prenotazioni.service';

@Component({
  selector: 'app-prenotazione-form',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneFormComponent {
  nuovaPrenotazione: Prenotazione = new Prenotazione();

  constructor(private prenotazioniService: PrenotazioniService) {}

  salvaPrenotazione() {
    // Invia i dati al servizio per l'aggiunta della prenotazione
    this.prenotazioniService.aggiungiPrenotazione(this.nuovaPrenotazione);
    // Pulisci il form dopo l'aggiunta della prenotazione
    this.nuovaPrenotazione = new Prenotazione();
  }
}

