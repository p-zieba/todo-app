import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './components/tasks/tasks.component';
import { RouterModule } from '@angular/router';
import { TasksResolver } from './resolvers/tasks.resolver';
import { TasksGuard } from './tasks.guard';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', canActivate: [TasksGuard], component: TasksComponent, resolve: { tasks: TasksResolver } }
    ])
  ]
})
export class TasksModule { }
