import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkDetailsComponent } from './mark-details.component';

describe('MarkDetailsComponent', () => {
  let component: MarkDetailsComponent;
  let fixture: ComponentFixture<MarkDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkDetailsComponent]
    });
    fixture = TestBed.createComponent(MarkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
