import { Action } from '@ngrx/store';
import { Task } from './task.model';

export enum TaskActionTypes {
  AddTask = '[Task] Add Task',
  AddTaskEffect = '[Task] Add Task Effect',
  DeleteTask = '[Task] Delete Task',
  LoadTaskBegin = "[Task] Load Task begin",
  LoadTaskSuccess = "[Task] Load Task success",
}

let currentId = 1;

export class AddTask implements Action {
  readonly type = TaskActionTypes.AddTask;
  id: number;

  constructor(public payload: Task) {
    payload.id = currentId++;
  }
}

export class AddTaskEffect implements Action {
  readonly type = TaskActionTypes.AddTaskEffect;

  constructor(public payload: Task) {
    payload.id = currentId++;
  }
}


export class DeleteTask implements Action {
  readonly type = TaskActionTypes.DeleteTask;

  constructor(public payload: { id: number }) {}
}

export class LoadTaskBegin implements Action {
  readonly type = TaskActionTypes.LoadTaskBegin;
}

export class LoadTaskSuccess implements Action {
  readonly type = TaskActionTypes.LoadTaskSuccess;

  constructor(public payload: { items: any }) {}
}



export type TaskActions = AddTask | DeleteTask | AddTaskEffect | LoadTaskBegin | LoadTaskSuccess ;
