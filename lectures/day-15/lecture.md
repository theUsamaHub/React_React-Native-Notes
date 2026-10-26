# Day 15 — State Updates

## Lecture Header

- **Day:** 15
- **Topic:** Previous-state updaters and immutable object/array changes
- **Learning phase:** Phase 2 — Components and Data
- **Difficulty:** Beginner
- **Prerequisites:** Days 01–14; useState, event handlers, objects, arrays, map and keys. Spread syntax and updater callbacks are introduced before the example.
- **Estimated study time:** 25–35 minutes reading; 20–40 minutes combined practice.
- **Learning objectives:** Choose replacement versus functional updates; trace queued changes; replace objects/arrays without mutation; copy each changed level; keep updater functions pure.

This lesson stays focused on computing next state. The tiny session log combines an object and an array to demonstrate one update model. No forms, effects, backend, persistence or state-management library is added.

## Section A — React.js Concept

### 1. WHAT

A state update requests a new value. A replacement supplies that value directly; a functional update supplies a pure function that receives pending previous state and returns the next state. Immutability means treating existing state as read-only and building replacement values instead of changing the old object or array.

### 2. WHY

Two requests based on the same captured value can overwrite the same result rather than accumulate. Mutating an existing state object can also make old and new snapshots share unintended changes. Both problems disappear when the next value is calculated explicitly from the appropriate input and previous state remains untouched.

### 3. WHEN

Use direct replacements when the desired result is independent of the previous value, such as resetting to an empty log. Use an updater when the next value depends on pending state, such as appending the next numbered session. Use new objects/arrays for changed collections, even if only one field or item changes.

### 4. HOW

