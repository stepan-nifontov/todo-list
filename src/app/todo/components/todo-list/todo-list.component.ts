import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TodoItemModel } from '../../models/todo-item.model';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['todo-list-component.scss']
})
export class TodoListComponent implements OnInit {

  public tasks: TodoItemModel[] = [];
  constructor(
    private TodoService: TodoService
  ) { }

  ngOnInit(): void {
    this.TodoService.update.subscribe((val: TodoItemModel[]) => {
      this.tasks = val
    })
    this.TodoService.updateTasks();
  }
}
