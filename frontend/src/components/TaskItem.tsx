import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Task} from '../types/interfaces';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

type RootStackParamList = {
  Main: undefined;
  Detail: {task: Task};
};

type TaskItemProps = {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  navigation: StackNavigationProp<RootStackParamList, 'Main'>;
};

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onDelete,
  onToggle,
  navigation,
}) => (
  <View style={{flexDirection: 'row', alignItems: 'center', padding: 8}}>
    <Text
      style={{
        flex: 1,
        textDecorationLine: task.completed ? 'line-through' : 'none',
        fontSize: 20,
      }}>
      {task.title}
    </Text>
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => onToggle(task.id)}
        style={{marginHorizontal: 8}}>
        <Icon
          name="check"
          size={28}
          color={task.completed ? 'green' : 'gray'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', {task})}
        style={{marginHorizontal: 8}}>
        <Icon name="edit" size={28} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onDelete(task.id)}
        style={{marginHorizontal: 8}}>
        <Icon name="trash" size={28} color="red" />
      </TouchableOpacity>
    </View>
  </View>
);

export default TaskItem;
