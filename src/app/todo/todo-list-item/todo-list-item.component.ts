import { Component, Input, OnInit, } from '@angular/core';
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
    let i = this.todoService.todoArray.length;
    while(i--){
      if(this.todoService.todoArray[i].todo_id===todo_id){
        this.todoService.todoArray.splice(i,1);
      }
    }
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
