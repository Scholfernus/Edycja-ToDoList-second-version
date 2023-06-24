import { Injectable } from '@angular/core';

interface Task {
  name: string;
  isFavorite: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: string[] = ['napisz poprawnie kod','usuń kod','edytuj kod', 'zadzwoń do Saula','kup książkę','zacznij się odchudzać'];
  private favorites: Task[] = [];

  constructor() {}

  getTodos(): string[] {
    return this.todos;
  }

  addTodo(todo: string): void {
    this.todos.push(todo);
  }

  removeTodo(todo: string): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  editTodo(oldTodo: string, newTodo: string): void {
    const index = this.todos.indexOf(oldTodo);
    if (index !== -1) {
      this.todos[index] = newTodo;
    }
  }

  clearTodos(): void {
    this.todos = [];
  }

  getFavorites(): Task[] {
    return this.favorites;
  }

  addToFavorites(todoName: string): void {
    const todo = this.todos.find(todo => todo === todoName);
    if (todo) {
      const task: Task = { name: todo, isFavorite: true };
      this.favorites.push(task);
    }
  }

  removeFromFavorites(task: Task): void {
    const index = this.favorites.indexOf(task);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }
}
