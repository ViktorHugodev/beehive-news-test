## Todo API Project

## 🚀 Technologies

This project was developed using the following technologies:

- [Node.js](https://nodejs.org/en/) - v14.x or higher
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Nodemon](https://nodemon.io/) - for development hot-reloading

## 💻 Project

This project is a simple Todo API to manage tasks with CRUD operations (Create, Read, Update, Delete). The application is built using Node.js, TypeScript, and Express, and uses PostgreSQL as the database, managed through TypeORM.

---

## 🚀 How to Run

Follow these steps to get the project running on your local machine.

### 1. Clone the repository:

```bash

git clone https://github.com/ViktorHugodev/beehive-news-test
cd backend

```

### 2. Install dependencies:

```bash

npm install

```

### 3. Set up PostgreSQL using Docker:

To set up PostgreSQL using Docker, run the following command:

```bash

docker run --name todo-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=todo -p 5432:5432 -d postgres

```

This will create a PostgreSQL container with the following credentials:

- **Username**: `postgres`
- **Password**: `postgres`
- **Database**: `todo`

### 4. Configure environment variables:

Create a `.env` file in the root of your project and add the following:

```bash

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=todo
PORT=3000

```

### 5. Running migrations:

After setting up PostgreSQL, run the migrations to set up the database schema:

```bash

npm run migration:run

```

### 6. Start the development server:

To start the development server with hot-reloading:

```bash

npm run dev

```

Once the server is running, you should see:

```bash
Server running on port 3000
Data Source has been initialized!

```

### 7. Test the API using `api.http`:

You can test the API using the `api.http` file included in the project.

1. Open the `api.http` file in [VS Code](https://code.visualstudio.com/).
2. Install the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension.
3. Run individual requests in the `api.http` file.

---

## 👩🏿‍💻 Routes

### **`GET /api/todos`** - Retrieve all tasks

- Retrieves a list of all tasks stored in the database.

### **`POST /api/todos`** - Create a new task

- Create a new task by sending the following JSON body:

```json

{
  "title": "Learn TypeScript"
}

```

### **`PUT /api/todos/:id`** - Update a task

- Updates an existing task by sending the updated `title` and/or `completed` status:

```json

{
  "title": "Learn TypeScript with TypeORM",
  "completed": true}

```

### **`DELETE /api/todos/:id`** - Delete a task

- Deletes a task by its `id`.