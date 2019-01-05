import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevitemComponent } from './revitem.component';

describe('RevitemComponent', () => {
  let component: RevitemComponent;
  let fixture: ComponentFixture<RevitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
