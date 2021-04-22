import { EventEmitter } from "@angular/core";
import {Todo} from "./todo.model";
export class TodoService{
    count=0;
    todoArray: Todo[]=[
        {
            todo_id: 999999,
            todo_name: 'testststststtsts',
            todo_done: false
        },
        {
            todo_id: 9999991,
            todo_name: 'stststsdfsdfttsts',
            todo_done: false
        }
    ];

    statusCount = new EventEmitter<number>();

    addTodo(todo: Todo){
        this.todoArray.push(todo);
        this.statusCount.emit(this.count);
    }
}