import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioprenotazioneComponent } from './dettaglioprenotazione.component';

describe('DettaglioprenotazioneComponent', () => {
  let component: DettaglioprenotazioneComponent;
  let fixture: ComponentFixture<DettaglioprenotazioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettaglioprenotazioneComponent]
    });
    fixture = TestBed.createComponent(DettaglioprenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
