import React, {useState} from 'react';
import styled from 'styled-components/native';

interface TaskInputProps {
  onAddTask: (title: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({onAddTask}) => {
  const [title, setTitle] = useState('');

  const handleAddTask = () => {
    onAddTask(title);
    setTitle('');
  };

  return (
    <InputContainer>
      <TaskTextInput
        placeholder="Nova tarefa"
        value={title}
        onChangeText={setTitle}
      />
      <AddButton title="Adicionar" onPress={handleAddTask} />
    </InputContainer>
  );
};

const InputContainer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

const TaskTextInput = styled.TextInput`
  flex: 1;
  padding: 10px;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 5px;
`;

const AddButton = styled.Button``;

export default TaskInput;
