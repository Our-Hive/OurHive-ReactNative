import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/ui/screen/HomeScreen';
import InformationScreen from '../info/ui/InformationScreen';
import MySpaceScreen from '../mySpace/ui/MySpaceScreen';
import ProfileScreen from '../profile/ui/ProfileScreen';
import HistoryScreen from '../history/ui/HistoryScreen';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { Colors } from '../Constants/Colors';

const Tab = createBottomTabNavigator();

export default function MainBottomBar() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: Colors.purpleDown,
        tabBarStyle: {
          backgroundColor: Colors.yellow,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ size }) => (
            <FontAwesome5
              name='user-alt'
              color={Colors.purpleDown}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name='History'
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ size }) => (
            <FontAwesome5
              name='history'
              color={Colors.purpleDown}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name='smile' color={Colors.purpleDown} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='MySpace'
        component={MySpaceScreen}
        options={{
          tabBarLabel: 'MySpace',
          tabBarIcon: ({ size }) => (
            <FontAwesome name='heart' color={Colors.purpleDown} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Information'
        component={InformationScreen}
        options={{
          tabBarLabel: 'Information',
          tabBarIcon: ({ size }) => (
            <FontAwesome5 name='info' color={Colors.purpleDown} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
