import React from 'react';
import styled from 'styled-components/native';

interface TaskItemProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({task, onToggle, onDelete}) => {
  return (
    <TaskContainer>
      <TaskTitle completed={task.completed}>{task.title}</TaskTitle>
      <Actions>
        <CompleteButton
          title={task.completed ? 'Desmarcar' : 'Completar'}
          onPress={() => onToggle(task.id)}
        />
        <DeleteButton
          title="Deletar"
          onPress={() => onDelete(task.id)}
          color="red"
        />
      </Actions>
    </TaskContainer>
  );
};

const TaskContainer = styled.View`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TaskTitle = styled.Text<{completed: boolean}>`
  font-size: 16px;
  text-decoration: ${({completed}) => (completed ? 'line-through' : 'none')};
`;

const Actions = styled.View`
  flex-direction: row;
`;

const CompleteButton = styled.Button``;

const DeleteButton = styled.Button`
  color: red;
`;

export default TaskItem;
