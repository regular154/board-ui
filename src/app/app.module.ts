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

import { APP_INITIALIZER} from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8184/auth',
        realm: 'snowboard',
        clientId: 'board-ui',
      },
      // initOptions: {
      //   onLoad: 'check-sso',
      //   silentCheckSsoRedirectUri:
      //     window.location.origin + '/assets/silent-check-sso.html',
      // },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false
      },
      enableBearerInterceptor: true
    });
}


@NgModule({
  declarations: [
    AppComponent,
    BoardListComponent,
    BoardListItemComponent,
    HomeComponent,
    FilterItemComponent,
    PaginationComponent,
    FilteringComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    KeycloakAngularModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
