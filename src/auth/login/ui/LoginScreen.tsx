import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import ActionButton from '../../../components/ActionButton';
import UnderlineText from '../../../components/UnderlineText';
import { useFonts, Nosifer_400Regular } from '@expo-google-fonts/nosifer';

export default function LoginScreen({ navigation }: { navigation: any }) {
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
      password: '',
    },
  });

  const onSubmit = (data: any) => console.log(data);

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
        {errors.email && <Text style={styles.alert}>Correo invalido</Text>}
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
        <ActionButton
          title='Iniciar Sesión'
          onPress={() => navigation.navigate('MainBottomBar')}
        />
      </View>
      <View style={styles.footer}>
        <Text style={{ color: '#EEEEEE', fontSize: 20 }}>
          ¿No puedes iniciar sesión?
        </Text>
        <UnderlineText
          title='Crear Cuenta'
          onPress={() => navigation.navigate('SignIn')}
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
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'Nosifer',
    color: '#FFF500',
    marginBottom: 10,
  },
  separator: {
    marginVertical: 50,
    height: 1,
    width: '80%',
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
    marginBottom: 10,
    marginTop: 20,
    fontSize: 20,
  },
  alert: {
    color: 'red',
  },
  header: {
    position: 'absolute',
    top: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    position: 'absolute',
    top: '57%', // Coloca el centro vertical en el 50% de la pantalla
    left: '48%', // Coloca el centro horizontal en el 50% de la pantalla
    transform: [{ translateX: -150 }, { translateY: -100 }], // Ajusta la posición
    alignItems: 'center',
    justifyContent: 'center',
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
