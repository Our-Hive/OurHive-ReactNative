import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../Constants/Colors';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';

export default function TrascendentalDiary() {
  const [isPressed, setIsPressed] = useState(false);

  const { control } = useForm({
    defaultValues: {
      who: '',
      where: '',
      doing: '',
    },
  });

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
        <Text style={styles.title}>Emocional Trascendental</Text>
      </View>
      <View>
        <Text style={{color: 'white'}}>¿Con quién viviste la emoción?</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              placeholder='Familiar'
            />
          )}
          name='who'
        />
        <Text style={{color: 'white'}}>¿Donde sucedió?</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              placeholder='Gimnasio'
            />
          )}
          name='where'
        />
        <Text style={{color: 'white'}}>¿Qué hacías?</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              placeholder='Ejercicio'
            />
          )}
          name='doing'
        />
        <Pressable
          style={{width: 270}}
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
            }}
          >
            <Text style={{color: Colors.backgroundPage}}>Guardar registro</Text>
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
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFF500',
    marginBottom: 10,
    paddingRight: 10,
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
});
