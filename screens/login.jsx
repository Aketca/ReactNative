import React from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';
import store from '../store/store';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Войти" color="#009999" disabled={!username || !password} onPress={() => store.auth.login(username, password)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
      flexGrow: 1,
  },
  input: {
    height: 40,
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 15,
  },
});

export default LoginScreen;