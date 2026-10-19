import { Text, View } from 'react-native';

export default function Day03Session() {
  const topic: string = 'JSX and TSX';
  const practiceMinutes: number = 20;
  const reviewMinutes: number = 10;

  return (
    <View>
      <Text>{topic}</Text>
      <Text>Practice: {practiceMinutes} minutes</Text>
      <Text>Total: {practiceMinutes + reviewMinutes} minutes</Text>
      {/* This comment is not displayed. */}
    </View>
  );
}
