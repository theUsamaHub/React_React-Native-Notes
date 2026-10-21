# Day 07 — Component composition (Expo/native)

**Objective:** Practise this day’s concept in a small implementation. Allow 10–15 minutes.

## Requirements

Use the same custom-component tree as web in PracticeOverview.tsx. RevisionTitle returns heading-role Text; RecallTask and CodingTask each return Text; RevisionPlan uses View to contain both task usages; the exported PracticeOverview uses View to contain the title and plan. Define every component at file scope and keep every visible string inside Text.

Use static content only. No additional libraries, state, event handling or styling are required.

## Files to create or modify

Modify `PracticeOverview.tsx` in this directory. Create `reflection.md` beside it. The starter returns `null`, which displays nothing; it is intentionally not a solution.

Copy the finished source into a separate configured learning host and mount `<PracticeOverview />`. Follow the [Expo/native host instructions](../../../examples/react-native/README.md), substituting the actual filename, import path and component name. Preserve existing safe-area/navigation providers; put reusable components outside Router route folders. Keep the completed exercise source here for review.

## Expected behavior and testing

1. Mount the overview; expect one title followed by two different revision instructions.
2. Edit only CodingTask’s instruction and save/reload; confirm the intended text changes.
3. Temporarily include RevisionPlan twice in the overview. Expect two copies of the plan, from one definition. Edit CodingTask again and confirm both copies update.
4. Restore one plan usage. Inspect the output structure: the component tree names are not additional browser/native wrapper elements.
5. Check console/type diagnostics and record the tested platform.

Use the host’s existing type-check command if available. A visible preview alone does not prove type correctness. Test on Android/iOS, not solely Expo web. Source-edit refresh is a development workflow, not runtime application state.

## Reflection

Draw the custom-component tree, identify siblings and parents, and explain why components are defined at file scope even when their JSX usages are nested. Explain one useful boundary and one wrapper you could avoid.

## Completion criteria

Correct component tree; clear responsibilities; one definition per component; no nested definitions, direct component calls, duplicated task markup, props, hooks or list logic.

Record any missing host/device/type/accessibility checks as pending. No complete solution is provided. Request an exercise review when ready; progress is marked completed only after your confirmation.
