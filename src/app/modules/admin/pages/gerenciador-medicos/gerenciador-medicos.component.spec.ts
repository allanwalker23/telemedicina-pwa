import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorMedicosComponent } from './gerenciador-medicos.component';

describe('GerenciadorMedicosComponent', () => {
  let component: GerenciadorMedicosComponent;
  let fixture: ComponentFixture<GerenciadorMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciadorMedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciadorMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
