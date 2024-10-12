import { AppDataSource } from '../database/database'
import { ToDoItem } from '../entities/to-do-item'

export class ToDoService {
  private todoRepository = AppDataSource.getRepository(ToDoItem)

  public async getAllTodos(): Promise<ToDoItem[]> {
    return await this.todoRepository.find()
  }

  public async createTodo(title: string): Promise<ToDoItem> {
    const todo = new ToDoItem()
    todo.title = title
    return await this.todoRepository.save(todo)
  }

  public async updateTodo(
    id: number,
    title?: string,
    completed?: boolean,
  ): Promise<ToDoItem | null> {
    const todo = await this.todoRepository.findOneBy({ id })
    if (!todo) return null

    if (title !== undefined) todo.title = title
    if (completed !== undefined) {
      todo.completed = completed
      todo.completedAt = completed ? new Date() : null
    }

    return await this.todoRepository.save(todo)
  }

  public async deleteTodo(id: number): Promise<boolean> {
    const result = await this.todoRepository.delete(id)
    return result.affected !== 0
  }
}
