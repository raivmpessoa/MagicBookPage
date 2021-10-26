import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acerto3Component } from './acerto3.component';

describe('Acerto3Component', () => {
  let component: Acerto3Component;
  let fixture: ComponentFixture<Acerto3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acerto3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Acerto3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
