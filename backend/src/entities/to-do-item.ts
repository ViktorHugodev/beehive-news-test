import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class ToDoItem {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: 'varchar', length: 255 })
  title!: string

  @Column({ default: false })
  completed!: boolean

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date

  @Column({ type: 'timestamp', nullable: true })
  completedAt!: Date | null
}
