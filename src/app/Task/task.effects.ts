import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, timer, of } from 'rxjs';
import { map, tap, mergeMap, catchError,switchMap } from 'rxjs/operators';
import { AddTask, TaskActionTypes, AddTaskEffect,LoadTaskBegin,LoadTaskSuccess   } from './task.action';
import { TaskService } from "./task.service";

@Injectable()
export class TaskEffects {
  constructor(
    private actions$: Actions, private taskService: TaskService
  ) { }

  @Effect()
  addTodoAsync$ = this.actions$.pipe(ofType<AddTaskEffect>(TaskActionTypes.AddTaskEffect),
    mergeMap(action => timer(2000).pipe(
      tap(() => {
      })
    ))
   )

   loaddata$ = this.actions$.pipe(ofType<LoadTaskBegin>(TaskActionTypes.LoadTaskBegin),
      switchMap(() => this.taskService.getTasks()),
      switchMap((data) => of(new LoadTaskSuccess({ items: data })))
  );
}