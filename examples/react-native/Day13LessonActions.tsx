import { Alert, Button, Text, View } from 'react-native';

export default function Day13LessonActions() {
  function handleReminder() {
    Alert.alert('Study reminder', 'Study one concept for 20 minutes.');
  }

  function handleTopic(topic: string) {
    Alert.alert('Revision', 'Review: ' + topic);
  }

  return (
    <View>
      <Text accessibilityRole="header">Lesson actions</Text>
      <Button title="Show reminder" onPress={handleReminder} />
      <Button title="Review props" onPress={() => handleTopic('Props')} />
    </View>
  );
}
