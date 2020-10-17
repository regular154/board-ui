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
    Object.keys(this.filter.values).forEach(key => {
      const item = new FilterValue();
      item.name = key;
      item.count = this.filter.values[key];
      this.filterValues.push(item);
    });
  }

  getFilterValue(filterName: string, value: string) {
    this.requestedFilterValue.emit({[filterName]: value});
  }

}
