import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigation from './AuthStackNavigation';

export default function Navigation() {
  return (
    <NavigationContainer>
      <AuthStackNavigation />
    </NavigationContainer>
  )
}