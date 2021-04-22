export class Todo{
    public todo_name:string;
    public todo_id: number;
    public todo_done: boolean;

    constructor(id:number, name:string, done:boolean= false){
        this.todo_id=id;
        this.todo_name=name;
        this.todo_done=done;
    }
}