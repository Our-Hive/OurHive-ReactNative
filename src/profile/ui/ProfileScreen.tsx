import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Colors } from '../../Constants/Colors';
import { useEffect, useState } from 'react';
import { getUserData } from '../data/profileService';

type userData = {
  email: string;
  username: string;
};

export default function ProfileScreen() {
  const [isPressed, setIsPressed] = useState(false);
  const [user, setUser] = useState<userData>({
    email: '',
    username: '',
  });
  useEffect(() => {
    getUserData().then((data) =>
      setUser({
        email: data?.email,
        username: data?.username,
      })
    );
  }, []);

  return (
    <View
      style={{
        backgroundColor: Colors.backgroundPage,
        height: '100%',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          top: 0,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 30,
        }}
      >
        <Image
          source={require('../../../assets/bee.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Perfil</Text>
      </View>
      <View>
        <TextInput style={styles.input} editable={false}>
          {user.username}
        </TextInput>
        <TextInput style={styles.input} editable={false}>
          {user.email}
        </TextInput>

        <Pressable
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
        >
          <View
            style={{
              backgroundColor: isPressed ? Colors.redDark : Colors.red,
              padding: 10,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: 'white' }}>Deshabilitar usuario</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFF500',
    marginBottom: 10,
  },
  input: {
    height: 50,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'yellow',
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
    fontSize: 20,
  },
  button: {
    backgroundColor: Colors.red,
  },
});
