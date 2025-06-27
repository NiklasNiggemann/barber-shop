import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { Service } from '../models/service';

@Component({
  selector: 'app-service-single-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-single-select.component.html',
  styleUrls: ['./service-single-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ServiceSingleSelectComponent),
      multi: true
    }
  ]
})
export class ServiceSingleSelectComponent implements OnInit, ControlValueAccessor {

  constructor(private service: ServiceService) {}

  @Input() selected: Service = new Service(0, "");
  all: Service[] = [];

  ngOnInit(): void {
    this.all = this.service.getAll();
  }

  onSelectionChanged(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const selectedService = select.value;
    const service = this.all.find(e => e.name === selectedService);
    if (service) {
      this.selected = service;
      this.onChange(service);
      this.onTouched();
    }
  }

  onChange: (service: Service | null) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(service: Service): void {
    this.selected = service;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  isSelected(service: Service): boolean {
    return this.selected != null && this.selected.name === service.name;
  }
}
