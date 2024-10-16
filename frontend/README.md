## Todo App Project

## 🚀 Technologies

This project was developed using the following technologies:

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/)
- [Styled Components](https://styled-components.com/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Android Emulator](https://developer.android.com/studio/run/emulator) or [iOS Simulator](https://developer.apple.com/documentation/xcode/running_your_app_in_the_simulator_or_on_a_device) - for testing

## 💻 Project

This project is a simple Todo application to manage tasks with CRUD operations (Create, Read, Update, Delete). The app is built using React Native and TypeScript, and communicates with a backend API to store tasks.

---

## 🚀 How to Run

Follow these steps to get the project running on your local machine.

### 1. Clone the repository:

```bash

git clone https://github.com/ViktorHugodev/beehive-news-test
cd frontend

```

### 2. Install dependencies:

```bash

npm install

```

### 3. Set up the Backend API:

This app requires a backend API to function properly. You can use the Todo API provided in the [Todo API Project](https://github.com/ViktorHugodev/beehive-news-test) or set up your own backend.

**If using the provided Todo API Project:**

- Follow the instructions in the [Todo API Project README](https://github.com/ViktorHugodev/beehive-news-test) to set up and run the backend server.

Ensure the backend API is running on your local machine, and note the base URL (e.g., `http://localhost:3000`).

### 4. Configure the API Endpoint:

Create or update the `api.ts` file in the `src/services` directory with the correct base URL of your backend API.

```tsx

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export default api;

```

**Note:** If you are running the app on a physical device or emulator, you may need to adjust the base URL to point to your machine's IP address.


### 5. Start the React Native application:

### For Android:

Start the Metro Bundler:

```bash

npx react-native start

```

In a new terminal window, run:

```bash

npx react-native run-android

```

In a new terminal window, run:

```bash

npx react-native run-ios

```

---

## 👩🏿‍💻 Routes

### **`GET /api/todos`** - Retrieve all tasks

- Retrieves a list of all tasks stored in the database.

### **`POST /api/todos`** - Create a new task

- Create a new task by sending the following JSON body:

```json

{
  "title": "Your task title"
}

```

### **`PUT /api/todos/:id`** - Update a task

- Updates an existing task by sending the updated `title` and/or `completed` status:

```json
{
  "title": "Updated task title",
  "completed": true
}

```

### **`DELETE /api/todos/:id`** - Delete a task

- Deletes a task by its `id`.

---

## ⚠️ Troubleshooting

### **Icons Not Displaying**

- Ensure that `react-native-vector-icons` is installed:

```bash

npm install react-native-vector-icons


```

- For Android, make sure the following line is included in `android/app/build.gradle`:

```

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

```

### **API Connection Issues**

- Verify the base URL in `api.ts`.
- Ensure the backend server is running and accessible.
- If using an emulator, adjust the base URL:
    - For Android Emulator: Use `http://10.0.2.2:3000/api`.
    - For iOS Simulator: `http://localhost:3000/api`.

### **Network Issues on Physical Devices**

- Use your machine's IP address in `api.ts` instead of `localhost`.
- Ensure both the device and machine are on the same network.