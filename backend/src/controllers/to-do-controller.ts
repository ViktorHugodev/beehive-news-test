import { Request, Response } from 'express'
import { ToDoService } from '../services/to-do-service'

const todoService = new ToDoService()

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos = await todoService.getAllTodos()
    res.json(todos)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
}

export const createTodo = async (req: Request, res: Response): Promise<void> => {
  const { title } = req.body
  if (!title) {
    res.status(400).json({ message: 'Title is required' })
    return
  }

  try {
    const newTodo = await todoService.createTodo(title)
    res.status(201).json(newTodo)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
}

export const updateTodo = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params
  const { title, completed } = req.body

  try {
    const updatedTodo = await todoService.updateTodo(Number(id), title, completed)
    if (!updatedTodo) {
      res.status(404).json({ message: 'Todo not found' })
      return
    }
    res.json(updatedTodo)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
}

export const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params

  try {
    const deleted = await todoService.deleteTodo(Number(id))
    if (!deleted) {
      res.status(404).json({ message: 'Todo not found' })
      return
    }
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ message: 'Server error', error })
  }
}
