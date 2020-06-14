import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {BoardResponse} from './model-interfaces/board-response';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) {
    this.defaultPageSize = '9';
  }

  defaultPageSize: string;

  boardUrl = 'http://localhost:8080/boards';

  getBoards(): Observable<BoardResponse> {
    return this.http
      .get<BoardResponse>(this.boardUrl, {params: {pageSize: this.defaultPageSize}});
  }

  getBoardsPage(page: string): Observable<BoardResponse> {
    return this.http
      .get<BoardResponse>(this.boardUrl, {params: {pageSize: this.defaultPageSize, page}});
  }

  getBoardsByFilters(filters: object): Observable<BoardResponse> {
    const params: Params = {};
    params.pageSize = this.defaultPageSize;
    Object.keys(filters).forEach(key => params[key] = filters[key]);
    return this.http
      .get<BoardResponse>(this.boardUrl, {params});
  }
}

interface Params {
  [key: string]: any;
}
