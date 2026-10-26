# Day 15 — State Updates (react-web)

**Objective:** Apply two queued pure updates to an object containing an array. Budget: 10–20 minutes.

## Requirements

Implement PracticeReviewLog with typed state { total: number; entries: readonly Entry[] }, where Entry has readonly id: number and label: string. Write a pure addReview(previous) updater returning a new object and array. A Review two button queues it twice; a Clear button replaces state with a fresh empty object. Display the total, keyed entry labels and an empty message.

Use labels Review 1, Review 2, and so on. Derive the next ID from the pending total for this append-only exercise. Never mutate old state or generate IDs through an external counter. No forms, asynchronous effects or storage. Explain that total could be derived from entries.length in a production simplification.

## Files to create or modify

Modify PracticeReviewLog.tsx here and create reflection.md beside it. The starter returns null and displays nothing. Copy completed source to a separate learning host using the [host instructions](../../../examples/react-web/README.md) with the actual filename/import and <PracticeReviewLog /> usage. Preserve bootstrap and native safe-area/navigation setup. Keep reusable files outside route directories and keep finished source here for review.

## Expected behavior and testing

Initial total 0 and empty message; Review two gives 2 rows, then 4 rows on the next press; Clear returns to 0; a new press gives 2 again.

Run 0 → 2 → 4 → 0 → 2 without source edits. Confirm row count equals total after every step and IDs are unique within the displayed list.

Inspect the updater source for new outer object and new nested array. In your reflection, trace how two direct replacements computed from total 0 differ from two pending-state transformations. For an optional focused verification, call the pure helper with frozen input and confirm the input remains unchanged; no new test library is required.

Run the host’s type checker where available and inspect console/error overlays. Native testing requires Android/iOS. These tests use controls in the running app, not source edits. Record unavailable host/device checks as pending.

## Reflection

Explain queue order, captured versus pending values, shallow spread, why copied arrays may still share objects, why updaters cannot contain side effects, and the toy ID strategy’s limits.

## Completion criteria

Correct runtime sequence, matching count/rows, new object/array values without old-state mutation, deterministic IDs, valid typing and a complete reflection.

No full solution or extra dependencies are supplied. Completion is recorded only after your confirmation.
