export interface Task {
    id: number;
    completed: boolean;
    text: string;  
    loading : boolean;
    items : []
  }
  
  export interface Tasks {
    tasks: Array<Task>;
  }