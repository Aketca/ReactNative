import React from 'react';
import { Button, View, Text } from 'react-native';
import store from '../store/store';

const ListScreen = ({ navigation }) => {

  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Выйти" onPress={store.authStore.logout()} />
      <Button
        title="На шаблон detail"
        onPress={() =>
          navigation.navigate('Detail', { name: 'Jane' })
        }
      />
    </View>

  );
};

export default ListScreen;