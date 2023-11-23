import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigation from './AuthStackNavigation';
import { AuthProvider } from '../context/AuthContext';

export default function Navigation() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthStackNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}
