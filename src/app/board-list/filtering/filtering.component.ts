import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Filter} from '../../model-interfaces/filter';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']
})
export class FilteringComponent implements OnInit {

  @Input() filters: Filter[];
  @Output() requestedFilters = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  getSelectedFilters() {
    const selectedFilters: SelectedFilters = {};
    this.filters.forEach(value => {
      if (value.selectedValue) { selectedFilters[value.name] = value.selectedValue; }
    });
    return selectedFilters;
  }

  getFilters(filter: object) {
    const selectedFilters: SelectedFilters = this.getSelectedFilters();
    Object.keys(filter).forEach(key => {selectedFilters[key] = filter[key]; });
    this.requestedFilters.emit(selectedFilters);
  }

}

interface SelectedFilters {
  [key: string]: any;
}
