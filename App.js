import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Input from './src/screen/Input/Input';
import Output from './src/screen/Output/Output';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';

const Stack = createNativeStackNavigator();

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="input" component={Input} />
            <Stack.Screen name="Output" component={Output} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
