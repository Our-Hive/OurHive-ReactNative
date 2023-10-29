import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../auth/login/ui/LoginScreen';
import SignIn from '../auth/signIn/ui/SingInScreen';
import MainBottomBar from './MainBottomBar';

const Stack = createNativeStackNavigator();
const config = {
  headerShown: false,
};

export default function AuthStackNavigation() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={LoginScreen} options={config} />
      <Stack.Screen name='SignIn' component={SignIn} options={config} />
      <Stack.Screen
        name='MainBottomBar'
        component={MainBottomBar}
        options={config}
      />
    </Stack.Navigator>
  );
}
