import React, { useEffect } from 'react';
import { StyleSheet, Button, View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
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
      {store.events.list && store.events.list.length > 0 ? (
          <FlatList
              data={store.events.list}
              renderItem={renderItem}
              keyExtractor={item => item.id}
          />
      ) : (
          <ActivityIndicator size="large" color="#009999" />
      )}
    </View>

  );
});

const styles = StyleSheet.create({
  container: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
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