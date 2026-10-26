# Day 14 — State with useState

## Lecture Header

- **Day:** 14
- **Topic:** Component memory and state setters
- **Learning phase:** Phase 2 — Components and Data
- **Difficulty:** Beginner
- **Prerequisites:** Days 01–13; events, typed values, conditional rendering and component identity. Hooks and array destructuring are introduced here.
- **Estimated study time:** 25–35 minutes reading; 20–40 minutes combined practice.
- **Learning objectives:** Explain why local variables are insufficient for changing UI; declare state at the top level; request updates using a setter; distinguish state from props and persistent storage; verify independent component instances.

Today's only primary topic is component state. Start/Pause uses explicit boolean replacements; previous-value updaters and object/array updates belong to Day 15.

## Section A — React.js Concept

### 1. WHAT

State is memory React associates with a component instance in its tree. useState is a Hook: a React function that lets a component use a React capability. It returns a pair: the current state value for this render and a setter that requests its next value. [Component memory](https://react.dev/learn/state-a-components-memory).

### 2. WHY

An ordinary variable inside a function is recreated when the function runs. Assigning it in an event handler does not ask React to render again. State solves both needs: retain a value across renders for the same component identity and request another render when it changes. A module-level variable is not a substitute; it is shared outside individual instances and does not integrate with React updates.

### 3. WHEN

Use local state for information this component owns and must remember while it is mounted, such as whether a study session is active. Use props for data supplied by the parent. Compute values that are already determined by existing inputs rather than storing unnecessary duplicates. State is not automatic disk/server persistence.

### 4. HOW

Before the first Hook call, learn these Rules of Hooks: call useState at the top level of a function component or a custom Hook; do not put it in a condition, loop, nested callback or event handler; keep Hook calls before conditional returns so call order stays consistent. Custom Hooks come later; today's calls belong in the component body.

On initial mount React uses false as the initial state. On subsequent renders with the same identity, React supplies the remembered state. setIsStudying(true) requests an update; the next render reads true and chooses new text. A setter does not rewrite the local variable in the handler that is already running. Do not await it or rely on a log immediately after it showing the next value. [useState reference](https://react.dev/reference/react/useState).

State is isolated per instance. Removing/replacing an instance can reset its memory, and a full application reload normally starts fresh. Development refresh has its own preservation behavior and is not a persistence guarantee.

### 5. SYNTAX

`import { useState } from 'react'` imports the runtime Hook.

`const [isStudying, setIsStudying] = useState(false)` uses array destructuring: the first returned item is named isStudying, and the second is named setIsStudying. The setter name is conventional. TypeScript infers boolean from false, so a string setter argument would be a type error. No explicit generic is needed for this boolean.

`const` means this render's binding is not reassigned. A later component execution receives a new binding containing the next state. The setter requests that future value; direct assignment is not the mechanism. The initial argument is not a reset command run on every render.

### 6. COMPLETE EXAMPLE

Source: [web Day14StudyToggle.tsx](../../examples/react-web/Day14StudyToggle.tsx).

```tsx
import { useState } from 'react';

export default function Day14StudyToggle() {
  const [isStudying, setIsStudying] = useState(false);

  function handleStart() {
    setIsStudying(true);
  }

  function handlePause() {
    setIsStudying(false);
  }

  return (
    <section>
      <h2>Study session</h2>
      <p>{isStudying ? 'Studying now' : 'Paused'}</p>
      <button type="button" onClick={handleStart}>Start</button>
      <button type="button" onClick={handlePause}>Pause</button>
    </section>
  );
}
```

Line 1 imports useState; 2 is spacing; 3 declares the component; 4 obtains the current boolean and setter; 5 is spacing; 6–8 define Start and request true; 9 is spacing; 10–12 define Pause and request false; 13 is spacing. Line 14 starts return; 15 opens section; 16 supplies heading; 17 selects the status from state; 18 and 19 pass handlers to non-submit buttons; 20–22 close section, return and component.

**Run:** Follow the [web host instructions](../../examples/react-web/README.md), replacing Day01Card with Day14StudyToggle in the filename/import/usage. Preserve the separate learning host’s bootstrap. This is a complete component, not a standalone app.

On first load expect Paused. Click Start: expect Studying now without a source edit. Click Pause: expect Paused. Repeat Start twice; it stays Studying now rather than toggling. Render two usages of the component inside the host’s existing container and confirm starting one does not start the other. Restore one usage. A full reload starts a fresh session; hot refresh is not a reliable persistence test.

### 7. REAL-WORLD USE

A study-session panel can keep an active/paused choice in memory while the user operates it. A real timer would require additional timekeeping logic; this example is only a boolean mode and does not measure elapsed time.

### 8. COMMON MISTAKES

- Calling the setter during rendering can cause repeated renders and errors.
- Putting useState inside a handler breaks Hook rules.
- Keeping the value in an ordinary local variable does not update the UI.
- Assuming initial false resets every render misunderstands initialization.
- Treating development refresh preservation as saved progress is unreliable.
- Reassigning the state variable bypasses the setter.

### 9. BEST PRACTICES

Keep only the boolean needed for the decision. Call Hooks unconditionally at the top level and call setters from interaction handlers here. Use descriptive state/setter names. Test runtime interactions without editing source between them, and test component-instance isolation. Detailed render timing is the next phase of the roadmap.

## Section B — React Native Equivalent

### 1. WHAT

React Native uses the same useState Hook imported from react. Local state is part of React, not an Expo-specific storage system.

### 2. WHY

The underlying boolean and setter are identical; native controls and text output differ. React Native needs onPress and Text rather than browser events and paragraphs.

### 3. WHEN

Use state for a native screen’s locally owned UI mode. Do not confuse component memory with secure storage, navigation persistence or storage across app termination.

### 4. HOW

A native button press calls the handler, which requests a boolean replacement. React renders with the next value and native Text displays the selected status. Hook call-order requirements and per-instance isolation apply exactly as on web.

### 5. EXPO IMPLEMENTATION

Copy the native file outside Expo Router route directories and render Day14StudyToggle inside a separate learning screen’s existing safe-area/layout container. Follow the [native host instructions](../../examples/react-native/README.md), substituting this component name. Preserve providers/navigation and your original app. No packages are added.

### 6. COMPLETE NATIVE EXAMPLE

Source: [native Day14StudyToggle.tsx](../../examples/react-native/Day14StudyToggle.tsx).

```tsx
import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function Day14StudyToggle() {
  const [isStudying, setIsStudying] = useState(false);

  function handleStart() {
    setIsStudying(true);
  }

  function handlePause() {
    setIsStudying(false);
  }

  return (
    <View>
      <Text accessibilityRole="header">Study session</Text>
      <Text>{isStudying ? 'Studying now' : 'Paused'}</Text>
      <Button title="Start" onPress={handleStart} />
      <Button title="Pause" onPress={handlePause} />
    </View>
  );
}
```

### 7. LINE-BY-LINE EXPLANATION

Line 1 imports the React Hook; 2 imports native primitives; 3 is spacing; 4 defines the component; 5 declares boolean state; 6 is spacing; 7–9 define Start; 10 is spacing; 11–13 define Pause; 14 is spacing. Line 15 starts return; 16 opens View; 17 shows heading-role Text; 18 selects status text; 19–20 connect Button labels/onPress handlers; 21–23 close View, return and component.

### 8. MOBILE-SPECIFIC CONSIDERATIONS

Test Start/Pause on Android/iOS. Preserve safe-area layout and readable button titles. A JS reload or process restart is different from a source hot refresh; do not claim persistence based on a development session. A screen staying mounted in navigation may keep its state, whereas replacing/unmounting it can lose it; navigation lifecycle is a later topic.

### 9. COMMON MISTAKES AND BEST PRACTICES

Import useState from react, Button/Text/View from react-native. Do not call a Hook inside onPress, and pass handlers instead of invoking setters in JSX. Keep visible status inside Text. This control changes a boolean mode; it is not a running stopwatch.

No configured React/Expo application or installed package versions were found in this workspace on 2026-10-26. Runtime, host type compatibility and device verification remain pending. Expo web alone is not native verification.

## Section C — React vs React Native Comparison

| Aspect | React.js | React Native |
|---|---|---|
| Concept | Memory tied to a component instance | Same React state model |
| Syntax | useState(false), setter(true) | Identical Hook/setter syntax |
| Implementation | Click updates paragraph output | Press updates Text output |
| Behavior | Local memory across renders, not reload persistence | Same, with native lifecycle considerations |
| Use case | Active/paused study panel | Native study-mode panel |

Hook rules, state ownership, initialization and setters transfer directly. Host controls, lifecycle details and display APIs differ.

## Section D — Practical Exercise

### React.js exercise

- **Objective:** Build a small control whose visible mode changes through state.
- **Requirements:** Implement PracticeSession with top-level boolean isReady state initially false. Show Not ready or Ready to practise. Add Prepare and Reset buttons that set explicit true and false values through named handlers.
- **Files:** Modify [PracticeSession.tsx](../../exercises/day-14/react-web/PracticeSession.tsx); create reflection.md beside it.
- **Expected behavior:** Initially Not ready; Prepare shows Ready to practise; Reset returns Not ready. Repeated Prepare remains ready.
- **Testing:** Test Reset before Prepare, Prepare twice, Reset, and Prepare again without source edits. Mount two instances temporarily and confirm the untouched one remains Not ready; restore one.
- **Completion criteria:** Correct runtime transitions and instance isolation, top-level Hook usage, no duplicated derived state, valid final source and completed reflection.

Read the [full exercise brief](../../exercises/day-14/react-web/README.md). No complete solution is supplied.

### React Native exercise

- **Objective:** Build a small control whose visible mode changes through state.
- **Requirements:** Implement the same state and handlers using native Button onPress/title and View/Text with a heading role. Import useState from react.
- **Files:** Modify [PracticeSession.tsx](../../exercises/day-14/react-native/PracticeSession.tsx); create reflection.md beside it.
- **Expected behavior:** Initially Not ready; Prepare shows Ready to practise; Reset returns Not ready. Repeated Prepare remains ready.
- **Testing:** Test Reset before Prepare, Prepare twice, Reset, and Prepare again without source edits. Mount two instances temporarily and confirm the untouched one remains Not ready; restore one.
- **Completion criteria:** Correct runtime transitions and instance isolation, top-level Hook usage, no duplicated derived state, valid final source and completed reflection.

Read the [full exercise brief](../../exercises/day-14/react-native/README.md). No complete solution is supplied.

## Section E — Knowledge Check

Attempt the [five questions](questions.md) before opening the collapsible answers.

## Section F — Daily Summary

- **Key concepts:** State preserves per-instance memory and setters request updates.
- **Platform differences:** Shared Hook model, different controls/output.
- **Important syntax:** useState, array destructuring and setter calls.
- **Pitfalls:** Conditional Hooks, render-time setters and assuming persistence.
- **Practical skills:** Implement and test a two-mode interactive panel.

**Next lecture:** Day 15 — State updates based on previous values and immutable objects/arrays.

Preparation does not mark any lesson completed. Prior statuses remain unchanged until you confirm completion.
