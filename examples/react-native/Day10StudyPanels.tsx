import type { ReactNode } from 'react';
import { Text, View } from 'react-native';

type StudyPanelProps = {
  readonly title: string;
  readonly children: ReactNode;
};

function StudyPanel(props: StudyPanelProps) {
  return (
    <View>
      <Text accessibilityRole="header">{props.title}</Text>
      <View>{props.children}</View>
    </View>
  );
}

function StudyTip() {
  return <Text>Explain the idea in your own words.</Text>;
}

export default function Day10StudyPanels() {
  return (
    <View>
      <StudyPanel title="Today's focus">
        <Text>Build one small example.</Text>
      </StudyPanel>
      <StudyPanel title="Revision tip">
        <StudyTip />
      </StudyPanel>
    </View>
  );
}
