import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';
import { TodoEditComponent } from './pages/todo-edit/todo-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'todos/list', pathMatch: 'full' },
  { path: 'todos/list', component: TodoListComponent },
  { path: 'todos/ajouter', component: TodoAddComponent },
  { path: 'todos/modifier/:id', component: TodoEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
