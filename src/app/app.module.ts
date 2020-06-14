import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardListItemComponent } from './board-list-item/board-list-item.component';
import { HomeComponent } from './home/home.component';
import { FilterItemComponent } from './board-list/filtering/filter-item/filter-item.component';
import { PaginationComponent } from './board-list/pagination/pagination.component';
import { FilteringComponent } from './board-list/filtering/filtering.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardListComponent,
    BoardListItemComponent,
    HomeComponent,
    FilterItemComponent,
    PaginationComponent,
    FilteringComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
