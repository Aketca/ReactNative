import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoaderScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#009999" />
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