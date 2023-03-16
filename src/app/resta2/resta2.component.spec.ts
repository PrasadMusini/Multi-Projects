import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resta2Component } from './resta2.component';

describe('Resta2Component', () => {
  let component: Resta2Component;
  let fixture: ComponentFixture<Resta2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Resta2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
