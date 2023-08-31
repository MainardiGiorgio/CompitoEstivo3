import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prenotazione } from '../prenotazione.model';
import { PrenotazioniService } from '../prenotazioni.service';

@Component({
  selector: 'app-dettaglioprenotazione',
  templateUrl: './dettaglioprenotazione.component.html',
  styleUrls: ['./dettaglioprenotazione.component.css']
})
export class DettaglioPrenotazioneComponent implements OnInit {
  prenotazione: Prenotazione;

  constructor(
    private route: ActivatedRoute,
    private prenotazioniService: PrenotazioniService
  ) {}

  ngOnInit() {
    // Ottieni l'ID della prenotazione dalla rotta
    const id = +this.route.snapshot.paramMap.get('id');
    // Recupera i dettagli della prenotazione dal servizio
    this.prenotazione = this.prenotazioniService.getPrenotazione(id);
  }
}
