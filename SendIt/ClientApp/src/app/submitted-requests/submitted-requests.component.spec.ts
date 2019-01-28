import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedRequestsComponent } from './submitted-requests.component';

describe('SubmittedRequestsComponent', () => {
  let component: SubmittedRequestsComponent;
  let fixture: ComponentFixture<SubmittedRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
