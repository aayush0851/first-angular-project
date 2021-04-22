import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  deleteTodo(todo_id: number){
    this.todoService.todoArray = this.todoService.todoArray.filter((todo: Todo)=> todo.todo_id!==todo_id);
  }

  checkTodo(todo_id: number){
    this.todoService.todoArray = this.todoService.todoArray.map((todo: Todo) => {
      if(todo.todo_id===todo_id){
        todo.todo_done=!todo.todo_done;
        return todo;
      }
      else{
        return todo;
      }
    })
  }

}
