export enum TYPE{
    ADMIN="Admin",
    NORMAL="Normal"

}

export type Usuario={
    id: number,
    name: string,
    email: string,
    type: TYPE,
    age: number
}