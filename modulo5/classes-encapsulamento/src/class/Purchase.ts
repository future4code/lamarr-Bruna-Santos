export class Purchase{
    private userId: string;
    private productId: string;
    private id: string;
    private quantity:number;
    private totalPrice:number

    constructor(id:string, userId:string, productId:string, quantity:number, totalPrice:number){
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.totalPrice = totalPrice
   }

}