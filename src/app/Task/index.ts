import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
  
  import { Tasks, Task } from './task.model';
  import * as tasks from './task.reducer';
  import { select } from '@ngrx/store';
  import { map } from 'rxjs/operators';
  
  export interface TaskState extends Tasks { }
  
  export const reducers: ActionReducerMap<TaskState> = {
    tasks: tasks.reducer
  };
  
  export const metaReducers: MetaReducer<TaskState>[] = [];
  
  export const selectTodos = (state: TaskState) => state.tasks;
  

  export const getTodos = s => s.tasks; 
  export const getCurrentFilter = s => s.currentFilter; 
  export const getErrors = s => s.errors;
  
