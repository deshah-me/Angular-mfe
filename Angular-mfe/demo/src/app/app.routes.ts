import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo-list',
    pathMatch: 'full',
  },
  {
    path: 'todo-list',
    // component: TodoListComponent,
    // pathMatch: 'full',
    loadChildren: () =>
      import('./todo-list/todo-list.module').then((m) => m.TodoListModule),
  },
];
