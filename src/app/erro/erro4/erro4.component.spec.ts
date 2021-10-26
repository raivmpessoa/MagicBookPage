import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erro4Component } from './erro4.component';

describe('Erro4Component', () => {
  let component: Erro4Component;
  let fixture: ComponentFixture<Erro4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Erro4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Erro4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
