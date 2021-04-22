import { Component, Input, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  
  constructor(private todoService: TodoService) {
    // this.todoService.statusCount.subscribe((nos: number)=>{alert(nos)});
   }

  ngOnInit(): void {
  }

}
