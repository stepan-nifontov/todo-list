import { Component, Input, OnInit } from '@angular/core';
import { TodoItemModel } from '../../models/todo-item.model';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() public task: TodoItemModel | undefined;

  constructor(private TodoService: TodoService) { }

  ngOnInit(): void {
  }

  public delete(id: number): void {
    this.TodoService.deleteTask(id);
  }

  public completeTask(id: number) {
    this.TodoService.completeTask(id);
  }

}
