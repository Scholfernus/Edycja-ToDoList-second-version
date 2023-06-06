import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: string[] = ['napisz poprawnie kod','usuń kod','edytuj kod', 'zadzwoń do Sola','kup książkę','zacznij się odchudzać'];

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
}
