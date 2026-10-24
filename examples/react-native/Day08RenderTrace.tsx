import { Text, View } from 'react-native';

function LessonMessage() {
  return <Text>Read one concept carefully.</Text>;
}

export default function Day08RenderTrace() {
  return (
    <View>
      <Text accessibilityRole="header">Rendering a lesson</Text>
      <LessonMessage />
    </View>
  );
}
