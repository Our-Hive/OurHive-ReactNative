//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/auth/login/ui/LoginScreen';
import SignInScreen from './src/auth/signIn/ui/SingInScreen';

export default function App() {
  return (
    <LoginScreen />
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
