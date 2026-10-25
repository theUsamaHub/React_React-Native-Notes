# Day 12 — Lists and keys (react-native)

**Objective:** Apply the daily concept with a small implementation. Budget: 10–20 minutes.

## Requirements

Declare a Task type with readonly id: string and readonly title: string, then a readonly Task[] with three revision tasks of your own. Give each record a persistent distinct ID and a title. Map the data to rows using the ID as the key on the directly returned row. Return a clear empty-state message when the array is empty. Do not use array indexes, random values, mutable titles as keys, or mutate the data during rendering. No hooks, events, FlatList or new libraries are required.

Use View/Text and a header accessibility role for headings. All visible strings/numbers belong inside Text. For lists, the mapped root View receives the key; View does not automatically scroll.

## Files to create or modify

Modify `PracticeTaskList.tsx` in this directory and create `reflection.md` beside it. The starter returns null and intentionally displays nothing. Copy the finished source into a separate configured learning host and follow the [host instructions](../../../examples/react-native/README.md), substituting the actual filename/import and `<PracticeTaskList />` usage. Keep the completed source here for review. Preserve the host bootstrap; on native preserve safe-area/navigation providers and keep reusable files outside Router route directories.

## Expected behavior and testing

1. Initial three records: verify exactly three rows, matching titles and array order.
2. Rename one title while preserving its ID: verify the updated title.
3. Reorder the existing source records without changing IDs: verify the new order.
4. Prepend one distinct new record: verify four rows, new one first.
5. Replace the source array with []: verify the empty-state message and no rows.
6. Restore the original three records and check console/type diagnostics.

Write an identity table for A,B becoming X,A,B: compare data IDs with indexes. Explain the consequences without claiming source refresh proves normal-update state preservation. Verify each ID is unique among siblings; TypeScript string types do not enforce uniqueness.

Run the host's existing type-check command if available and inspect the browser console or native error overlay. For native, test Android/iOS; Expo web alone does not verify the native result. Source save/reload is a development experiment, not implemented runtime interaction.

## Reflection

Explain map’s returned array, expression versus block callback returns, key placement, why key is not an ordinary child prop, and why source edits test resulting content rather than runtime identity. Explain the limits of a short native View-based list.

## Completion criteria

Correct row and empty outputs, stable unique keys at the mapped boundary, no data mutation, suitable platform elements and a correct written identity explanation.

No complete solution or new dependencies are supplied. Report unavailable host/device/type checks as pending. Request review when ready; completion is recorded only after your confirmation.
