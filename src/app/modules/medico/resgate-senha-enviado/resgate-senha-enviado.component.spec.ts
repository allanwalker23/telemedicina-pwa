import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgateSenhaEnviadoComponent } from './resgate-senha-enviado.component';

describe('ResgateSenhaEnviadoComponent', () => {
  let component: ResgateSenhaEnviadoComponent;
  let fixture: ComponentFixture<ResgateSenhaEnviadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgateSenhaEnviadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgateSenhaEnviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
