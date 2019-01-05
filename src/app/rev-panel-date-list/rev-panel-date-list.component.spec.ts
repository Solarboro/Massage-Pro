import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevPanelDateListComponent } from './rev-panel-date-list.component';

describe('RevPanelDateListComponent', () => {
  let component: RevPanelDateListComponent;
  let fixture: ComponentFixture<RevPanelDateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevPanelDateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevPanelDateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
