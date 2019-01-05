import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyheaderMenuComponent } from './myheader-menu.component';

describe('MyheaderMenuComponent', () => {
  let component: MyheaderMenuComponent;
  let fixture: ComponentFixture<MyheaderMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyheaderMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyheaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
