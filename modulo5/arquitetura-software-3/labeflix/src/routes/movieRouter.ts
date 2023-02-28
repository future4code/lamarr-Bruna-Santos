import express from 'express'
import { MovieController } from '../controller/movieController'

const movieController = new MovieController()
export const movieRouter = express.Router()

movieRouter.post("/create", movieController.createMovie)