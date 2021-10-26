import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erro3Component } from './erro3.component';

describe('Erro3Component', () => {
  let component: Erro3Component;
  let fixture: ComponentFixture<Erro3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Erro3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Erro3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
