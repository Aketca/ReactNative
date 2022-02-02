import { useEffect, useState, useCallback } from 'react';
import { RefreshControl, StyleSheet, Button, View, Text, Image, FlatList, ActivityIndicator, Pressable, TouchableHighlight } from 'react-native';
import store from '../store/store';
import { observer } from 'mobx-react-lite';

const ListScreen = observer(({ navigation }) => {
  const onRefresh = useCallback(() => {
    store.events.getData();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor="#e5e5e5"
        style={styles.highlight}
        onPress={() => navigation.navigate('Detail', { item })}>
        <View style={styles.item}>
          <View style={styles.flex}>
            <Image
              style={styles.image}
              source={{
                uri: item.image,
              }}
            />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.id}>id: {item.id}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  return (
    <View style={styles.container}>
      {store.events.list && store.events.list.length > 0 ? (
          <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={store.events.isLoading}
                  onRefresh={onRefresh}
                />
              }
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
    justifyContent: 'center',
    flexGrow: 1
  },
  highlight: {
    marginBottom: 15,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    overflow: 'hidden'
  },
  image: {
    width: 75,
    height: 75,
  },
  item: {
    // marginBottom: 15,
  },
  info: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    paddingLeft: 10,
    paddingTop: 6,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  id: {
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 5
  }
});

export default ListScreen;