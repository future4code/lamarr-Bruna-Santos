import { v4 as generateId } from 'uuid'
import { MovieDatabase } from '../data/movieDatabase'
import { InsertMovieInputDTO, MovieInputDTO } from '../model/MovieDTOS'

export class MovieBusiness{
    async createMovie({title, description, duration_in_minutes, year_of_release}: MovieInputDTO):Promise<void>{
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

        const movieInput: InsertMovieInputDTO ={
            id:id,
            title: title,
            description: description,
            duration_in_minutes: duration_in_minutes,
            year_of_release: year_of_release
        }

        await movieDatabase.create(movieInput)
    }
}