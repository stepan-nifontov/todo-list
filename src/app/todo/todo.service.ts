import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { TodoFormModel } from './models/todo-form.model';
import { TodoItemModel } from './models/todo-item.model';

@Injectable()
export class TodoService {

  protected tasks: TodoItemModel[] = [];
  public update: Subject<TodoItemModel[]> = new Subject();

  constructor() { }

  public addTask(fromValue: TodoFormModel): void {
    this.tasks.unshift(
      {
        title: fromValue.title,
        description: fromValue.description,
        id: this.getRandomId(),
        isCompleted: false
      }
    );

    this.setTasks(this.tasks);
  }

  public deleteTask(id: number): void {
    const filteredTasks = this.tasks.filter(item => item.id !== id);
    this.setTasks(filteredTasks);
  }

  public completeTask(id: number): void {
    this.tasks.map(item => item.id === id ? item.isCompleted = true : item.isCompleted = false);
    this.setTasks(this.tasks);
  }

  public setTasks(tasks: TodoItemModel[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.updateTasks();
  }

  public updateTasks(): void {
  this.update.next(this.getData());
}

  private getRandomId(): number {
  return Math.floor((Math.random() * 1000) + 1);
}

  private getData(): TodoItemModel[] {
  const data: string = localStorage.getItem('tasks') as string;
  this.tasks = data && data.length ? JSON.parse(data) : [];
  return this.tasks
}
}
