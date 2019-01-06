import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevitemMsgCommentComponent } from './revitem-msg-comment.component';

describe('RevitemMsgCommentComponent', () => {
  let component: RevitemMsgCommentComponent;
  let fixture: ComponentFixture<RevitemMsgCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevitemMsgCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevitemMsgCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
