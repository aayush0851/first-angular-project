import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodoService,
    private todoFormComponent: TodoFormComponent) { 
      // this.todoFormComponent.statusUpdate.subscribe((status: string)=> {
      //   alert(status);
      // });
    }

  todos: Todo[] = this.todoService.todoArray;
  ngOnInit(): void {
  }



}
