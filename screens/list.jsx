import { useEffect, useState, useCallback } from 'react';
import { RefreshControl, StyleSheet, Button, View, Text, Image, FlatList, ActivityIndicator, Pressable, TouchableHighlight } from 'react-native';
import store from '../store/store';
import { observer } from 'mobx-react-lite';
import { primaryColor, highlightColor } from '../constants';

const ListScreen = observer(({ navigation }) => {
  const onRefresh = useCallback(() => {
    store.events.getData();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor={highlightColor}
        style={styles.highlight}
        onPress={() => navigation.navigate('Detail', { item })}>
        <View>
          <View style={styles.flex}>
            <Image
              style={styles.image}
              source={{
                uri: item.poster,
              }}
            />
            <View style={styles.info}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.text}>id: {item.id}</Text>
              <Text style={styles.text}>Дата: {item.event_date}</Text>
              <Text style={styles.text}>Место: {item.event_place}</Text>
              <Text style={styles.text}>Время: {item.event_time}</Text>
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
          <ActivityIndicator size="large" color={primaryColor} />
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
    borderColor: highlightColor,
    overflow: 'hidden'
  },
  image: {
    width: 75,
    height: 120,
  },
  info: {
    display: "flex",
    flexDirection: "column",
    flexShrink: 1,
    paddingLeft: 10,
    paddingTop: 6,
    paddingBottom: 6,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start"
  },
  text: {
    fontSize: 16,
    marginBottom: 3,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    color: primaryColor,
  }
});

export default ListScreen;