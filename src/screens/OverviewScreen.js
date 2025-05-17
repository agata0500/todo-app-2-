import React from 'react';
import { View, Text, Button } from 'react-native';

export default function OverviewScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Overview Screen</Text>
      <Button title="Go to Create Todo" onPress={() => navigation.navigate('CreateTodo')} />
    </View>
  );
}
