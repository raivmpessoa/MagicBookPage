import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acerto5Component } from './acerto5.component';

describe('Acerto5Component', () => {
  let component: Acerto5Component;
  let fixture: ComponentFixture<Acerto5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acerto5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Acerto5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
