import { Text, View } from 'react-native';

type Lesson = {
  readonly id: string;
  readonly title: string;
};

const lessons: readonly Lesson[] = [
  { id: 'lesson-props', title: 'Props' },
  { id: 'lesson-children', title: 'Children' },
  { id: 'lesson-conditions', title: 'Conditional rendering' },
];

export default function Day12LessonList() {
  if (lessons.length === 0) {
    return <Text>No lessons queued.</Text>;
  }

  return (
    <View>
      <Text accessibilityRole="header">Revision queue</Text>
      {lessons.map((lesson) => (
        <View key={lesson.id}>
          <Text>{lesson.title}</Text>
        </View>
      ))}
    </View>
  );
}
