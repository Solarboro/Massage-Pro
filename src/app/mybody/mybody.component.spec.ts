import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybodyComponent } from './mybody.component';

describe('MybodyComponent', () => {
  let component: MybodyComponent;
  let fixture: ComponentFixture<MybodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
