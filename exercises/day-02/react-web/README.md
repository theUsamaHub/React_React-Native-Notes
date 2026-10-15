# Day 02 — Declarative reading progress (web)

**Objective:** Describe two related outputs from the same data without manually updating DOM elements. Allow 10–15 minutes.

## Requirements

1. Modify `PracticeProgress.tsx`. Start with a book of 30 pages and 12 pages read, represented by two numeric constants inside the component.
2. Calculate pages remaining from those constants. Do not maintain a separate hard-coded remaining count.
3. Return one section with a heading, a paragraph showing `Read: 12 of 30`, and a paragraph showing `Remaining: 18`. Insert the numbers from your data rather than typing them into the visible strings.
4. Do not add buttons, hooks, events, styles, or direct DOM commands.
5. Create `reflection.md` beside your component. Explain which values are inputs, which value is calculated, and why a source edit does not demonstrate a runtime state update. Describe the manual operations a plain browser script would need for the two output lines.

## Files and running

Modify `exercises/day-02/react-web/PracticeProgress.tsx`; create `reflection.md` in that directory. The starter returns `null` (no UI). Copy the finished component to a separate React TypeScript learning host and mount it using the [web host instructions](../../../examples/react-web/README.md), replacing the example name with `PracticeProgress`. Keep your finished source here for review.

## Expected behavior and testing

Edit the input constants and save/reload for each case. Predict the result before checking it:

| Pages read | Total pages | Expected read line | Expected remaining line |
|---|---|---|---|
| 12 | 30 | Read: 12 of 30 | Remaining: 18 |
| 0 | 30 | Read: 0 of 30 | Remaining: 30 |
| 30 | 30 | Read: 30 of 30 | Remaining: 0 |

Check the console and run the host's type-check command if available. Restore the starting data afterward. Explain why entering 35 pages read would yield a negative remainder with simple subtraction; validation is outside today's implementation.

**Completion criteria:** Both output lines come from the inputs, all three valid cases match, no manual DOM writes are used, and the reflection explains the distinction. If no host is available, report execution as pending. No full solution is provided.
