import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTaskComponent } from './list-task/list-task.component';

import { reducers, metaReducers } from "./Task/index";
import { StoreModule } from "@ngrx/store";

import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './Task/task.effects';
import { TaskService } from './Task/task.service'; 

@NgModule({
  declarations: [
    AppComponent,
    ListTaskComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([TaskEffects]),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
