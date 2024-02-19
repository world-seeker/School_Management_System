import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkFormComponent } from './mark-form.component';

describe('MarkFormComponent', () => {
  let component: MarkFormComponent;
  let fixture: ComponentFixture<MarkFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkFormComponent]
    });
    fixture = TestBed.createComponent(MarkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
