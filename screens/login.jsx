import React from 'react';
import { StyleSheet, Button, View, TextInput, Text } from 'react-native';
import store from '../store/store';
import { primaryColor, errorColor } from '../constants';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Логин"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {store.auth.msg ? (
        <Text style={styles.msg}>{store.auth.msg}</Text>
      ) : null}
      <Button title="Войти" color={primaryColor} disabled={!username || !password} onPress={() => store.auth.login(username, password)} />
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
    height: 50,
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 15,
  },
  msg: {
    marginBottom: 15,
    color: errorColor,
    // fontSize: 18,
  }
});

export default LoginScreen;