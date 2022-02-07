import {useState} from 'react';
import { StyleSheet, Button, View, TextInput, Text, Image, Pressable } from 'react-native';
import store from '../store/store';
import { primaryColor, errorColor } from '../constants';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Логин"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <View>
        <TextInput
          placeholder="Пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPass}
          style={styles.input}
        />
        {showPass ? (
          <Pressable style={styles.showTriggerWrap} onPress={() => {setShowPass(!showPass)}}>
            <Image
              style={styles.showTrigger}
              source={require('../assets/pass-show.png')}
            />
          </Pressable>
        ) : (
          <Pressable style={styles.showTriggerWrap} onPress={() => {setShowPass(!showPass)}}>
            <Image
              style={styles.showTrigger}
              source={require('../assets/pass-hide.png')}
            />
          </Pressable>
        )}
      </View>
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
  showTrigger: {
    width: 30,
    height: 30,
  },
  showTriggerWrap: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 30,
    height: 30,
  },
  msg: {
    marginBottom: 15,
    color: errorColor,
  }
});

export default LoginScreen;