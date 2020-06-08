import {Component, Input, OnInit} from '@angular/core';
import {Board} from '../model-interfaces/board';

@Component({
  selector: 'app-board-list-item',
  templateUrl: './board-list-item.component.html',
  styleUrls: ['./board-list-item.component.css']
})
export class BoardListItemComponent implements OnInit {

  @Input() board: Board;

  constructor() { }

  ngOnInit(): void {
  }

}
