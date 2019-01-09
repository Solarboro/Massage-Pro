import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPanel2MasgListItemComponent } from './reservation-panel2-masg-list-item.component';

describe('ReservationPanel2MasgListItemComponent', () => {
  let component: ReservationPanel2MasgListItemComponent;
  let fixture: ComponentFixture<ReservationPanel2MasgListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationPanel2MasgListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationPanel2MasgListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
