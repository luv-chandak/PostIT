import { Task, Tasks } from './task.model';
import { TaskActions, TaskActionTypes } from './task.action';
import { State } from '@ngrx/store';

export const initialState: Array<Task> = [];

export const reducer = (state = initialState, action: TaskActions): Array<Task> => {
  switch (action.type) {
    case TaskActionTypes.AddTask: 
      return state.concat(<Task>{
          id: action.payload.id,
          text: action.payload.text,
          completed: action.payload.completed
        });

    case TaskActionTypes.DeleteTask:
      return state.filter(todo => todo.id != action.payload.id);

      case TaskActionTypes.LoadTaskBegin: {
        return state.concat(<Task>{
          loading: true
        });
      }
  
      case TaskActionTypes.LoadTaskSuccess: {
        return 
        return state.concat(<Task>{
          loading: true
        });
      }
    default:
      return state;
  }
}; 
