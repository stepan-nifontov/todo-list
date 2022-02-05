import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoModule } from './todo/todo.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => TodoModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
