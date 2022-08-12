import { Controller,Post,Body, Get,Param } from "@nestjs/common";
import { ProductService } from "./products.service";
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService:ProductService){}
    @Post()
    addProduct(@Body('title') prodTitle:string,@Body("desc") prodDesc:string,@Body('price') prodPrice:number ):any{
        const generatedID=this.productsService.insertProduct(prodTitle,prodDesc,prodPrice);
        return {id:generatedID}
    }

    @Get()
    getAllProducts(){
        return this.productsService.getProducts();
    }
    @Get(':id')
    getProduct(@Param('id') prodID:string){
        return this.productsService.getSingleProduct(prodID)
    }
 

}