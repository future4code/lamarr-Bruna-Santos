import { performPurchase } from "../src/models/funcs/performPurchase"
import { User } from "../src/models/User"

describe("Teste para verificação de saldo", ()=>{
    test("Saldo maior que o valor de compra", ()=>{
        const user: User ={
            name: "Joel",
            balance: 200
        }
        const result = performPurchase(user, 100)

        expect(result).toEqual({
            name: "Joel",
            balance: 100
        })
    })

    test("Saldo igual ao valor de compra", ()=>{
        const user: User ={
            name: "Ellie",
            balance: 100
        }
        const result = performPurchase(user, 100)

        expect(result).toEqual({
            name: "Ellie",
            balance: 0
        })
    })

    test("Saldo igual ao valor de compra", ()=>{
        const user: User ={
            name: "Tess",
            balance: 100
        }
        const result = performPurchase(user, 200)

        expect(result).not.toBeDefined()
    })
})