# Day 09 — Typed props (react-native)

**Objective:** Apply this day's concept on a native screen. Budget: 10–20 minutes.

## Requirements

Define a GoalCardProps type with readonly title: string and readonly minutes: number. Define one file-scope GoalCard that reads a typed props parameter. Render two cards from the exported PracticeGoals: Recall / 10 minutes and Coding / 25 minutes. Do not hard-code those values in GoalCard, mutate props, or add state/events. Use appropriate web section/h2/p or native View/Text output.

## Files to create or modify

Modify `PracticeGoals.tsx` in this directory and create `reflection.md` beside it. The starter returns null and intentionally displays nothing. Copy the completed source to a separate configured learning host and follow the [host instructions](../../../examples/react-native/README.md), substituting `PracticeGoals` for the filename, import and JSX usage. Preserve the host bootstrap and, on native, its existing safe-area/navigation setup. Keep reusable files outside Expo Router route directories. Keep completed source here for review.

## Expected behavior and testing

Expect two differently titled cards showing 10 and 25 minutes. Change only the second usage to 30; after save/reload, the first remains 10 and the second shows 30. Temporarily supply minutes="25" and inspect the host type checker/editor diagnostic, then restore minutes={25}. Temporarily omit title and inspect its diagnostic, then restore it. A visible preview is not a substitute for a type check.

Check console/error overlays and the host's existing type-check command where available. Restore any deliberately invalid experiments before submission. Source save/reload is development refresh, not implemented runtime interactivity. Native checks require Android/iOS; Expo web alone does not verify them.

## Reflection

Explain which component owns the supplied values, how two instances use the same definition with different inputs, why quoted numeric text is a different type, and why readonly is not runtime validation.

## Completion criteria

One reusable typed card, correct independent output, no prop mutation or duplicate card implementation, valid final source, and a clear one-way data-flow explanation.

No libraries or full exercise solutions are supplied. Record unavailable runtime/type checks as pending. Request review when ready; creation of these files does not mark the day completed.
