import React, { useReducer, useEffect, useMemo} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button } from 'react-native';
import { observer } from 'mobx-react-lite';
import store from './store/store';
import ListScreen from './screens/list';
import LoginScreen from './screens/login';
import DetailScreen from './screens/detail';
import LoaderScreen from './screens/loader';

const Stack = createNativeStackNavigator();

const App = observer(() => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        {
          store.auth.isLoading ? (
            <Stack.Screen options={{headerShown: false}} name="Loader" component={LoaderScreen} />
          ) : store.auth.token == '' ? (
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: 'Авторизация' }}
            />
          ) : (
            <>
              <Stack.Screen
                name="List"
                component={ListScreen}
                options={{
                    title: 'Список мероприятий',
                    headerRight: () => (
                        <Button title="Выйти" color="#006363" onPress={() => store.auth.logout()} />
                    )
                }}
              />
              <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    title: 'Мероприятие',
                    // headerRight: () => (
                    //     <Button title="Выйти" color="#006363" onPress={() => store.auth.logout()} />
                    // )
                }}
              />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default App;