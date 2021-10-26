import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acerto4Component } from './acerto4.component';

describe('Acerto4Component', () => {
  let component: Acerto4Component;
  let fixture: ComponentFixture<Acerto4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acerto4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Acerto4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
