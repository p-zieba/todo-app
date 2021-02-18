import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Utils } from 'src/app/utils/utils';
import { Task } from '../../models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    taskContent: ['', Validators.required]
  });
  tasks: Task[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data
      .pipe(map((data) => data.tasks))
      .subscribe((tasks) => this.tasks = tasks);
  }

  addTask(): void {
    if (this.form.valid) {
      this.tasks.push({ id: Utils.generateId(), content: this.form.value.taskContent, isCompleted: false });
      this.form.controls['taskContent'].setValue('');
    }
  }

  removeTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  toggleTask(task: Task): void {
    task.isCompleted = !task.isCompleted;
  }

}
