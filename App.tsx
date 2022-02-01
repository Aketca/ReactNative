import React, { useReducer, useEffect, useMemo} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { observer } from 'mobx-react-lite';
import store from './store/store';
import ListScreen from './screens/list';
import LoginScreen from './screens/login';
import DetailScreen from './screens/detail';
import LoaderScreen from './screens/loader';
import ScanScreen from './screens/scan';

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
                options={{ title: 'Список мероприятий' }}
              />
              <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{ title: 'Мероприятие' }}
              />
              <Stack.Screen
                name="Scan"
                component={ScanScreen}
                options={{ title: 'Сканирование' }}
              />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default App;