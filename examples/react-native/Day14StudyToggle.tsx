import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function Day14StudyToggle() {
  const [isStudying, setIsStudying] = useState(false);

  function handleStart() {
    setIsStudying(true);
  }

  function handlePause() {
    setIsStudying(false);
  }

  return (
    <View>
      <Text accessibilityRole="header">Study session</Text>
      <Text>{isStudying ? 'Studying now' : 'Paused'}</Text>
      <Button title="Start" onPress={handleStart} />
      <Button title="Pause" onPress={handlePause} />
    </View>
  );
}
