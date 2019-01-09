import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevPanelDateItemComponent } from './rev-panel-date-item.component';

describe('RevPanelDateItemComponent', () => {
  let component: RevPanelDateItemComponent;
  let fixture: ComponentFixture<RevPanelDateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevPanelDateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevPanelDateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
