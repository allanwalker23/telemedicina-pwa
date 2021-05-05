import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoEmailAguardeComponent } from './solicitacao-email-aguarde.component';

describe('SolicitacaoEmailAguardeComponent', () => {
  let component: SolicitacaoEmailAguardeComponent;
  let fixture: ComponentFixture<SolicitacaoEmailAguardeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacaoEmailAguardeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacaoEmailAguardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
