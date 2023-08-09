import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForStartComponent } from './components/for-start/for-start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

import { FilterPipe } from './components/services/interfaces/filter.pipe';
import { HeaderComponent } from './components/header/header.component';
import { AdminPostComponent } from './components/admin-post/admin-post.component';
import { HomeStructureComponent } from './components/home-structure/home-structure.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ContentComponent } from './components/content/content.component';




@NgModule({
  declarations: [
    AppComponent,
    ForStartComponent,
    SearchBarComponent,
    FilterPipe,
    HeaderComponent,
    AdminPostComponent,
    HomeStructureComponent,
    LoginPageComponent,
    ContentComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
