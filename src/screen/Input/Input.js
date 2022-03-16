import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

import {addData} from '../../redux/action/add';
import {useDispatch, useSelector} from 'react-redux';
const Input = ({navigation}) => {
  const listData = useSelector(state => state.list.data);
  const dispatch = useDispatch();
  const [input, setInput] = React.useState('');
  const onSave = () => {
    const newData = listData;
    if (input) {
      newData.push(input);
      addData(newData, dispatch);
    }
  };
  return (
    <View>
      <Text>input</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={v => setInput(v)}
      />
      <Button title="Save" onPress={() => onSave()} />
      <View style={{height: 20}} />
      <Button title="Show Data" onPress={() => navigation.navigate('Output')} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
  },
});
