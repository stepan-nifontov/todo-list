import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoFormModel } from '../../models/todo-form.model';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  public todoForm: FormGroup = new FormGroup(
    {
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    }
  )
  constructor(
    private _TodoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  public onSubmit(vale: TodoFormModel): void {
    this._TodoService.addTask(vale);
    this.todoForm.reset();
  }
}
