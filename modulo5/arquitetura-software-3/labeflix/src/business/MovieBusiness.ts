import { MovieDatabase } from '../data/movieDatabase'
import { DescriptionInvalid, DurationInvalid, TitleInvalid, YearInvalid } from '../error/MovieError'
import { InsertMovieInputDTO, MovieInputDTO } from '../model/MovieDTOS'
import { generateId } from '../services/idGenerator'

export class MovieBusiness{
    async createMovie({title, description, duration_in_minutes, year_of_release}: MovieInputDTO):Promise<void>{
        if(!title){
            throw new TitleInvalid()
        }else if(!description){
            throw new DescriptionInvalid()
        }else if(!duration_in_minutes){
            throw new DurationInvalid()
        }else if(!year_of_release){
            throw new YearInvalid()
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