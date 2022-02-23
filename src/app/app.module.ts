import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './mycomponents/todos/todos.component';
import { AddTodoComponent } from './mycomponents/add-todo/add-todo.component';
import { TodoItemComponent } from './mycomponents/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './mycomponents/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AddTodoComponent,
    TodoItemComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  schemas :[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
