import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/ui/HomeScreen';
import InformationScreen from '../info/ui/InformationScreen';
import MySpaceScreen from '../mySpace/ui/MySpaceScreen';
import ProfileScreen from '../profile/ui/ProfileScreen';
import HistoryScreen from '../history/ui/HistoryScreen';

const Tab = createBottomTabNavigator();

export default function MainBottomBar() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name='Profile' component={ProfileScreen} />
      <Tab.Screen name='History' component={HistoryScreen} />
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='MySpace' component={MySpaceScreen} />
      <Tab.Screen name='Information' component={InformationScreen} />
    </Tab.Navigator>
  );
}
