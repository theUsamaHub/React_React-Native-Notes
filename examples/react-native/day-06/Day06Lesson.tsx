import { Text, View } from 'react-native';
import LessonTitle from './LessonTitle';
import { estimatedMinutes, lessonTopic } from './lessonInfo';

export default function Day06Lesson() {
  return (
    <View>
      <LessonTitle />
      <Text>{lessonTopic}</Text>
      <Text>Estimated time: {estimatedMinutes} minutes</Text>
    </View>
  );
}
