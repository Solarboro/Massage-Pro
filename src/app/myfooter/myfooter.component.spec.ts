import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfooterComponent } from './myfooter.component';

describe('MyfooterComponent', () => {
  let component: MyfooterComponent;
  let fixture: ComponentFixture<MyfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
