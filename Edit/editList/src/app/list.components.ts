import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos">
        {{ todo }}
        <button (click)="removeTodo(todo)">Usuń</button>
      </li>
    </ul>
  `,
  styles: [`
    ul {
      list-style-type: none;
    }
    li {
      margin-bottom: 10px;
    }
    button {
      background-color: #e53935;
      color: #fff;
      border: 2px;
      padding: 5px 10px;
      cursor: pointer;
    }
  `]
})

export class ListComponent {
  todos: string[];

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  removeTodo(todo: string): void {
    this.todoService.removeTodo(todo);
  }
}

