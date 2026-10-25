import { Text, View } from 'react-native';

type StudyStatusProps = {
  readonly isVisible: boolean;
  readonly remaining: number;
  readonly showTip: boolean;
};

function StudyStatus(props: StudyStatusProps) {
  if (!props.isVisible) {
    return null;
  }

  return (
    <View>
      <Text accessibilityRole="header">Study status</Text>
      {props.remaining === 0 ? (
        <Text>All lessons reviewed.</Text>
      ) : (
        <Text>Lessons remaining: {props.remaining}</Text>
      )}
      {props.showTip && <Text>Explain one idea in your own words.</Text>}
    </View>
  );
}

export default function Day11StudyStatus() {
  return <StudyStatus isVisible={true} remaining={2} showTip={false} />;
}
