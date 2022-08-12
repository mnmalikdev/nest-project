import { Entity, Column, CreateDateColumn, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity('Test')
export class TestEntity {
    @ObjectIdColumn({ generated: false })
    id: string;

    @Column()
    productName: string;

    @Column()
    productDescription: string;

    @Column()
    productPrice: number;

    @CreateDateColumn()
    created: Date;
}