# Day 08 — Rendering and reconciliation (react-web)

**Objective:** Apply this day's concept on the web. Budget: 10–20 minutes.

## Requirements

Define a file-scope RevisionMessage child and an exported PracticeTrace parent. The parent shows a heading and the child. Write your own revision sentence. On web use section/h2/p; on native use View/Text and a header accessibility role. Keep it static: no hooks, timers, events, props or shared render counters.

## Files to create or modify

Modify `PracticeTrace.tsx` in this directory and create `reflection.md` beside it. The starter returns null and intentionally displays nothing. Copy the completed source to a separate configured learning host and follow the [host instructions](../../../examples/react-web/README.md), substituting `PracticeTrace` for the filename, import and JSX usage. Preserve the host bootstrap and, on native, its existing safe-area/navigation setup. Keep reusable files outside Expo Router route directories. Keep completed source here for review.

## Expected behavior and testing

Inspect the displayed heading and sentence. On web, inspect the section/h2/p DOM and confirm there is no RevisionMessage tag. On native, check on Android/iOS and do not infer physical view counts from JSX. Predict three hypothetical normal updates with stable ancestors: identical output, changed sentence with the same host type, and a replaced host type (web p to div). Source edits may show resulting structures but do not prove runtime identity. Label predictions separately from observed output.

Check console/error overlays and the host's existing type-check command where available. Restore any deliberately invalid experiments before submission. Source save/reload is development refresh, not implemented runtime interactivity. Native checks require Android/iOS; Expo web alone does not verify them.

## Reflection

Draw the custom-component tree and platform-output description. Explain render versus commit/display, what virtual DOM means, and why hot refresh is not a controlled reconciliation test.

## Completion criteria

Correct static UI, native text containment where relevant, a tree sketch, and predictions that distinguish description changes from actual measured host operations.

No libraries or full exercise solutions are supplied. Record unavailable runtime/type checks as pending. Request review when ready; creation of these files does not mark the day completed.
