import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { FormsModule } from '@angular/forms';
import { TodoItemsComponent } from './todos/todo-items/todo-items.component';
import { EditTodoDialogComponent } from './todos/edit-todo-dialog/edit-todo-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatDialogModule} from '@angular/material/dialog'
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemsComponent,
    EditTodoDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
