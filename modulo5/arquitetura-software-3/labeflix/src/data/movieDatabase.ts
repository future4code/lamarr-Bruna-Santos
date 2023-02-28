import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase{
    async create({id, title, description, duration_in_minutes, year_of_release}:any):Promise<void>{
        try{
            MovieDatabase.connection.initialize()
            await MovieDatabase.connection
            .insert({
                id,
                title,
                description,
                duration_in_minutes,
                year_of_release,
            })
            .into('LABEFLIX_MOVIE')
        }catch(error:any){
            throw new Error(error.message)
        }finally{
            MovieDatabase.connection.destroy()
        }
    }
}