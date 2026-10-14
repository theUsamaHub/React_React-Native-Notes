# Day 01 — Native practice

**Objective:** Describe the same learner introduction for a native mobile screen. Budget: 10–15 minutes.

## Requirements

- Modify `PracticeCard.tsx` to return one native container and three text elements.
- Show the same name, learning goal and reason as your web exercise.
- Import the required core components from `react-native`; put every visible string inside a text component.
- Use static text only. No events, state, libraries, or styling are required.
- Create `reflection.md` explaining why copying web heading/paragraph tags into this screen would be incorrect.

## Files and running

Modify `exercises/day-01/react-native/PracticeCard.tsx` and create `reflection.md` beside it. Use a separate Expo learning host, following the [native example instructions](../../../examples/react-native/README.md), substituting `PracticeCard` for `Day01Card`. Keep your finished source here for review. Preserve the host's existing safe-area screen container.

The starter returns `null`, which displays nothing. Implement your own UI before testing.

## Expected behavior and testing

1. Start the Expo host and open its Android/iOS target on a compatible device/emulator.
2. Verify three readable text elements and matching web/native content. Matching appearance is not required.
3. Change the goal in the source and save. Verify the native screen updates without a red error overlay.
4. Run the host's existing type-check command if available. If only web preview was tested, report native verification as pending.

**Completion criteria:** Content is visible, native components are used correctly, and your reflection explains the shared React idea and different rendering target. No complete solution is supplied.
