import { Injectable,NotFoundException } from "@nestjs/common";
import { ObjectID } from "typeorm";
import { Product } from "./products.model";

@Injectable()
export class ProductService{
    products:Product[]=[];

    insertProduct(title:string,desc:string,price:number){
        const prodId=Math.random().toString()
        const newProduct=new Product(prodId,title,desc,price)
       
        this.products.push(newProduct)
        return prodId
    }

    getProducts(){
        return [...this.products]
    }

    getSingleProduct(productID:string){
        const product=this.products.find(prod=>prod.id===productID)
        if(!product){
            throw new NotFoundException('product not found');
        }
        return {...product};
    }
}