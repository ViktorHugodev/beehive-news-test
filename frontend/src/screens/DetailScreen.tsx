import React, {useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';
import api from '../services/api';
import {Task} from '../types/interfaces';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  Main: {updatedTask?: Task};
  Detail: {task: Task};
};

type DetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Detail'
>;
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

type DetailScreenProps = {
  navigation: DetailScreenNavigationProp;
  route: DetailScreenRouteProp;
};

const DetailScreen: React.FC<DetailScreenProps> = ({navigation, route}) => {
  const {task} = route.params;
  const [title, setTitle] = useState(task.title);

  const handleUpdate = async () => {
    if (title.trim() === '') {
      Alert.alert('Erro', 'O título da tarefa não pode ser vazio.');
      return;
    }

    try {
      const response = await api.put<Task>(`/todos/${task.id}`, {
        ...task,
        title,
      });
      Alert.alert('Sucesso', 'Tarefa atualizada com sucesso.');
      navigation.navigate('Main', {updatedTask: response.data});
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar a tarefa.');
    }
  };

  return (
    <View>
      <TextInput value={title} onChangeText={setTitle} />
      <Button title="Salvar" onPress={handleUpdate} />
    </View>
  );
};

export default DetailScreen;
