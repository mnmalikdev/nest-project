import { IsOptional, IsString } from "class-validator";
import { Exclude } from "class-transformer";

export class updateTodoDto{

    
    @IsString()
    title:string

  
    @IsString()
    description:string
}
