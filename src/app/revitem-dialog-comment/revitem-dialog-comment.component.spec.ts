import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevitemDialogCommentComponent } from './revitem-dialog-comment.component';

describe('RevitemDialogCommentComponent', () => {
  let component: RevitemDialogCommentComponent;
  let fixture: ComponentFixture<RevitemDialogCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevitemDialogCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevitemDialogCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
