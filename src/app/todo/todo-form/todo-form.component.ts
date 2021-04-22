import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit{
  todo: string='';
  constructor(private todoService: TodoService) { }
  ngOnInit(): void {
  }

  handleSubmit(){
    if(this.todo!=''){
      const todo = new Todo(this.todoService.count++, this.todo, false);
      this.todoService.addTodo(todo);
      this.todo='';
    }
  }
}
