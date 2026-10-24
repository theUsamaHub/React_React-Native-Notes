import { Text, View } from 'react-native';

type LessonCardProps = {
  readonly title: string;
  readonly minutes: number;
};

function LessonCard(props: LessonCardProps) {
  return (
    <View>
      <Text accessibilityRole="header">{props.title}</Text>
      <Text>Study time: {props.minutes} minutes</Text>
    </View>
  );
}

export default function Day09LessonCards() {
  return (
    <View>
      <LessonCard title="Reading" minutes={15} />
      <LessonCard title="Practice" minutes={20} />
    </View>
  );
}
