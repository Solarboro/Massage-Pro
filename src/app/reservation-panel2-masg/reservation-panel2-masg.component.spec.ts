import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPanel2MasgComponent } from './reservation-panel2-masg.component';

describe('ReservationPanel2MasgComponent', () => {
  let component: ReservationPanel2MasgComponent;
  let fixture: ComponentFixture<ReservationPanel2MasgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationPanel2MasgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationPanel2MasgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
