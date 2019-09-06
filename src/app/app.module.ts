import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import {ModalModule} from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './Hero-detail/hero-detail.component';
import { AppComponent } from './Component/app.component';
import {HeroesComponent} from './HeroesComponent/heroes.component';
import {RouterModule} from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './Services/in-memory-data.service';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    AppComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
/*    HttpClientInMemoryWebApiModule.forRoot(
      this.InMemoryDataService, { dataEncapsulation: false }
    )*/

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static InMemoryDataService: InMemoryDataService;
}

export class AppBootstrapModule  {
}
