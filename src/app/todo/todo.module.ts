import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoLayoutComponent } from './components/todo-layout/todo-layout.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoService } from './todo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoItemComponent } from './components/todo-item/todo-item.component';



@NgModule({
  declarations: [
    TodoLayoutComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [TodoService],
  exports: [
    TodoLayoutComponent
  ]
})
export class TodoModule { }
