import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPanel2MasgListComponent } from './reservation-panel2-masg-list.component';

describe('ReservationPanel2MasgListComponent', () => {
  let component: ReservationPanel2MasgListComponent;
  let fixture: ComponentFixture<ReservationPanel2MasgListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationPanel2MasgListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationPanel2MasgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
