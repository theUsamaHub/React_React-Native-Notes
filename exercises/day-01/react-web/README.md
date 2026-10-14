# Day 01 — Web practice

**Objective:** Describe a static learner introduction using React's web UI elements. Budget: 10–15 minutes.

## Requirements

- Modify `PracticeCard.tsx` so its component returns one section containing a heading and two paragraphs.
- Include your name, one learning goal, and one reason to learn React. Write your own wording.
- Use static text only. No events, state, libraries, or styling are required.
- Add a short `reflection.md` explaining what the component describes and which part of the system displays it in the browser.

## Files and running

Modify `exercises/day-01/react-web/PracticeCard.tsx` and create `reflection.md` beside it. Copy your component into a separate web learning host and render it from the existing App, following the [example instructions](../../../examples/react-web/README.md) with `PracticeCard` instead of `Day01Card`. Keep your finished source here for review.

The starter returns `null`, meaning it displays nothing. Replace that return value with your own UI. Do not run the `.tsx` file directly with Node.

## Expected behavior and testing

1. Start the host and verify one heading plus two paragraphs appear.
2. Change your goal in the source and save; verify the displayed wording changes.
3. Check the browser console for errors and run the host's existing type-check command if available.
4. Explain why changing source text is not an interactive application feature.

**Completion criteria:** All required text appears, the TSX is valid in your host, and the reflection distinguishes describing UI from manually manipulating browser elements. Report results; do not mark yourself complete merely because the starter file exists. No complete solution is supplied.
