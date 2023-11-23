import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../auth/ui/LoginScreen';
import SignUp from '../auth/ui/SignUpScreen';
import MainBottomBar from './MainBottomBar';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import DailyStackNavigation from './DailyStackNavigation';

const Stack = createNativeStackNavigator();
const config = {
  headerShown: false,
};

export default function AuthStackNavigation() {
  const { isAuth } = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName='Login'>
      {isAuth ? (
        <Stack.Group>
          <Stack.Screen
            name='MainBottomBar'
            component={MainBottomBar}
            options={config}
          />
          <Stack.Screen
            name='DailyStackNavigation'
            component={DailyStackNavigation}
            options={config}
          />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name='Login' component={LoginScreen} options={config} />
          <Stack.Screen name='SignUp' component={SignUp} options={config} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}
