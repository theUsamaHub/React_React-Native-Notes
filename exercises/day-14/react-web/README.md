# Day 14 — State with useState (react-web)

**Objective:** Build a small control whose visible mode changes through state. Budget: 10–20 minutes.

## Requirements

Implement PracticeSession with top-level boolean isReady state initially false. Show Not ready or Ready to practise. Add Prepare and Reset buttons that set explicit true and false values through named handlers.

Use one boolean only. No effects, counters, storage or timers. Do not call Hooks inside handlers and do not mutate variables directly.

## Files to create or modify

Modify PracticeSession.tsx here and create reflection.md beside it. The starter returns null and displays nothing. Copy completed source to a separate learning host using the [host instructions](../../../examples/react-web/README.md) with the actual filename/import and <PracticeSession /> usage. Preserve bootstrap and native safe-area/navigation setup. Keep reusable files outside route directories and keep finished source here for review.

## Expected behavior and testing

Initially Not ready; Prepare shows Ready to practise; Reset returns Not ready. Repeated Prepare remains ready.

Test Reset before Prepare, Prepare twice, Reset, and Prepare again without source edits. Mount two instances temporarily and confirm the untouched one remains Not ready; restore one.

Use a full host reload to observe fresh initial state, and record if tooling reload behavior differs. Do not equate hot refresh with saved progress.

Run the host’s type checker where available and inspect console/error overlays. Native testing requires Android/iOS. These tests use controls in the running app, not source edits. Record unavailable host/device checks as pending.

## Reflection

Explain the two values returned by useState, why an ordinary local variable is insufficient, why const works, how state differs from props, and why this is not durable storage.

## Completion criteria

Correct runtime transitions and instance isolation, top-level Hook usage, no duplicated derived state, valid final source and completed reflection.

No full solution or extra dependencies are supplied. Completion is recorded only after your confirmation.
