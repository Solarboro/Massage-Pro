import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevPanelDateItemDurationsComponent } from './rev-panel-date-item-durations.component';

describe('RevPanelDateItemDurationsComponent', () => {
  let component: RevPanelDateItemDurationsComponent;
  let fixture: ComponentFixture<RevPanelDateItemDurationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevPanelDateItemDurationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevPanelDateItemDurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
