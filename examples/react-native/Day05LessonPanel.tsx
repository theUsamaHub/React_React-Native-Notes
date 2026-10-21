import { Text, View } from 'react-native';

export default function Day05LessonPanel() {
  return (
    <View>
      <Text accessibilityRole="header">Today's lesson</Text>
      <Text>Choose elements for their meaning.</Text>
      <View>
        <Text>Estimated time: 25 minutes</Text>
      </View>
    </View>
  );
}
