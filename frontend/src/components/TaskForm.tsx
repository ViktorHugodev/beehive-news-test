import React, {useState} from 'react';
import {Alert, Button} from 'react-native';
import styled from 'styled-components/native';
import api from '../services/api';

const Container = styled.View`
  margin-bottom: 16px;
`;

const Input = styled.TextInput`
  border: 1px solid #ccc;
  padding: 8px;
  margin-bottom: 8px;
`;

interface TaskFormProps {
  onAddTask: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({onAddTask}) => {
  const [title, setTitle] = useState<string>('');

  const handleSubmit = async () => {
    if (title.trim() === '') {
      Alert.alert('Erro', 'O título da tarefa não pode ser vazio.');
      return;
    }

    try {
      await api.post('/todos', {title});
      setTitle('');
      onAddTask();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível adicionar a tarefa.');
    }
  };

  return (
    <Container>
      <Input
        placeholder="Digite a nova tarefa"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Adicionar Tarefa" onPress={handleSubmit} />
    </Container>
  );
};

export default TaskForm;
