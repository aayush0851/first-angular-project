import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Todo } from '../todo/todo.model';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  todo: Todo;
  id: any;
  constructor(private todoService: TodoService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['todo_id'];
    this.todo = this.todoService.todoArray.find((todo:Todo)=> todo.todo_id===parseInt(this.id));
    this.route.params.subscribe((param: Params) => {
      this.id=param['todo_id'];
      this.todo = this.todoService.todoArray.find((todo:Todo)=> todo.todo_id===parseInt(this.id));
    })
  }

}
