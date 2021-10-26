import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acerto1Component } from './acerto1.component';

describe('Acerto1Component', () => {
  let component: Acerto1Component;
  let fixture: ComponentFixture<Acerto1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acerto1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Acerto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
