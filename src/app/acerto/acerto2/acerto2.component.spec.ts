import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acerto2Component } from './acerto2.component';

describe('Acerto2Component', () => {
  let component: Acerto2Component;
  let fixture: ComponentFixture<Acerto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Acerto2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Acerto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
