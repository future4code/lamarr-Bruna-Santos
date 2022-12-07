export class Products{
    private name: string;
    private price: number;
    private id: string

    constructor(id:string, name:string, price:number){
        this.id = id;
        this.name = name;
        this.price = price;
   }

    public getName():string{
        return this.name;
    }

    public setName(newName:string):void{
        this.name = newName;
    }

    public getPrice():number{
        return this.price;
    }

    public setPrice(newPrice:number):void{
        this.price = newPrice;
    }

    public getId():string{
        return this.id
    }

    public setId(newId:string):void{
        this.id = newId
    }

}