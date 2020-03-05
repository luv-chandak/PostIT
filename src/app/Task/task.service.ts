import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from "@ngrx/store";


@Injectable()
export class TaskService {
 
    constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getTasks() {
        return this.http.get('https://my-json-server.typicode.com/luv-chandak/PostIT/posts');
    }

    postTasks() {
        this.http.post('https://my-json-server.typicode.com/luv-chandak/PostIT/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
       
        })
    }

}
