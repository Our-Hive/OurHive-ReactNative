import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PrimaryEmotionScreen from '../home/ui/screen/PrimaryEmotionScreen';
import SecondaryEmotionScreen from '../home/ui/screen/SecondaryEmotion';
import TrascendentalScreen from '../home/ui/screen/TrascendentalScreen';

const Stack = createNativeStackNavigator();
const config = {
  headerShown: false,
};

export default function TrascendentalStackNavigation() {
  return (
    <Stack.Navigator initialRouteName='PrimaryEmotion'>
      <Stack.Screen
        name='PrimaryEmotion'
        component={PrimaryEmotionScreen}
        options={config}
      />
      <Stack.Screen
        name='SecondaryEmotion'
        component={SecondaryEmotionScreen}
        options={config}
      />
      <Stack.Screen
        name='TrascendentalScreen'
        component={TrascendentalScreen}
        options={config}
      />
    </Stack.Navigator>
  );
}
