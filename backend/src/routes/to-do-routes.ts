import { Router } from 'express'
import { createTodo, deleteTodo, getTodos, updateTodo } from '../controllers/to-do-controller'

const todoRoutes = Router()
todoRoutes.get('/', getTodos)
todoRoutes.post('/', createTodo)
todoRoutes.put('/:id', updateTodo)
todoRoutes.delete('/:id', deleteTodo)

export default todoRoutes
