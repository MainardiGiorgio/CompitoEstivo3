import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {
  getPrenotazione(id: number): Prenotazione {
    throw new Error('Method not implemented.');
  }
  getPrenotazioni(): Prenotazione[] {
    throw new Error('Method not implemented.');
  }
  cancellaPrenotazione(id: number) {
    throw new Error('Method not implemented.');
  }
  aggiungiPrenotazione(nuovaPrenotazione: Prenotazione) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
