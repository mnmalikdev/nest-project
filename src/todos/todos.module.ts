// bind controller and service logic here. 
import { Module } from "@nestjs/common";
import { TodoService } from "./todos.service";
import { TodosController } from "./todos.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoEntity } from "src/products/entities/todo.entity";

@Module({
    imports:[TypeOrmModule.forFeature([TodoEntity])],
    controllers:[TodosController],
    providers:[TodoService]      
  })
  export class TodosModule{}