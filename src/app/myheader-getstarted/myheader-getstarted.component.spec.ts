import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyheaderGetstartedComponent } from './myheader-getstarted.component';

describe('MyheaderGetstartedComponent', () => {
  let component: MyheaderGetstartedComponent;
  let fixture: ComponentFixture<MyheaderGetstartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyheaderGetstartedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyheaderGetstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
