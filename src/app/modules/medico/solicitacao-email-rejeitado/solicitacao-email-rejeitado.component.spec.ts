import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoEmailRejeitadoComponent } from './solicitacao-email-rejeitado.component';

describe('SolicitacaoEmailRejeitadoComponent', () => {
  let component: SolicitacaoEmailRejeitadoComponent;
  let fixture: ComponentFixture<SolicitacaoEmailRejeitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacaoEmailRejeitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoEmailRejeitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
