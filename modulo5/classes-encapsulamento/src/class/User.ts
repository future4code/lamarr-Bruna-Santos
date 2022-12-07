export class Users{
    private email: string;
    private password: string;
    private id: string

    constructor(email:string, password:string, id:string){
        this.email = email;
        this.password = password;
        this.id = id;
   }

    public getEmail():string{
        return this.email;
    }

    public setEmail(newEmail:string):void{
        this.email = newEmail;
    }

    public getPassword():string{
        return this.password;
    }

    public setPassword(newPassword:string):void{
        this.password = newPassword;
    }

    public getId():string{
        return this.password
    }

    public setId(newPassword:string):void{
        this.password = newPassword
    }

}