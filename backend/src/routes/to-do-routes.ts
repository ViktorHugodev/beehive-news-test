import { Router } from 'express'
import { getTodos } from '../controllers/to-do-controller'

const todoRoutes = Router()

todoRoutes.get('/', getTodos)

export default todoRoutes
