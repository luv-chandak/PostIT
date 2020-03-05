import { Component,OnInit  } from '@angular/core';
import { Store, Action, State, select } from '@ngrx/store';
import { Task } from './Task/task.model';
import * as fromTasks from './Task/task.action';
import { reducers, getTodos, TaskState } from './Task/index';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent  implements OnInit {
  title = 'PostIT-APP';

  constructor(private _store: Store<TaskState>){

  }

  ngOnInit() {
   // this._store.dispatch(new fromTasks.LoadTaskBegin());
  }

   addTodo(input) {
    if (input.value.length === 0) return;
    this._store.dispatch(
      new fromTasks.AddTask(
        <Task>{ text: input.value, completed: false }
      )
    );
    input.value = '';
  }

}


