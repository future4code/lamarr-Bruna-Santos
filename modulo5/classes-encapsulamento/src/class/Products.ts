export class Products{
    private name: string;
    private price: number;
    private id: string

    constructor(name:string, price:number, id:string){
        this.name = name;
        this.price = price;
        this.id = id;
   }

    public getname():string{
        return this.name;
    }

    public setName(newname:string):void{
        this.name = newname;
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

    public setId(newPassword:string):void{
        this.id = newPassword
    }

}