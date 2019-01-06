import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyheaderSigninPanelComponent } from './myheader-signin-panel.component';

describe('MyheaderSigninPanelComponent', () => {
  let component: MyheaderSigninPanelComponent;
  let fixture: ComponentFixture<MyheaderSigninPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyheaderSigninPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyheaderSigninPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
