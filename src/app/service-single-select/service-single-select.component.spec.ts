import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSingleSelectComponent } from './service-single-select.component';

describe('ServiceSingleSelectComponent', () => {
  let component: ServiceSingleSelectComponent;
  let fixture: ComponentFixture<ServiceSingleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceSingleSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSingleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
