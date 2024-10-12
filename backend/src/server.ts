import express, { Application } from 'express'
import dotenv from 'dotenv'
// import { AppDataSource } from './database/database'
import todoRoutes from './routes/to-do-routes'

const app: Application = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api/todos', todoRoutes)

// AppDataSource.initialize()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`)
//     })
//   })
//   .catch(error => console.log('Error initializing database:', error))
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
