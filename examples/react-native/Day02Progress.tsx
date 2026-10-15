import { Text, View } from 'react-native';

export default function Day02Progress() {
  const completedLessons = 1;
  const totalLessons = 4;
  const remainingLessons = totalLessons - completedLessons;

  return (
    <View>
      <Text>Learning progress</Text>
      <Text>Completed: {completedLessons} of {totalLessons}</Text>
      <Text>Remaining: {remainingLessons}</Text>
    </View>
  );
}
