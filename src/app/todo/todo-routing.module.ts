import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoLayoutComponent } from './components/todo-layout/todo-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/layout',
    pathMatch: 'full',
  },
  {
    path: 'layout',
    component: TodoLayoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
