import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevPanelDateItemMasgPanelComponent } from './rev-panel-date-item-masg-panel.component';

describe('RevPanelDateItemMasgPanelComponent', () => {
  let component: RevPanelDateItemMasgPanelComponent;
  let fixture: ComponentFixture<RevPanelDateItemMasgPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevPanelDateItemMasgPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevPanelDateItemMasgPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
