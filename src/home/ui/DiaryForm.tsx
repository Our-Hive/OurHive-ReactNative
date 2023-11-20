import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Colors } from '../../Constants/Colors';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';

export default function DiaryForm() {
  const [isPressed, setIsPressed] = useState(false);

  const { control } = useForm({
    defaultValues: {
      text: '',
    },
  });

  return (
    <View
      style={{
        backgroundColor: Colors.backgroundPage,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 30,
          top: 0,
        }}
      >
        <Image
          source={require('../../../assets/bee.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Formulario Diario</Text>
        <Text style={styles.title}>Emocional</Text>
      </View>
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
            multiline={true}
            numberOfLines={4}
            placeholder='Expresate aquí :D'
          />
        )}
        name='text'
      />
      <Pressable
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <View
          style={{
            backgroundColor: isPressed ? Colors.greenDark : Colors.green,
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            width: 300,
          }}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>Guardar Registro</Text>
        </View>
      </Pressable>
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
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFF500',
    marginBottom: 10,
    paddingRight: 10,
  },
  input: {
    height: 400,
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
});
