import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erro1Component } from './erro1.component';

describe('Erro1Component', () => {
  let component: Erro1Component;
  let fixture: ComponentFixture<Erro1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Erro1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Erro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
