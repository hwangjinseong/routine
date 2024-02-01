import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationStackList} from './src/types/Navigation';
import {Home} from './src/screens';

function Navigation() {
  const NavigationStack = createNativeStackNavigator<NavigationStackList>();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <NavigationContainer>
        <NavigationStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home">
          <NavigationStack.Screen name="Home" component={Home} />
        </NavigationStack.Navigator>
      </NavigationContainer>
    </TouchableWithoutFeedback>
  );
}

export default Navigation;
