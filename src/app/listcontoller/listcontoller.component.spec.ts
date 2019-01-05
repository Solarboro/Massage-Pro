import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcontollerComponent } from './listcontoller.component';

describe('ListcontollerComponent', () => {
  let component: ListcontollerComponent;
  let fixture: ComponentFixture<ListcontollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcontollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcontollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
