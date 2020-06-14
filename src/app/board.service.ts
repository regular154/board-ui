import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {BoardResponse} from './model-interfaces/board-response';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }

  boardUrl = 'http://localhost:8080/boards';

  getBoards(pageSize: string, page: string): Observable<BoardResponse> {
    return this.http
      .get<BoardResponse>(this.boardUrl, {params: {pageSize, page}});
  }
}
