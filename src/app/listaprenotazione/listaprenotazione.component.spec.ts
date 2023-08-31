import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaprenotazioneComponent } from './listaprenotazione.component';

describe('ListaprenotazioneComponent', () => {
  let component: ListaprenotazioneComponent;
  let fixture: ComponentFixture<ListaprenotazioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaprenotazioneComponent]
    });
    fixture = TestBed.createComponent(ListaprenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
