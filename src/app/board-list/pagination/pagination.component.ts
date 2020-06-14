import {Component, Input, OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() page: number;
  @Input() pages: number;
  @Output() requestedPage = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

  getNewPage(index: number) {
    this.requestedPage.emit(index.toString());
  }

}
