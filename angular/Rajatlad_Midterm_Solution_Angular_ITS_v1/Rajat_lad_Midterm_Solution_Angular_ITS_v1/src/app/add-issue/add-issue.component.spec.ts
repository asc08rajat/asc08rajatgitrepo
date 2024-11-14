import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddissueComponent } from './add-issue.component';

describe('AddIssueComponent', () => {
  let component: AddissueComponent;
  let fixture: ComponentFixture<AddissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddissueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
