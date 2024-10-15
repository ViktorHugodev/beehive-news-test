import React, {useState} from 'react';
import {FlatList, Alert} from 'react-native';
import styled from 'styled-components/native';
import TaskItem from './src/components/TaskItem';
import TaskInput from './src/components/TaskInput';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    if (title.trim() === '') {
      Alert.alert('Erro', 'O título não pode estar vazio.');
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    );
  };

  const deleteTask = (id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <Container>
      <Title>To-Do List</Title>
      <TaskInput onAddTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TaskItem
            task={item}
            onToggle={toggleTaskCompletion}
            onDelete={deleteTask}
          />
        )}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

export default App;
