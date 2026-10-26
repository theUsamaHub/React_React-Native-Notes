import { useState } from 'react';

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
    <section>
      <h2>Session log</h2>
      <p>Completed: {log.completed}</p>
      <button type="button" onClick={handleCompleteTwo}>Complete two sessions</button>
      <button type="button" onClick={handleReset}>Reset log</button>
      {log.sessions.length === 0 ? <p>No sessions yet.</p> : (
        <ul>
          {log.sessions.map((session) => <li key={session.id}>{session.label}</li>)}
        </ul>
      )}
    </section>
  );
}
