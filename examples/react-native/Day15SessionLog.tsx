import { useState } from 'react';
import { Button, Text, View } from 'react-native';

type Session = { readonly id: number; readonly label: string };
type StudyLog = { readonly completed: number; readonly sessions: readonly Session[] };

function appendSession(previous: StudyLog): StudyLog {
  const nextCount = previous.completed + 1;
  const entry: Session = { id: nextCount, label: 'Session ' + nextCount };
  return { ...previous, completed: nextCount, sessions: [...previous.sessions, entry] };
}

export default function Day15SessionLog() {
  const [log, setLog] = useState<StudyLog>({ completed: 0, sessions: [] });

  function handleCompleteTwo() {
    setLog(appendSession);
    setLog(appendSession);
  }

  function handleReset() {
    setLog({ completed: 0, sessions: [] });
  }

  return (
    <View>
      <Text accessibilityRole="header">Session log</Text>
      <Text>Completed: {log.completed}</Text>
      <Button title="Complete two sessions" onPress={handleCompleteTwo} />
      <Button title="Reset log" onPress={handleReset} />
      {log.sessions.length === 0 ? <Text>No sessions yet.</Text> : (
        <View>
          {log.sessions.map((session) => <Text key={session.id}>{session.label}</Text>)}
        </View>
      )}
    </View>
  );
}
