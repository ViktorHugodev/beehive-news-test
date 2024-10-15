import React, {useState, useEffect} from 'react';
import {View, FlatList, Alert, TextInput, Button} from 'react-native';
import TaskItem from '../components/TaskItem';
import api from '../services/api';
import {Task} from '../types/interfaces';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  Main: undefined;
  Detail: {task: Task};
};

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;
type MainScreenRouteProp = RouteProp<RootStackParamList, 'Main'>;

type MainScreenProps = {
  navigation: MainScreenNavigationProp;
  route: MainScreenRouteProp;
};

const MainScreen: React.FC<MainScreenProps> = ({navigation, route}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const fetchTasks = async () => {
    try {
      const response = await api.get<Task[]>('/todos');
      setTasks(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as tarefas.');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    if (route.params?.updatedTask) {
      const updatedTask = route.params.updatedTask;
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === updatedTask.id ? updatedTask : task,
        ),
      );
      navigation.setParams({updatedTask: undefined});
    }
  }, [route.params?.updatedTask]);

  const handleAddTask = async () => {
    if (newTaskTitle.trim() === '') {
      Alert.alert('Erro', 'O título da tarefa não pode ser vazio.');
      return;
    }
    try {
      const response = await api.post<Task>('/todos', {
        title: newTaskTitle,
        completed: false,
      });
      setTasks(prevTasks => [response.data, ...prevTasks]);
      setNewTaskTitle('');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível adicionar a tarefa.');
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      await api.delete(`/todos/${id}`);
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível excluir a tarefa.');
    }
  };

  const handleToggleTask = async (id: number) => {
    try {
      const task = tasks.find(t => t.id === id);
      if (task) {
        const updatedTask = {...task, completed: !task.completed};
        await api.put<Task>(`/todos/${id}`, updatedTask);
        setTasks(prevTasks =>
          prevTasks.map(t => (t.id === id ? updatedTask : t)),
        );
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar a tarefa.');
    }
  };

  return (
    <View style={{padding: 16}}>
      <TextInput
        placeholder="Nova tarefa"
        value={newTaskTitle}
        onChangeText={setNewTaskTitle}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
          marginBottom: 8,
        }}
      />
      <Button title="Adicionar Tarefa" onPress={handleAddTask} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TaskItem
            task={item}
            onDelete={handleDeleteTask}
            onToggle={handleToggleTask}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default MainScreen;
