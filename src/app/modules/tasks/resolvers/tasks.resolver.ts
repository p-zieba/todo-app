import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task';
import { TasksService } from '../services/tasks.service';

@Injectable({
  providedIn: 'root'
})
export class TasksResolver implements Resolve<Task[]> {

  constructor(
    private tasksService: TasksService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task[]> {
    return of(this.tasksService.fetchTasks());
  }
}
