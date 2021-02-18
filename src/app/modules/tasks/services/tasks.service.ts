import { Injectable } from '@angular/core';
import { Utils } from 'src/app/utils/utils';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  fetchTasks(): Task[] {
    return [
      { id: Utils.generateId(), content: 'Task 1', isCompleted: true }
    ];
  }

}
