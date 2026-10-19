import { Text, View } from 'react-native';

export default function Day04StudyCard() {
  const readingMinutes = 15;
  const practiceMinutes = 20;
  const totalMinutes = readingMinutes + practiceMinutes;

  return (
    <View>
      <Text>Today's study session</Text>
      <Text>Read, then practise one concept.</Text>
      <Text>Planned time: {totalMinutes} minutes</Text>
    </View>
  );
}
