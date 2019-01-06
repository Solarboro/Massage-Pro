import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevitemMsgOntimeComponent } from './revitem-msg-ontime.component';

describe('RevitemMsgOntimeComponent', () => {
  let component: RevitemMsgOntimeComponent;
  let fixture: ComponentFixture<RevitemMsgOntimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevitemMsgOntimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevitemMsgOntimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
