import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erro5Component } from './erro5.component';

describe('Erro5Component', () => {
  let component: Erro5Component;
  let fixture: ComponentFixture<Erro5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Erro5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Erro5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
