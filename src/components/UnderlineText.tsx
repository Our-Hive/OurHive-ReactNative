import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  title: string;
};

export default function CustomText({ title }: Props) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={({ pressed }) => [
        styles.touchable,
        pressed && isPressed && styles.touchablePressed,
      ]}
    >
      <Text style={[styles.text, isPressed && styles.textPressed]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  textPressed: {
    color: 'darkgray', // Cambia el color del texto cuando se presiona
  },
  touchable: {
    padding: 10,
  },
  touchablePressed: {
    opacity: 0.7,
  },
});
