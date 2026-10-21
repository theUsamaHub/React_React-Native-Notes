# Day 06 — Modules and imports/exports (React/web)

**Objective:** Practise this day’s concept in a small implementation. Allow 10–15 minutes (up to 20 for path troubleshooting).

## Requirements

In PracticeTitle.tsx, default-export a component displaying the heading Revision session. In practiceInfo.ts, named-export practiceTopic (choose your own string) and plannedMinutes (20). In PracticeLesson.tsx, import the title with a default import and the two constants with named imports. Return a section containing the title component, the topic paragraph and a paragraph displaying the estimate. Do not repeat the data literals inside the panel.

Use static content only. No additional libraries, state, event handling or styling are required.

## Files to create or modify

Modify `PracticeLesson.tsx`, `PracticeTitle.tsx`, and `practiceInfo.ts` in this directory. Create `reflection.md` beside it. The starter returns `null`, which displays nothing; it is intentionally not a solution. The two helper starters contain only export {}; this marks them as modules without supplying any exercise exports. Replace that placeholder with your implementation.

Copy the finished source into a separate configured learning host and mount `<PracticeLesson />`. Follow the [React/web host instructions](../../../examples/react-web/README.md), substituting the actual filename, import path and component name. Preserve the host’s existing bootstrap and page structure. Keep the completed exercise source here for review.

## Expected behavior and testing

1. Copy all three files together into one learning-host folder, outside native route directories. Import and mount PracticeLesson from that folder.
2. Verify the title, your topic and a 20-minute estimate.
3. Edit only practiceInfo.ts to set plannedMinutes to 35; save/reload and confirm the estimate updates. Restore 20.
4. Inspect every import against its export: default versus named, path, and exact filename case.
5. Confirm the host’s type checker finds no unresolved module/export errors when available.

Use the host’s existing type-check command if available. A visible preview alone does not prove type correctness. Inspect the browser console for errors. Source-edit refresh is a development workflow, not runtime application state.

## Reflection

Draw the three-file dependency graph. Explain which imports need braces, what ./ means relative to PracticeLesson.tsx, and why copying only that file would fail.

## Completion criteria

Three correctly connected modules; topic/time sourced from named exports; title sourced from a default export; native files contain no browser tags; complete reflection.

Record any missing host/device/type/accessibility checks as pending. No complete solution is provided. Request an exercise review when ready; progress is marked completed only after your confirmation.
