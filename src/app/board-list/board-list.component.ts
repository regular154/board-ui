import { Component, OnInit } from '@angular/core';
import {BoardService} from '../board.service';
import {BoardResponse} from '../model-interfaces/board-response';


@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  boardResponse: BoardResponse;

  ngOnInit(): void {
    this.boardService.getBoards()
      .subscribe((data: BoardResponse) => this.boardResponse = {...data});
  }

  getNewPage(page: string) {
    this.boardService.getBoardsPage(page)
      .subscribe((data: BoardResponse) => this.boardResponse = {...data});
  }

  getBoardsByFilters(filters: object) {
    this.boardService.getBoardsByFilters(filters)
      .subscribe((data: BoardResponse) => this.boardResponse = {...data});
  }
}
