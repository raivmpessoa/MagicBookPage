import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erro2Component } from './erro2.component';

describe('Erro2Component', () => {
  let component: Erro2Component;
  let fixture: ComponentFixture<Erro2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Erro2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Erro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
