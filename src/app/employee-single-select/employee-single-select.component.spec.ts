import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSingleSelectComponent } from './employee-single-select.component';

describe('EmployeeSingleSelectComponent', () => {
  let component: EmployeeSingleSelectComponent;
  let fixture: ComponentFixture<EmployeeSingleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeSingleSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSingleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