Suppose a render sees count = 0. Calling setCount(count + 1) twice supplies the replacement 1 twice. Calling setCount(previous => previous + 1) twice queues transformations 0 → 1 → 2. React processes updater functions in order; each receives the pending result of earlier queued updates. Updates within this handler are batched, so do not depend on seeing an intermediate screen after each call. [Queued state updates](https://react.dev/learn/queueing-a-series-of-state-updates).

An updater must be pure: no alerts, network calls, mutation of old state or external counters. Development checks may call it more than once to detect impurities; do not interpret that as permission for duplicate side effects.

useState replaces the stored object, it does not automatically merge partial objects. Copy fields you retain and override the ones that change. Copying is shallow: spreading an object or array does not deep-copy nested objects. When changing a nested field, create new containers along that path. [Object updates](https://react.dev/learn/updating-objects-in-state).

For an item update, `setItems(previous => previous.map(item => item.id === targetId ? { ...item, title: 'Revised' } : item))` returns a new array and a new object for the changed item while sharing unchanged records safely. The conditional picks which record changes. For removal, `previous.filter(item => item.id !== targetId)` returns a new array containing only records whose predicate is true. `filter` keeps matching items; it does not modify the source. Avoid push, splice or direct field assignment on existing state. [Array updates](https://react.dev/learn/updating-arrays-in-state).

### 5. SYNTAX

`setLog(appendSession)` passes an updater function; React supplies pending state later. Calling `setLog(appendSession(log))` instead computes a replacement immediately from this render's captured log.

`useState<StudyLog>(...)` explicitly supplies the state type; this is useful because the initial empty array alone does not describe its intended record type clearly. `function appendSession(previous: StudyLog): StudyLog` types both input and return.

`{ ...previous, completed: nextCount }` creates a new object, copies prior fields, then overrides completed. Order matters: a later spread could overwrite your new field. `[...previous.sessions, entry]` creates a new array with old entries followed by the new one. Old entries can be shared because they are not mutated here. `readonly` helps TypeScript reject accidental writes; it is not a runtime freeze.

The previous-state parameter name is arbitrary. A named helper and an inline arrow updater follow the same rule: receive previous state, return next state.

### 6. COMPLETE EXAMPLE

Source: [web Day15SessionLog.tsx](../../examples/react-web/Day15SessionLog.tsx).

```tsx
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
```

Line 1 imports useState; 2 is spacing; 3 defines an immutable session record; 4 defines the containing state object; 5 is spacing. Line 6 opens the typed pure updater; 7 calculates the next count; 8 creates a new record from it; 9 returns a new outer object and new appended array; 10 closes the helper; 11 is spacing. Line 12 exports the component; 13 initializes typed empty state; 14 is spacing; 15 opens the event handler; 16–17 queue the same pure transformation twice; 18 closes it; 19 is spacing; 20–22 define direct reset replacement; 23 is spacing. Line 24 starts return; 25 opens section; 26 supplies heading; 27 displays count; 28–29 connect the two controls; 30 selects empty versus populated output; 31 opens ul; 32 maps stable IDs to rows; 33 closes ul; 34 closes the conditional; 35–37 close section, return and function.

**Run:** Follow the [web host instructions](../../examples/react-web/README.md), replacing Day01Card with Day15SessionLog in the filename/import/usage. Preserve the separate learning host’s bootstrap. This is a complete component, not a standalone app.

Initially show Completed: 0 and No sessions yet. Click Complete two sessions once: expect count 2 with Session 1 and Session 2. Click again: expect count 4 with four distinct rows. Reset: expect 0 and the empty message. Complete two once more: expect 2 and two rows again. No alerts or logs belong inside the updater. Check for duplicate-key warnings. These are runtime controls; do not change source between steps.

### 7. REAL-WORLD USE

A session summary can update its count and append the matching log entry together. Both values are in one object here so the example can demonstrate a coherent transition. The completed count duplicates information available from array length; a real app might derive it instead. It is retained here solely to exercise object and array changes in one updater.

### 8. COMMON MISTAKES

- Calling the setter twice with calculations from the same captured state does not guarantee two increments.
- Assigning previous.completed or pushing into previous.sessions mutates the old snapshot.
- Copying only the outer object while mutating its nested array still changes shared state.
- Copying an array then mutating an existing element still mutates that shared object.
- A partial object replacement can discard fields; useState does not merge automatically.
- Generating IDs with an external increment inside an updater makes it impure.

### 9. BEST PRACTICES

Return complete valid next state and keep updaters deterministic. Preserve IDs for unchanged records. For this append-only toy log, IDs derive from the previous count and reset only when all rows are cleared. This is not a general persistent ID strategy for deletion, synchronization or multi-user data. Keep lists short here; large-list performance is a later topic.

## Section B — React Native Equivalent

### 1. WHAT

State queueing and immutable updates use the same React APIs on native. The data transition can be identical because it contains ordinary TypeScript logic.

### 2. WHY

Native presses still need pending-state calculations; native rendering does not turn mutation into a safe update. Only controls and output containers differ.

### 3. WHEN

Use this pattern for a small locally owned native summary with related fields. It does not add persistence, reliable background execution or server synchronization.

### 4. HOW

onPress queues appendSession twice. Each pure transformation gets the pending object and returns a new object plus array. React later presents the resulting count and rows through native components. Reset supplies a fresh empty object directly. Neither the helper nor its data model needs native imports.

### 5. EXPO IMPLEMENTATION

Copy the native file outside Expo Router route directories and render Day15SessionLog inside a separate learning screen’s existing safe-area/layout container. Follow the [native host instructions](../../examples/react-native/README.md), substituting this component name. Preserve providers/navigation and your original app. No packages are added.

### 6. COMPLETE NATIVE EXAMPLE

Source: [native Day15SessionLog.tsx](../../examples/react-native/Day15SessionLog.tsx).

```tsx
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
```

### 7. LINE-BY-LINE EXPLANATION

Line 1 imports useState and line 2 native controls; 3 is spacing; 4–5 define Session and StudyLog; 6 is spacing; 7–11 define the pure updater (count, new record, new object/array, close); 12 is spacing. Line 13 defines the component; 14 declares typed state; 15 is spacing; 16–19 queue two transformations in the handler; 20 is spacing; 21–23 define reset; 24 is spacing. Line 25 starts return; 26 opens View; 27 describes the heading; 28 displays count in Text; 29–30 connect native Buttons; 31 selects empty versus populated content; 32 opens the row group; 33 maps keyed Text elements; 34–38 close group, condition, outer View, return and component.

### 8. MOBILE-SPECIFIC CONSIDERATIONS

Test the same 0 → 2 → 4 → 0 → 2 sequence on Android/iOS. Keep only a few rows so the unscrolled View remains visible. View does not automatically scroll; growing production lists need a later layout/list solution. Native Button titles and Text rows differ from browser controls but the predicted data transitions do not.

### 9. COMMON MISTAKES AND BEST PRACTICES

Keep raw labels inside Text, put keys on the mapped Text elements, and use onPress references. Do not call native APIs inside the pure updater. Resetting the whole toy log removes all old IDs before starting from 1 again; do not reuse this counter-ID scheme for a deletable or persistent collection.

No configured React/Expo application or installed package versions were found in this workspace on 2026-10-26. Runtime, host type compatibility and device verification remain pending. Expo web alone is not native verification.

## Section C — React vs React Native Comparison

| Aspect | React.js | React Native |
|---|---|---|
| Concept | Compute next state without mutation | Identical React data transition |
| Syntax | setLog(appendSession) | Same updater form |
| Implementation | Buttons, paragraph and ul/li | Buttons, Text and View |
| Behavior | Ordered queued transforms; object replacement | Same queue and replacement rules |
| Use case | Small session history | Local mobile session history |

Pure transformation logic and type contracts transfer directly. Control props, list presentation, scrolling and lifecycle requirements remain platform-specific.

## Section D — Practical Exercise

### React.js exercise

- **Objective:** Apply two queued pure updates to an object containing an array.
- **Requirements:** Implement PracticeReviewLog with typed state { total: number; entries: readonly Entry[] }, where Entry has readonly id: number and label: string. Write a pure addReview(previous) updater returning a new object and array. A Review two button queues it twice; a Clear button replaces state with a fresh empty object. Display the total, keyed entry labels and an empty message.
- **Files:** Modify [PracticeReviewLog.tsx](../../exercises/day-15/react-web/PracticeReviewLog.tsx); create reflection.md beside it.
- **Expected behavior:** Initial total 0 and empty message; Review two gives 2 rows, then 4 rows on the next press; Clear returns to 0; a new press gives 2 again.
- **Testing:** Run 0 → 2 → 4 → 0 → 2 without source edits. Confirm row count equals total after every step and IDs are unique within the displayed list.
- **Completion criteria:** Correct runtime sequence, matching count/rows, new object/array values without old-state mutation, deterministic IDs, valid typing and a complete reflection.

Read the [full exercise brief](../../exercises/day-15/react-web/README.md). No complete solution is supplied.

### React Native exercise

- **Objective:** Apply two queued pure updates to an object containing an array.
- **Requirements:** Implement the same typed state, pure updater and two controls using native Button onPress and View/Text output. Keep visible text inside Text and stable keys on mapped roots.
- **Files:** Modify [PracticeReviewLog.tsx](../../exercises/day-15/react-native/PracticeReviewLog.tsx); create reflection.md beside it.
- **Expected behavior:** Initial total 0 and empty message; Review two gives 2 rows, then 4 rows on the next press; Clear returns to 0; a new press gives 2 again.
- **Testing:** Run 0 → 2 → 4 → 0 → 2 without source edits. Confirm row count equals total after every step and IDs are unique within the displayed list.
- **Completion criteria:** Correct runtime sequence, matching count/rows, new object/array values without old-state mutation, deterministic IDs, valid typing and a complete reflection.

Read the [full exercise brief](../../exercises/day-15/react-native/README.md). No complete solution is supplied.

## Section E — Knowledge Check

Attempt the [five questions](questions.md) before opening the collapsible answers.

## Section F — Daily Summary

- **Key concepts:** Functional updates calculate from pending state; immutable replacement preserves old snapshots.
- **Platform differences:** Identical data logic with different controls and row presentation.
- **Important syntax:** Setter callbacks, object/array spread, map/filter for non-mutating transformations.
- **Pitfalls:** Stale replacement calculations, shallow-copy mutation, partial object loss and impure updaters.
- **Practical skills:** Queue updates and build a small immutable session log.

**Next lecture:** Day 16 — Component re-rendering and state snapshots. It has not been generated.

Preparation does not mark any lesson completed. Prior statuses remain unchanged until you confirm completion.
