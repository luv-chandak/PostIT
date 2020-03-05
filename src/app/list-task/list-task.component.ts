import { Component, OnInit } from '@angular/core';
import { reducers, getTodos, TaskState } from '../Task/index';
import { Task } from '../Task/task.model';
import { Observable } from 'rxjs';
import { Store, Action, State, select } from '@ngrx/store';
import * as fromTasks from '../Task/task.action';
import { TaskService } from '../Task/task.service'; 

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html'
})
export class ListTaskComponent implements OnInit {
  sticky: Observable<Task>;

constructor(private _store: Store<TaskState>,private _taskService : TaskService   ) { 
    this.sticky = _store.select(getTodos);
  }

  ngOnInit(): void {
    this.getTask();

    this._taskService.postTasks();
  }

  removeTask(id) {
    this._store.dispatch(
      new fromTasks.DeleteTask(<Task>{ id })
    );
  }


  getTask() {


     this._taskService.getTasks().subscribe(
          data => { console.log(data)},
          err => console.error(err),
         () => console.log('done loading task')
       ); 
     }

}
