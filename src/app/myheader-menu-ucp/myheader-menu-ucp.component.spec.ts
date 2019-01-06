import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyheaderMenuUcpComponent } from './myheader-menu-ucp.component';

describe('MyheaderMenuUcpComponent', () => {
  let component: MyheaderMenuUcpComponent;
  let fixture: ComponentFixture<MyheaderMenuUcpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyheaderMenuUcpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyheaderMenuUcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
