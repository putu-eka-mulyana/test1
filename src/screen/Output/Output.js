import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Output = () => {
  const listData = useSelector(state => state.list.data);
  return (
    <View>
      <Text>List Data</Text>

      <FlatList data={listData} renderItem={({item}) => <Text>{item}</Text>} />
    </View>
  );
};

export default Output;
