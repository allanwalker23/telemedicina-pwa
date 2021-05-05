import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoEmailInativadoComponent } from './solicitacao-email-inativado.component';

describe('SolicitacaoEmailInativadoComponent', () => {
  let component: SolicitacaoEmailInativadoComponent;
  let fixture: ComponentFixture<SolicitacaoEmailInativadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacaoEmailInativadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoEmailInativadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
