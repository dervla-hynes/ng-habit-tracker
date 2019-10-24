import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterButtonComponent } from './enter-button.component';

describe('EnterButtonComponent', () => {
  let component: EnterButtonComponent;
  let fixture: ComponentFixture<EnterButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
