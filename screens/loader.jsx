import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { primaryColor } from '../constants';

const LoaderScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={primaryColor} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "center"
  },
});

export default LoaderScreen;