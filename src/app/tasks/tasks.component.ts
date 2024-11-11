import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {

  @Input({ required: true }) userId!: string
  @Input({ required: true }) name!: string
  isAddignTask = false;

  constructor(private taskService: TasksService) { }

  get selectedUserTasks() {
    return this.taskService.getUserTaksks(this.userId);
  }

  onStartAddTask() {
    this.isAddignTask = true;
  }

  onCloseTask(isCanceld: boolean) {
    this.isAddignTask = isCanceld;
  }

  // onAddTask(newTask: newTaskData) {

  //   this.isAddignTask = false;
  // }
}
