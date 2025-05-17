import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OverviewScreen from '../screens/OverviewScreen';
import CreateTodoScreen from '../screens/CreateTodoScreen';
import TodoDetailScreen from '../screens/TodoDetailScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Overview">
        <Stack.Screen name="Overview" component={OverviewScreen} />
        <Stack.Screen name="CreateTodo" component={CreateTodoScreen} />
        <Stack.Screen name="TodoDetail" component={TodoDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


