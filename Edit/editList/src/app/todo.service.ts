import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: string[] = ['napisz poprawnie kod','usuń kod','edytuj kod', 'zadzwoń do Saula','kup książkę','zacznij się odchudzać'];
  favorites: any[]=[];

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
  addToFavorites(task: any){
    this.favorites.push(task);
    task.isFavorite = true;
  }
  removeFromFavorites(task: any){
    let index = this.favorites.indexOf(task);
    if (index>-1){
      this.favorites.splice(index,1);
      task.isFavorite = false;
    }
  }
  getFavorites() {
    return this.favorites;
  }
  isFavorite(task: any){
    return this.favorites.includes(task);
  }
}
