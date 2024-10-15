import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';
import MainScreen from './src/screens/MainScreen';
import DetailScreen from './src/screens/DetailScreen';

export type RootStackParamList = {
  Main: undefined;
  Detail: {taskId: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{title: 'Lista de Tarefas'}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{title: 'Detalhes da Tarefa'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
