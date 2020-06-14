import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Filter} from '../../../model-interfaces/filter';
import {FilterValue} from '../../../model-objects/filter-value';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent implements OnInit {

  @Input() filter: Filter;
  @Output() requestedFilterValue = new EventEmitter<object>();
  filterValues: FilterValue[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.getFilterValues();
  }

  getFilterValues() {
    const values = Object.keys(this.filter.values);
    for (const prop of values) {
      const item = new FilterValue();
      item.name = prop;
      item.count = values[prop];
      this.filterValues.push(item);
    }
  }

  getFilterValue(filterName: string, value: string) {
    this.requestedFilterValue.emit({[filterName]: value});
  }

}
