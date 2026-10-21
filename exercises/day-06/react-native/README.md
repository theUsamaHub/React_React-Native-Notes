# Day 06 — Modules and imports/exports (Expo/native)

**Objective:** Practise this day’s concept in a small implementation. Allow 10–15 minutes (up to 20 for path troubleshooting).

## Requirements

Use the same three-file contract as web: PracticeTitle.tsx default-exports a heading Text component; practiceInfo.ts named-exports practiceTopic and plannedMinutes (20); PracticeLesson.tsx imports them and returns a View containing the title and two Text elements. Keep the title’s header role, and import native components in each file that uses them.

Use static content only. No additional libraries, state, event handling or styling are required.

## Files to create or modify

Modify `PracticeLesson.tsx`, `PracticeTitle.tsx`, and `practiceInfo.ts` in this directory. Create `reflection.md` beside it. The starter returns `null`, which displays nothing; it is intentionally not a solution. The two helper starters contain only export {}; this marks them as modules without supplying any exercise exports. Replace that placeholder with your implementation.

Copy the finished source into a separate configured learning host and mount `<PracticeLesson />`. Follow the [Expo/native host instructions](../../../examples/react-native/README.md), substituting the actual filename, import path and component name. Preserve existing safe-area/navigation providers; put reusable components outside Router route folders. Keep the completed exercise source here for review.

## Expected behavior and testing

1. Copy all three files together into one learning-host folder, outside native route directories. Import and mount PracticeLesson from that folder.
2. Verify the title, your topic and a 20-minute estimate.
3. Edit only practiceInfo.ts to set plannedMinutes to 35; save/reload and confirm the estimate updates. Restore 20.
4. Inspect every import against its export: default versus named, path, and exact filename case.
5. Confirm the host’s type checker finds no unresolved module/export errors when available.

Use the host’s existing type-check command if available. A visible preview alone does not prove type correctness. Test on Android/iOS, not solely Expo web. Source-edit refresh is a development workflow, not runtime application state.

## Reflection

Draw the three-file dependency graph. Explain which imports need braces, what ./ means relative to PracticeLesson.tsx, and why copying only that file would fail.

## Completion criteria

Three correctly connected modules; topic/time sourced from named exports; title sourced from a default export; native files contain no browser tags; complete reflection.

Record any missing host/device/type/accessibility checks as pending. No complete solution is provided. Request an exercise review when ready; progress is marked completed only after your confirmation.
