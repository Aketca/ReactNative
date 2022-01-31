import React, { useReducer, useEffect, useMemo} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import ListScreen from './screens/list';
import LoginScreen from './screens/login';
import DetailScreen from './screens/detail';
import LoaderScreen from './screens/loader';
import { observer } from 'mobx-react-lite';
import store from './store/store';

const Stack = createNativeStackNavigator();

const App = observer(() => {

  console.log(store, 'store');

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        {
          store.authStore.isLoading ? (
            <Stack.Screen name="Loader" component={LoaderScreen} />
          ) : store.authStore.userToken == null ? (
            <Stack.Screen
              name="Login"
              component={LoginScreen}
            />
          ) : (
            <>
              <Stack.Screen
                name="List"
                component={ListScreen}
                options={{ title: 'Список мероприятий' }}
              />
              <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{ title: 'Мероприятие' }}
              />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default App;