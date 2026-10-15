# Day 02 — Declarative reading progress (native)

**Objective:** Apply the same data-to-UI relationship to a native screen. Allow 10–15 minutes.

## Requirements

1. Modify `PracticeProgress.tsx` and import the required native core components.
2. Use the same two inputs as the web task: 30 total pages and 12 pages read. Calculate remaining pages from them.
3. Return one native container with three text elements: a title, `Read: 12 of 30`, and `Remaining: 18`. Display numeric values from the data, with all visible content inside text components.
4. Use no browser APIs, hooks, buttons, styles, or new libraries.
5. Create `reflection.md` beside your component. Explain which calculation transfers unchanged from the web and which UI elements must change. Explain why there is no native equivalent of looking up these paragraphs through `document.getElementById`.

## Files and running

Modify `exercises/day-02/react-native/PracticeProgress.tsx`; create `reflection.md` beside it. Mount your component in a separate Expo learning host using the [native host instructions](../../../examples/react-native/README.md), replacing the example name with `PracticeProgress`. Preserve the existing safe-area layout and keep the finished source here for review.

## Expected behavior and testing

Test on Android/iOS, editing the source inputs and saving/reloading between scenarios:

| Pages read | Total pages | Expected read line | Expected remaining line |
|---|---|---|---|
| 12 | 30 | Read: 12 of 30 | Remaining: 18 |
| 0 | 30 | Read: 0 of 30 | Remaining: 30 |
| 30 | 30 | Read: 30 of 30 | Remaining: 0 |

Confirm readable content, no error overlay, and matching numbers in the web exercise. Run the host's type-check command if available. Restore the starting data afterward. Matching browser typography is not required.

**Completion criteria:** Native building blocks, shared calculation, all three valid scenarios correct, and a reflection explaining the platform boundary. Report a web-only Expo preview as native verification pending. No full solution is provided.
