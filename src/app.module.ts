import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [ProductsModule,TodosModule,TypeOrmModule.forRoot({
    "type": "mongodb",
    "url": "mongodb+srv://nabeelmalik:ISLAMABAD@cluster0.dizozcj.mongodb.net/todoAPP?retryWrites=true&w=majority&directConnection=true",
    "useNewUrlParser": true,
    "synchronize": true,
    "useUnifiedTopology": true,
    "logging": true,
    "entities": [
        "dist/**/*.entity{.ts,.js}"
    ]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
