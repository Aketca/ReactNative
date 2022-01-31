import * as React from 'react';
import { Text } from 'react-native';

const DetailScreen = ({ navigation, route }) => {
  return <Text>Шаблон detail {route.params.name}</Text>;
};

export default DetailScreen;