import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/shared/todo.module';
import { MatDialog } from '@angular/material/dialog'
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent {
  constructor(private dialog: MatDialog) { }
  @Input() todo: Todo[];
  @Output() updateAndSave: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() updateIndex:EventEmitter<number> = new EventEmitter<number>();
  clickfunction(gt: Todo) {
    let index: number = this.todo.indexOf(gt);
    this.todo[index].completed = !this.todo[index].completed;
    console.log(this.todo[index]);
  }
  delete(td: Todo) {
    let index: number = this.todo.indexOf(td);
    this.todo.splice(index, 1);
    return alert("Do you want to delete this!");
  }


  edit(td: Todo) {
    let index: number = this.todo.indexOf(td);
    this.updateIndex.emit(index);
    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '500px',
      data: td
    });


    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.updateAndSave.emit(result);
      }
    })

  }
}


