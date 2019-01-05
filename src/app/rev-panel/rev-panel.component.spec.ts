import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevPanelComponent } from './rev-panel.component';

describe('RevPanelComponent', () => {
  let component: RevPanelComponent;
  let fixture: ComponentFixture<RevPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
