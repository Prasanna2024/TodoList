import { Component } from '@angular/core';
import { Todo } from './shared/todo.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todo:Todo[];
}
