import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class ToDoItem {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: 'varchar', length: 255 })
  title!: string

  @Column({ default: false })
  completed!: boolean
}
