# Day 13 — Event Handling (react-web)

**Objective:** Connect two explicit user actions without state. Budget: 10–20 minutes.

## Requirements

Implement PracticeReminders with two non-submit buttons: Review JSX and Review keys. Use a helper with a string topic parameter and callbacks to show the chosen topic in a browser alert.

Write your own messages. Nothing should open on initial display. Add no hooks, state or automatic timers.

## Files to create or modify

Modify PracticeReminders.tsx here and create reflection.md beside it. The starter returns null and displays nothing. Copy completed source to a separate learning host using the [host instructions](../../../examples/react-web/README.md) with the actual filename/import and <PracticeReminders /> usage. Preserve bootstrap and native safe-area/navigation setup. Keep reusable files outside route directories and keep finished source here for review.

## Expected behavior and testing

No initial dialog; each activated control opens a message for only its selected topic.

Activate JSX, dismiss, activate keys, dismiss, then activate JSX again. Reload and confirm silence. On web also use keyboard activation.

All three activations must identify the right topic without source changes between them. Restore focus appropriately after dismissing the dialog if the host supports it.

Run the host’s type checker where available and inspect console/error overlays. Native testing requires Android/iOS. These tests use controls in the running app, not source edits. Record unavailable host/device checks as pending.

## Reflection

Explain passing a function versus invoking it, why the topic needs a wrapper callback, and which APIs differed on native. Distinguish handler definitions from nested component definitions.

## Completion criteria

Correct user-triggered messages, useful labels, no render-time actions and a complete reflection.

No full solution or extra dependencies are supplied. Completion is recorded only after your confirmation.
