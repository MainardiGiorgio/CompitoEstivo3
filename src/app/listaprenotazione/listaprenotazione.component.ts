import { Component, OnInit } from '@angular/core';
import { Prenotazione } from '../prenotazione.model';
import { PrenotazioniService } from '../prenotazioni.service';

@Component({
  selector: 'app-listaprenotazione',
  templateUrl: './listaprenotazione.component.html',
  styleUrls: ['./listaprenotazione.component.css']
})
export class ListaPrenotazioniComponent implements OnInit {
  prenotazioni: Prenotazione[];

  constructor(private prenotazioniService: PrenotazioniService) {}

  ngOnInit() {
    // Recupera le prenotazioni dal servizio e assegnale a this.prenotazioni
    this.prenotazioni = this.prenotazioniService.getPrenotazioni();
  }

  cancellaPrenotazione(id: number) {
    // Chiama il servizio per cancellare la prenotazione
    this.prenotazioniService.cancellaPrenotazione(id);
    // Aggiorna la lista delle prenotazioni dopo la cancellazione
    this.prenotazioni = this.prenotazioniService.getPrenotazioni();
  }
}
