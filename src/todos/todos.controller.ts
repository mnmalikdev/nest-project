// insert all routing related logic here.
import { Controller,Post,Get,Patch,Delete,Body,Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { createTodoDto } from "./dto/createTodo.dto";
import { updateTodoDto } from "./dto/updateTodo.dto";
import { TodoService } from "./todos.service";

@Controller('todos')

export class TodosController{
    constructor( private readonly todoService:TodoService ){}

    @Post()
    @UsePipes(ValidationPipe)
    addTodo(@Body() todoBody:createTodoDto , @Body('title') taskTitle:string , @Body('description') taskDescription:string):any{
        const todoObj=this.todoService.insertTodo(taskTitle,taskDescription)
      return{ 
        todoBody
       }
    }
    @Get()
    getAllTodos(){
        const todos=this.todoService.getUserTodos();
        return todos
    }
    @Patch(':id')
    @UsePipes(ValidationPipe)
    updateSingleTodo( @Param('id') todoID:string, todoBody:createTodoDto , @Body('title') updatedTitle:string, @Body('description') updatedDescription:string ){
    const updatedTodos=this.todoService.updateTodo(todoID,updatedTitle,updatedDescription)
    return {todoBody}
    }

    @Delete(':id')
    deleteSingleTodo(@Param('id') todoID:string){
        // insert function call from service.
        return this.todoService.deleteTodo(todoID)
    }
    
}