import { Controller, useForm } from 'react-hook-form';
import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import ActionButton from '../../../components/ActionButton';
import UnderlineText from '../../../components/UnderlineText';
import { useFonts, Nosifer_400Regular } from '@expo-google-fonts/nosifer';
import { isRegister } from '../data/signUpService';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

export type SignUpData = {
  email: string;
  username: string;
  password: string;
  passwordConfirmation: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SignUpScreen({ navigation }: { navigation: any }) {
  const { setIsAuth } = useContext(AuthContext);
  useFonts({
    Nosifer: Nosifer_400Regular,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  const onSubmit = async (data: SignUpData) => {
    console.log(data);
    
    if (data.password !== data.passwordConfirmation) {
      return Alert.alert('Las contraseñas no coinciden');
    }
    const register = await isRegister(data);
    if (register) {
      Alert.alert('Usuario registrado :D Inicia Sesión');
      setIsAuth(true);
    } else {
      Alert.alert('Error al registrar');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../../assets/bee.png')}
          style={styles.image}
        />
        <Text style={{ fontFamily: 'Nosifer', fontSize: 50, color: '#FFF500' }}>
          OUR HIVE
        </Text>
      </View>
      <View style={styles.bodyContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='Email'
            />
          )}
          name='email'
        />
        {errors.email && <Text style={styles.alert}>Correo invalido.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder='Username'
            />
          )}
          name='username'
        />
        {errors.username && (
          <Text style={styles.alert}>Este campo es obligatorio.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 8,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
              placeholder='Password'
            />
          )}
          name='password'
        />
        {errors.password && (
          <Text style={styles.alert}>Este campo es obligatorio.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 8,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
              placeholder='Confirm Password'
            />
          )}
          name='passwordConfirmation'
        />
        {errors.passwordConfirmation && (
          <Text style={styles.alert}>Este campo es obligatorio.</Text>
        )}
        <ActionButton title='Regístrate' onPress={handleSubmit(onSubmit)} />
      </View>
      <View style={styles.footer}>
        <Text style={{ color: 'white', fontSize: 20 }}>
          ¿Ya tienes una cuenta?
        </Text>
        <UnderlineText
          title='Iniciar Sesión'
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A1C27',
  },
  header: {
    position: 'absolute',
    top: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFF500',
    marginBottom: 10,
  },
  bodyContainer: {
    position: 'absolute',
    top: '55%', // Coloca el centro vertical en el 50% de la pantalla
    left: '48%', // Coloca el centro horizontal en el 50% de la pantalla
    transform: [{ translateX: -150 }, { translateY: -100 }], // Ajusta la posición
    alignItems: 'center',
    justifyContent: 'center',
  },
  alert: {
    color: 'red',
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
  footer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
