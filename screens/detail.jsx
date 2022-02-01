import * as React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const DetailScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>Сканирование события {route.params.item.title}</Text>
      <Button
        title="Сканировать"
        color="#009999"
        onPress={() =>
          navigation.navigate('Scan')
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default DetailScreen;