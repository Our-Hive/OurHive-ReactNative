import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};

export default function CustomButtom({ title, onPress }: Props) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={({ pressed }) => [
        styles.button,
        pressed && isPressed && styles.buttonPressed,
      ]}
    >
      <Text style={[styles.buttonText, isPressed && styles.buttonPressed]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 5,
    backgroundColor: '#57C877',
    width: 200,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  buttonPressed: {
    backgroundColor: '#4FB06B',
  },
  buttonText: {
    color: '#1A1C27',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 20,
    textAlign: 'center',
  },
});
