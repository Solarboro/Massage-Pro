import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevitemDialogCancelComponent } from './revitem-dialog-cancel.component';

describe('RevitemDialogCancelComponent', () => {
  let component: RevitemDialogCancelComponent;
  let fixture: ComponentFixture<RevitemDialogCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevitemDialogCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevitemDialogCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
