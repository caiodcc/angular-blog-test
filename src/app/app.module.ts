import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForStartComponent } from './components/for-start/for-start.component';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchBarSnippetComponent } from './components/search-bar/snippet/search-bar-snippet/search-bar-snippet.component';




@NgModule({
  declarations: [
    AppComponent,
    ForStartComponent,
    SearchBarComponent,
    SearchBarSnippetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
