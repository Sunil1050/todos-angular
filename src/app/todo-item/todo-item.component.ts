import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todoItem: { id: string; todo: string; isChecked: boolean };
  @Output() deleteTodo = new EventEmitter<string>();
  isChecked: boolean;


  constructor() {}

  checkValue() {
    console.log('CHeckbox status: ', this.isChecked);
  }

  onDeleteTodo() {
    this.deleteTodo.emit(this.todoItem.id);
  }
}
