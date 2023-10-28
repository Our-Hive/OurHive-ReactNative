//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/auth/login/ui/LoginScreen';
import SignInScreen from './src/auth/login/ui/signIn/SingInScreen';
import { Nosifer_400Regular, useFonts } from '@expo-google-fonts/nosifer';
import Navigation from './src/Routes/Navigation';

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Nosifer: Nosifer_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Navigation />
  );
}
/**
 * <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    <LoginScreen />
    <SignInScreen />
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
