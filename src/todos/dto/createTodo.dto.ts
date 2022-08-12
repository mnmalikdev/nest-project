import { IsNotEmpty, IsString } from "class-validator";


export class createTodoDto{
    
    @IsNotEmpty({ message:"titles cannot be empty" })
    @IsString()
    title:string

    @IsNotEmpty({message:"titles cannot be empty"})
    @IsString()
    description:string
}
