import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import {SearchComponent}  from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,NgbModule,
  ],
  providers: [],
  bootstrap: [CardsComponent ]
})
export class AppModule { }
