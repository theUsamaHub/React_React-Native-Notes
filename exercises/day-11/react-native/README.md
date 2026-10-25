# Day 11 — Conditional rendering (react-native)

**Objective:** Apply the daily concept with a small implementation. Budget: 10–20 minutes.

## Requirements

Define RevisionNoticeProps with readonly isVisible: boolean, pending: number and showHint: boolean. Define a file-scope RevisionNotice and an exported PracticeNotice parent that supplies those values. Return null when not visible. Otherwise show a heading Revision notice, a completion message at pending === 0 or a pending count, and an optional hint controlled by the boolean showHint. Use if, a ternary and a boolean guard appropriately. Do not add hooks, events or numeric short-circuit guards.

Use View/Text and a header accessibility role for headings. All visible strings/numbers belong inside Text. For lists, the mapped root View receives the key; View does not automatically scroll.

## Files to create or modify

Modify `PracticeNotice.tsx` in this directory and create `reflection.md` beside it. The starter returns null and intentionally displays nothing. Copy the finished source into a separate configured learning host and follow the [host instructions](../../../examples/react-native/README.md), substituting the actual filename/import and `<PracticeNotice />` usage. Keep the completed source here for review. Preserve the host bootstrap; on native preserve safe-area/navigation providers and keep reusable files outside Router route directories.

## Expected behavior and testing

| isVisible | pending | showHint | Expected output |
|---|---|---|---|
| true | 3 | false | Heading and pending count 3; no hint |
| true | 0 | true | Heading, completion message and hint; no stray zero |
| true | 0 | false | Heading and completion message only |
| false | 3 | true | No notice content at all |

Change only the parent literals between checks and save/reload. Assume non-negative integer counts; explain why the number type does not enforce that. Restore the first scenario afterward.

Run the host's existing type-check command if available and inspect the browser console or native error overlay. For native, test Android/iOS; Expo web alone does not verify the native result. Source save/reload is a development experiment, not implemented runtime interaction.

## Reflection

Explain why returning null still required executing the component, when you chose each conditional form, why count && element is unsafe, and why a branch does not schedule a render.

## Completion criteria

All four cases match, conditional decisions are readable, no bare numeric guards leak output, and final typed source plus reflection are complete.

No complete solution or new dependencies are supplied. Report unavailable host/device/type checks as pending. Request review when ready; completion is recorded only after your confirmation.
