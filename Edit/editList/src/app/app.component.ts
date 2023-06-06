import { Component, ViewChild, ElementRef, Inject } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('editedTodoInput', { static: false }) editedTodoInput!: ElementRef<HTMLInputElement>;

  todos: string[] = [];
  newTodo: string = '';
  editedTodoIndex: number = -1;
  editedTodo: string = '';

  constructor(@Inject(TodoService) private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodo.trim() !== '') {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = '';
    }
  }

  removeTodoIndex(index: number): void {
    this.todoService.removeTodo(this.todos[index]);
  }

  editTodoIndex(index: number): void {
    this.editedTodoIndex = index;
    this.editedTodo = this.todos[index];
  }

  saveTodoIndex(index: number): void {
    this.todoService.editTodo(this.todos[index], this.editedTodo);
    this.editedTodoIndex = -1;
    this.editedTodo = '';
  }

  removeAllTodos(): void {
    this.todoService.clearTodos();
    this.todos = this.todoService.getTodos();
    this.newTodo = '';
  }
}
