import { v4 as generateId } from 'uuid'
import { MovieDatabase } from '../data/movieDatabase'

export class MovieBusiness{
    async createMovie({title, description, duration_in_minutes, year_of_release}: any):Promise<void>{
        if(!title){
            throw new Error("Insira o título do filme")
        }else if(!description){
            throw new Error("Insira a descrição do filme")
        }else if(!duration_in_minutes){
            throw new Error("Insira a duração em minutos do filme")
        }else if(!year_of_release){
            throw new Error("Insira o ano de lançamento do filme")
        }

        const id = generateId()

        const movieDatabase = new MovieDatabase()
        await movieDatabase.create({
            id, 
            title,
            description,
            duration_in_minutes,
            year_of_release
        })
    }
}