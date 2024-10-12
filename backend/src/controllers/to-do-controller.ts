import { Request, Response } from 'express'

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  res.json({ message: 'hello world' })
}
