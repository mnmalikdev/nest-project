import { Entity, Column, CreateDateColumn, ObjectIdColumn,  ObjectID,PrimaryColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity('Todo')
export class TodoEntity {
    @ObjectIdColumn()
    _id: string;
  
    // @PrimaryGeneratedColumn()
    // _id: string;

    @PrimaryGeneratedColumn()
    taskId:string

    @Column()
    taskTitle: string;

    @Column()
    taskDescription: string;

    // @Column()
    // author: userObjectID;

    @CreateDateColumn()
    created: Date;
}