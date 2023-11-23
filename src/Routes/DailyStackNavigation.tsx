import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PrimaryEmotionScreen from '../home/ui/screen/PrimaryEmotionScreen';
import SecondaryEmotionScreen from '../home/ui/screen/SecondaryEmotion';
import DiaryScreen from '../home/ui/screen/DiaryScreen';

const Stack = createNativeStackNavigator();
const config = {
  headerShown: false,
};

export default function DailyStackNavigation() {
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
        name='DiaryScreen'
        component={DiaryScreen}
        options={config}
      />
    </Stack.Navigator>
  );
}
