import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: {
    id: string;
    todo: string;
    isChecked: boolean;
  }[] = [];
  userInput:string;

  constructor() {}

  onAdd(todo: string) {
    this.todos.push({
      id: uuidv4(),
      todo,
      isChecked: false,
    })
    this.userInput = '';
  }

  deletedTodo(todoId: string) {
    this.todos = this.todos.filter((todo) => {
      return  todo.id !== todoId;
    })
  }
}
