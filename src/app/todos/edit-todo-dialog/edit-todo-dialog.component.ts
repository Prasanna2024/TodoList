import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Todo } from 'src/app/shared/todo.module';
@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss']
})
export class EditTodoDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo
  ) {

  }
  onFormSubmit(form: NgForm) {
    console.log(form);
  }
  close() {
    this.dialogRef.close();
  }
  save(form: NgForm) {
    console.log(form.value);
    this.dialogRef.close(form.value);
  }
}
