import { Injectable } from '@angular/core';
import { Todo } from './todo.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todo:Todo[]=[
    new Todo('prasanna',true),
    new Todo('kavin is a beautiful and handsome smiling boy with normal and caussllss owowowowowowoowoow')
  ]
  constructor() { 
    
  }
  getAllTodos()
  {
    return this.todo;
  }
  addTodo(todo:Todo)
  {
    this.todo.push(todo);
  }
  updateTodo(index:number, updated:Todo,compindex:number) 
  {
    updated.completed = this.todo[compindex].completed;
    this.todo[index] = updated;
  }
  delete(index:number)
  {
    this.todo.slice(index,1);
  }
}
