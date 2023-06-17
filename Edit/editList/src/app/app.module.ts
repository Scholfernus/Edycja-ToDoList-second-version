import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { ListComponent } from './list.components';
import { FavoritesTodoComponent } from './favorites-todo/favorites-todo.component';

@NgModule({
  declarations: [AppComponent, ListComponent, FavoritesTodoComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
