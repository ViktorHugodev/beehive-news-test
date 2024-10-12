// import { DataSource } from 'typeorm'

// import dotenv from 'dotenv'
// import { ToDoItem } from '../entities/to-do-item'

// dotenv.config()

// export const AppDataSource = new DataSource({
//   type: 'postgres',
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   entities: [ToDoItem],
//   synchronize: true,
// })

// AppDataSource.initialize()
//   .then(() => {
//     console.log('Data Source has been initialized!')
//   })
//   .catch(err => {
//     console.error('Error during Data Source initialization:', err)
//   })
