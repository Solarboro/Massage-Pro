import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevPanelDateItemDaysComponent } from './rev-panel-date-item-days.component';

describe('RevPanelDateItemDaysComponent', () => {
  let component: RevPanelDateItemDaysComponent;
  let fixture: ComponentFixture<RevPanelDateItemDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevPanelDateItemDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevPanelDateItemDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
