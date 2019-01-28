import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedRequestComponent } from './saved-request.component';

describe('SavedRequestComponent', () => {
  let component: SavedRequestComponent;
  let fixture: ComponentFixture<SavedRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
