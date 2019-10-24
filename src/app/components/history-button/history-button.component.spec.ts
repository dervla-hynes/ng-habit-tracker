import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryButtonComponent } from './history-button.component';

describe('HistoryButtonComponent', () => {
  let component: HistoryButtonComponent;
  let fixture: ComponentFixture<HistoryButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
