import { Component, ViewChild, ElementRef } from '@angular/core';
import { TodoService } from './todo.service';
import { Router } from '@angular/router';

interface Task {
  name: string;
  isFavorite: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('editedTodoInput', { static: false }) editedTodoInput!: ElementRef<HTMLInputElement>;

  todos: Task[] = [];
  newTodo: string = '';
  editedTodoIndex: number = -1;
  editedTodo: string = '';
  favorites: Task[] = [];

  constructor(private todoService: TodoService, private router: Router) {
    this.todos = this.todoService.getTodos().map(todo => ({ name: todo, isFavorite: false }));
    this.updateFavorites();
  }
  showFavorites: boolean = false;
  updateFavorites(): void {
    this.favorites = this.todoService.getFavorites();
  }

  addTodo(): void {
    if (this.newTodo.trim() !== '') {
      const newTask: Task = { name: this.newTodo, isFavorite: false };
      this.todoService.addTodo(newTask.name);
      this.todos.push(newTask);
      this.newTodo = '';
    }
  }

  removeTodoIndex(index: number): void {
    const removedTask = this.todos[index];
    this.todoService.removeTodo(removedTask.name);
    this.todos.splice(index, 1);
  }

  editTodoIndex(index: number): void {
    this.editedTodoIndex = index;
    this.editedTodo = this.todos[index].name;
  }

  saveTodoIndex(index: number): void {
    this.todoService.editTodo(this.todos[index].name, this.editedTodo);
    this.todos[index].name = this.editedTodo;
    this.editedTodoIndex = -1;
    this.editedTodo = '';
  }

  removeAllTodos(): void {
    this.todoService.clearTodos();
    this.todos = [];
    this.newTodo = '';
  }

  addToFavorites(todo: Task): void {
    this.todoService.addToFavorites(todo.name);
    this.updateFavorites();
  }

  viewFavorites(): void {
    this.showFavorites = true;
  }

  removeFromFavorites(task: Task): void {
    this.todoService.removeFromFavorites(task);
    this.updateFavorites();
  }
}
