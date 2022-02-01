import React, { useEffect } from 'react';
import { StyleSheet, Button, View, Text, Image, FlatList } from 'react-native';
import store from '../store/store';
import { observer } from 'mobx-react-lite';

const ListScreen = observer(({ navigation }) => {

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <View style={styles.flex}>
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
          <View style={styles.info}>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
          </View>
        </View>
        <Button
          title="Подробнее"
          color="#009999"
          onPress={() =>
            navigation.navigate('Detail', { item })
          }
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={store.events.list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button title="Выйти" color="#006363" onPress={() => store.auth.logout()} />
    </View>

  );
});

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  image: {
    width: 50,
    height: 50,
  },
  item: {
    marginBottom: 15,
  },
  info: {
    display: "flex",
    flexGrow: 1,
    paddingLeft: 10,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  }
});

export default ListScreen;