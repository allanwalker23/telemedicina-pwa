import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgateSenhaComponent } from './resgate-senha.component';

describe('ResgateSenhaComponent', () => {
  let component: ResgateSenhaComponent;
  let fixture: ComponentFixture<ResgateSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgateSenhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgateSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
