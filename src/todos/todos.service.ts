// insert all business logic here. 
import { Injectable,NotFoundException } from "@nestjs/common";
import { TodoEntity } from "src/products/entities/todo.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class TodoService{
    constructor(@InjectRepository(TodoEntity) private todoRepository:Repository<TodoEntity>){}
    // method to add a todo. 
    async insertTodo(title:string,description:string)  {
        const newTodo:TodoEntity=new TodoEntity();
        newTodo.taskTitle=title;
        newTodo.taskDescription=description;
        newTodo.taskId= uuidv4()
   
        
        await this.todoRepository.save(newTodo)
        console.log("new todo saved ! ")
    }

    async getUserTodos(){
        // improve with user id later. 
        const todos=await this.todoRepository.find();
        return [...todos]   
    }

    async updateTodo(Id:string,updatedTitle:string,updatedDescription:string){
        // find the product
        const todos=await this.todoRepository.findOneBy({
            taskId:Id
        })
        if(todos===null){
            throw new NotFoundException(" no todo found")
        }
        // create  a new copy of the product for updating.
        const newTodo={...todos};
    
        if(updatedTitle){
            newTodo.taskTitle=updatedTitle
        }
        if(updatedDescription){
            newTodo.taskDescription=updatedDescription
        }
        console.log("todo item", todos)
        this.todoRepository.update(todos,newTodo)
    }
 // method to delete an existing todo
    
    async deleteTodo(Id:string){
        const todos=await this.todoRepository.findOneBy({
            taskId:Id
        })
        if(todos===null){
            throw new NotFoundException(" no todo found")
        }
        console.log("todo item", todos)
        this.todoRepository.delete(todos)
    }

    
}