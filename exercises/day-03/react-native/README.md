# Day 03 — JSX and TSX practice on native

**Objective:** Apply the same expressions and type annotations to native output. Budget: 10–15 minutes.

## Requirements and files

Modify `PracticeSession.tsx`. Import native components; use the same topic, 12 reading minutes and 18 practice minutes as the web task, with explicit types. Return one native container and four Text elements: topic, reading time, practice time and calculated total. Add a JSX comment. Every displayed value must be inside Text. No browser attributes, styling libraries, hooks or buttons are needed.

Create `reflection.md` beside the component. Explain which JSX rules stayed the same, why browser `className` is not needed here, and why a Fragment would not permit bare text under a View.

## Run and test

Use the [Expo host instructions](../../../examples/react-native/README.md), replacing `Day01Card` with `PracticeSession`. Preserve its safe-area/layout container. Test reading/practice pairs 12/18 and 5/10; expect totals 30 and 15. Change the topic and verify it appears. Save/reload between cases and check for errors on an Android/iOS target. Confirm the comment is not displayed. Restore 12/18 afterward.

Run the host's existing type checker if available. Native runtime preview does not guarantee type-check success. Keep finished source here and report device execution as pending if only Expo web is available.

**Completion criteria:** All four text values appear, totals are expressions, types and JSX are valid, and the reflection explains platform differences. No complete solution is provided.
