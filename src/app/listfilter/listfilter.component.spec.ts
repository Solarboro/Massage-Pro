import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfilterComponent } from './listfilter.component';

describe('ListfilterComponent', () => {
  let component: ListfilterComponent;
  let fixture: ComponentFixture<ListfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
