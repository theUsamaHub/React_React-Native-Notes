import { Text, View } from 'react-native';

function OverviewTitle() {
  return <Text accessibilityRole="header">Study overview</Text>;
}

function ReadingTask() {
  return <Text>Read the lesson for 10 minutes.</Text>;
}

function PracticeTask() {
  return <Text>Practise the concept for 20 minutes.</Text>;
}

function StudyPlan() {
  return (
    <View>
      <ReadingTask />
      <PracticeTask />
    </View>
  );
}

export default function Day07StudyOverview() {
  return (
    <View>
      <OverviewTitle />
      <StudyPlan />
    </View>
  );
}
