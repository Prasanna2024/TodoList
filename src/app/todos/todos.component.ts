import { Component, EventEmitter, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.module';
import { DataService } from '../shared/data.service';
import { NgForm, NgModel } from '@angular/forms'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  todo: Todo[];
  updatedindex:number = 0;
  value:string="";
  constructor(private dataservices: DataService) 
  {
    this.todo = this.dataservices.getAllTodos();
  }
  updatevalue(form:NgForm)
  {
    this.dataservices.addTodo(form.value);
    this.value='';
  }
  checkchanges(form:NgModel){
    console.log("hello this is add" + form+ "--->");
  }
  changeToDo(td:Todo){
    this.dataservices.updateTodo(this.updatedindex,td,this.updatedindex);
  }
  changeindex(ind:number)
  {
    this.updatedindex = ind;
  }
  
}
