# Day 05 — Platform UI building blocks (Expo/native)

**Objective:** Practise this day’s concept in a small implementation. Allow 10–15 minutes.

## Requirements

Return a View with a title Text reading Revision plan, two Text elements with the same advice as web, and an inner View containing a Text that says Time: 20 minutes. Apply accessibilityRole="header" to the title. All displayed text must be inside Text; do not copy HTML tags.

Use static content only. No additional libraries, state, event handling or styling are required.

## Files to create or modify

Modify `PracticePanel.tsx` in this directory. Create `reflection.md` beside it. The starter returns `null`, which displays nothing; it is intentionally not a solution.

Copy the finished source into a separate configured learning host and mount `<PracticePanel />`. Follow the [Expo/native host instructions](../../../examples/react-native/README.md), substituting the actual filename, import path and component name. Preserve existing safe-area/navigation providers; put reusable components outside Router route folders. Keep the completed exercise source here for review.

## Expected behavior and testing

1. Mount the component and verify the title, two advice lines and time appear in order.
2. Change the second advice sentence and save/reload; confirm that sentence updates.
3. On web, inspect the actual DOM and confirm valid nesting and heading level. On native, confirm there is no text-containment error; if available, use TalkBack or VoiceOver to inspect the title role.
4. Explain why the generic metadata wrapper could be omitted if it has no grouping/layout purpose.

Use the host’s existing type-check command if available. A visible preview alone does not prove type correctness. Test on Android/iOS, not solely Expo web. Source-edit refresh is a development workflow, not runtime application state.

## Reflection

Explain meaning versus appearance, why View is not an exact semantic replacement for section, and what a heading role does not do. Record which accessibility checks you actually performed.

## Completion criteria

Correct platform elements, readable content in the intended order, suitable heading meaning, and an explanation of each container’s purpose.

Record any missing host/device/type/accessibility checks as pending. No complete solution is provided. Request an exercise review when ready; progress is marked completed only after your confirmation.
