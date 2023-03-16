import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restra3Component } from './restra3.component';

describe('Restra3Component', () => {
  let component: Restra3Component;
  let fixture: ComponentFixture<Restra3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Restra3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Restra3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
