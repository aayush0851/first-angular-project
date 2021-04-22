import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo/todo.service';
import {Todo} from "../todo/todo.model";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  constructor(private todoService: TodoService,
    private router:Router,
    private route: ActivatedRoute) { }
  todos: Todo[]=this.todoService.todoArray;
  ngOnInit(): void {
  }

  expandTree(todo_id: number){
    this.router.navigate(['details', todo_id], {relativeTo: this.route});
  }

}
