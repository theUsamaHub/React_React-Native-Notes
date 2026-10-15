# Day 02 — Declarative UI vs Imperative JavaScript

## Lecture Header

- **Day:** 02
- **Topic:** Describing UI from data instead of issuing individual UI update commands
- **Learning phase:** Phase 1 — Fundamentals
- **Difficulty:** Beginner
- **Prerequisites:** Day 01; JavaScript variables, subtraction, functions and return statements. The small amount of new JSX syntax is explained below.
- **Estimated study time:** 25–30 minutes reading; 25–35 minutes for both exercises and reflection.
- **Learning objectives:** Distinguish imperative operations from declarative descriptions; trace two displayed values back to their data; explain which update responsibilities React takes; apply the same description to native components; distinguish a source refresh from a runtime data update.

Day 01 established that React describes UI and a renderer presents it. Today we examine why that changes the code we write. One progress summary will demonstrate the idea. There are no hooks, events, routes, or new dependencies in this lesson.

## Section A — React.js Concept

### 1. WHAT — What do imperative and declarative mean?

**Imperative UI code** gives instructions that directly change specific UI elements: find a paragraph, set its text, find another paragraph, and set that text too.

**Declarative UI code** describes the output that should correspond to some data. A React component returns that description. React and its renderer handle the platform operations needed to present it when a render occurs.

Both approaches still use JavaScript and both require logic. “Declarative” does not mean the application writes itself or that your code never performs calculations. The distinction here is about who coordinates the individual displayed elements.

### 2. WHY — What problem does this solve?

Imagine a learning dashboard with these two lines:

```text
Completed: 1 of 4
Remaining: 3
```

The two lines describe the same underlying progress. If code updates only the completed line, the screen could instead show `Completed: 2 of 4` and `Remaining: 3`. Each label looks plausible on its own, but together they contradict each other.

Direct UI code must keep every affected output synchronized. In a React component, you can describe both lines from the same inputs and calculate the remainder. This makes the relationship visible in one place. You must still choose correct inputs and calculations; React cannot repair incorrect business logic.

The benefit is clearer ownership of UI updates, not an automatic performance improvement. [React's comparison of the approaches](https://react.dev/learn/reacting-to-input-with-state) provides a larger interactive example; its state and event implementation is beyond today's scope.

### 3. WHEN — When should we use this approach?

Use declarative descriptions for React-managed content: counts, summaries, titles, and other visual output determined by application data. Ask, “Given these values, what should the user see?”

Imperative code remains useful. A small standalone browser script may be perfectly reasonable. Some platform actions, such as asking an input to focus, also have imperative APIs. Those actions are different from manually maintaining all the text in a React screen. Their APIs and timing will be covered later.

### 4. HOW — Follow the responsibility boundary

```text
Inputs: completedLessons = 1, totalLessons = 4
                  |
Calculation: remainingLessons = 4 - 1
                  |
Component describes both output lines
                  |
React + renderer coordinate the displayed result
```

React does not observe every JavaScript variable. Assigning a different value to an ordinary variable does not itself schedule a render. A render is when React calls component functions to determine their UI output; the renderer then applies necessary changes. Later lessons introduce the mechanisms that request updates during application use.

For today, change a literal in the source, save, and reload if needed. This lets us inspect different input/output examples. It is a development experiment, not an interactive application feature.

### 5. SYNTAX — The minimum new notation

- `const completedLessons = 1;` declares a numeric value. `const` prevents reassignment of that binding in the current execution.
- `const remainingLessons = totalLessons - completedLessons;` computes a value from the two inputs. This is ordinary JavaScript subtraction, not a React API.
- `<p>Remaining: {remainingLessons}</p>` uses braces in JSX content to evaluate a JavaScript expression. React includes its numeric result in the UI description.
- Without braces, `<p>remainingLessons</p>` displays that literal word. With quotes inside braces, `{'remainingLessons'}` also displays the word because it is a string value.

TypeScript can infer that these values are numbers, so explicit `: number` annotations are unnecessary. Full JSX and TSX rules are the next day's topic; only expression insertion is needed here.

### 6. EXAMPLE — Compare complete implementations

#### Plain browser implementation: direct operations

The complete [standalone HTML example](../../examples/react-web/day-02-imperative.html) runs by opening that file in a browser. It requires no React installation. Its markup supplies a heading and two empty paragraphs with IDs. The script appears after the markup so those elements already exist.

Here is the script from that file:

```js
const completedLessons = 1;
const totalLessons = 4;
const remainingLessons = totalLessons - completedLessons;
const completedElement = document.getElementById('completed');
const remainingElement = document.getElementById('remaining');

if (completedElement !== null && remainingElement !== null) {
  completedElement.textContent = 'Completed: ' + completedLessons + ' of ' + totalLessons;
  remainingElement.textContent = 'Remaining: ' + remainingLessons;
}
```

The first three lines define inputs and calculate the remainder. The next two call the browser's `document.getElementById` to locate existing elements. Each lookup can return `null`, meaning no matching element was found. The `if` checks both results; `&&` means both checks must pass. Inside the block, `textContent` writes text directly into each element. The `+` operators join strings and numbers into the displayed sentences. The closing brace ends the guarded operations.

The browser script has two jobs: calculate what to show and explicitly write to each output element. If the values later change, its author must arrange for the appropriate writes to run again. Merely assigning a new variable value would not change those paragraphs either.

#### React implementation: describe the result

Complete component: [Day02Progress.tsx](../../examples/react-web/Day02Progress.tsx).

```tsx
export default function Day02Progress() {
  const completedLessons = 1;
  const totalLessons = 4;
  const remainingLessons = totalLessons - completedLessons;

  return (
    <section>
      <h1>Learning progress</h1>
      <p>Completed: {completedLessons} of {totalLessons}</p>
      <p>Remaining: {remainingLessons}</p>
    </section>
  );
}
```

Line by line:

1. Declare and export the capitalized component function.
2. Define how many lessons are completed for this demonstration.
3. Define the total number of lessons in the demonstration, not the whole course roadmap.
4. Calculate the remainder from the inputs instead of maintaining another independent fact.
5. The blank line separates calculation from UI description.
6. Start the returned JSX expression.
7. Open the section that contains the summary.
8. Describe its heading.
9. Describe the completed line, inserting both input values.
10. Describe the remaining line, inserting the calculated value.
11. Close the section.
12. Finish the return expression.
13. Close the function.

There are no element lookups or text-writing commands in the component. The calculations are still yours; React handles the UI description with its renderer.

**Run it:** Follow the [web host instructions](../../examples/react-web/README.md), replacing `Day01Card` with `Day02Progress` in the filename, import and JSX usage. Preserve the existing host bootstrap. Expect `Completed: 1 of 4` and `Remaining: 3`. Change only `completedLessons` to `2`, save/reload, and expect `Completed: 2 of 4` and `Remaining: 2`. Restore the starting value afterward. The TSX is a complete component, not a standalone app.

### 7. REAL-WORLD USE

A reading dashboard could show pages read and pages remaining. A shopping summary could show a subtotal and a total computed from the same purchase data. A maintenance interface could show completed and outstanding tasks. The useful habit is to identify the inputs and relationships before touching individual UI elements.

### 8. COMMON MISTAKES

| Mistake | Consequence | Correction |
|---|---|---|
| Hard-code completed, total and remaining independently | One number can drift from the others | Calculate remaining from the two inputs |
| Write a variable name as plain JSX text | The variable name appears literally | Use braces to insert its value |
| Change an ordinary variable and expect React to detect it | No React update is requested | Distinguish data from the mechanisms that schedule rendering |
| Change React-managed paragraphs using DOM commands | Actual DOM and React's description can disagree | Keep this output described by the component |
| Assume a calculation validates inputs | Completed greater than total produces a negative remainder | Define valid input assumptions; add validation in its own lesson |

### 9. BEST PRACTICES

Use meaningful names, keep the relationship between inputs and output explicit, and avoid separately maintained values you can calculate. For this example, assume integer counts with `0 <= completedLessons <= totalLessons`. Do not silently claim those assumptions are enforced by TypeScript.

Keep component execution focused on calculating and returning UI. Do not place the imperative comparison script inside a React component. The standalone example exists to compare responsibilities, not as an integration recipe.

## Section B — React Native Equivalent

### 1. WHAT — The same declarative idea

React Native components describe output from data using the same React model. The numeric calculations are ordinary JavaScript and transfer directly. The returned description uses native building blocks instead of web elements. [React Native's React fundamentals guide](https://reactnative.dev/docs/intro-react) explains this shared foundation.

### 2. WHY — Why the implementation differs

An Android/iOS screen has native UI rather than browser paragraphs in a `document`. Consequently, the plain browser script has no direct native equivalent based on `document.getElementById`. We do not invent one. The transferable part is the data-to-UI relationship; React Native's renderer handles its platform output.

### 3. WHEN — When to use it

Use it whenever a native screen shows information derived from data, such as a reading summary or task count. The question remains, “What should this screen display for these inputs?” Device actions and other imperative integrations require different APIs and are outside today's exercise.

### 4. HOW — Same calculation, different display target

React calls the component to obtain its description. The component calculates the remaining count and describes both text outputs. React Native coordinates the corresponding native display. It does not need to search the screen for HTML elements.

These are conceptual responsibilities. Today does not depend on details of the native renderer's internal threads or communication architecture.

### 5. EXPO IMPLEMENTATION

Use a separate Expo TypeScript learning host. Copy `Day02Progress.tsx` to its components directory, outside an Expo Router route directory. Render `<Day02Progress />` from an existing learning screen inside its current safe-area/layout container. Follow the [native host instructions](../../examples/react-native/README.md), substituting `Day02Progress` for `Day01Card`.

No React, Expo, or TypeScript manifest was found in this workspace on 2026-10-15. No dependencies were installed and no original application was changed. Compatibility and device execution remain unverified until a host is available.

### 6. COMPLETE NATIVE EXAMPLE

Source: [native Day02Progress.tsx](../../examples/react-native/Day02Progress.tsx).

```tsx
import { Text, View } from 'react-native';

export default function Day02Progress() {
  const completedLessons = 1;
  const totalLessons = 4;
  const remainingLessons = totalLessons - completedLessons;

  return (
    <View>
      <Text>Learning progress</Text>
      <Text>Completed: {completedLessons} of {totalLessons}</Text>
      <Text>Remaining: {remainingLessons}</Text>
    </View>
  );
}
```

### 7. LINE-BY-LINE EXPLANATION

1. Import `Text` and `View`, the native text and container components.
2. Separate imports from the component with a blank line.
3. Declare and export the component function.
4. Define the completed input.
5. Define the total input.
6. Calculate the remainder with the same subtraction as on web.
7. Separate the calculation from the returned description.
8. Begin returning JSX.
9. Open the native container.
10. Describe the title as native text.
11. Describe the completed sentence using the input expressions.
12. Describe the remaining sentence using the calculated expression.
13. Close the container.
14. Finish the return expression.
15. Close the component function.

In the import line, braces select named exports. Inside JSX content, braces insert expressions. The visual similarity does not mean they perform the same job.

### 8. MOBILE-SPECIFIC CONSIDERATIONS

Put the numeric expressions and their accompanying labels inside `Text`, rather than directly inside `View`. Keep the host's safe-area layout so system bars do not cover the example. Text may wrap on smaller devices or with larger accessibility text settings; matching the web's line lengths is unnecessary.

Verify the values on Android/iOS, not only Expo web. Change the completed literal to `2`, save/reload, and confirm both lines reflect it. This uses development tooling just as on web; it is not a tap-driven state transition.

### 9. COMMON MISTAKES AND BEST PRACTICES

- Browser `document` lookups cannot target this native UI. Keep the text described by React Native components.
- Raw text or numeric content directly inside `View` is not a substitute for `Text`.
- Hard-coding a different remainder on mobile creates a second calculation to maintain. Use the same relationship on both platforms.
- The title's `Text` has no automatic `h1` appearance or browser heading semantics. Styling and accessibility work remain explicit later topics.
- Test matching meaning and numbers. Preserve existing screen structure and avoid adding libraries for a simple calculation.

## Section C — React vs React Native Comparison

| Aspect | React.js | React Native |
|---|---|---|
| Concept | Describe web UI from data | Describe native UI from data |
| Syntax | `<p>Remaining: {remainingLessons}</p>` | `<Text>Remaining: {remainingLessons}</Text>` |
| Implementation | React DOM coordinates browser elements | React Native coordinates Android/iOS UI |
| Behavior | Ordinary variable assignment does not schedule React rendering | The same limitation applies |
| Use case | Learning progress on a browser dashboard | Learning progress in a mobile screen |
| Shared calculation | `totalLessons - completedLessons` | Identical JavaScript expression |
| Imperative comparison | Browser script can find elements and write text | No browser document for a normal native screen |
| Source-edit experiment | Save/reload through web development tools | Save/reload through the Expo learning host |

Transfer the data relationships, JavaScript calculations and declarative reasoning. Adapt the UI elements and platform-specific operations. The same idea does not imply that browser DOM code is portable.

## Section D — Practical Exercise

Build a **reading progress summary** with a different data set from the lesson. The two tasks should take 20–30 minutes combined, followed by a short reflection. Solutions are deliberately withheld.

### React.js exercise

- **Objective:** Describe related outputs from a common source of data.
- **Requirements:** Start with 12 pages read out of 30; calculate pages remaining. Show a heading and two paragraphs. No direct DOM updates or hooks.
- **Files:** Modify [web PracticeProgress.tsx](../../exercises/day-02/react-web/PracticeProgress.tsx) and create `reflection.md` beside it.
- **Expected behavior:** Display `Read: 12 of 30` and `Remaining: 18` from the data.
- **Testing:** Save/reload with 12, 0 and 30 pages read; expect 18, 30 and 0 remaining respectively. Run in the separate learning host and inspect console output.
- **Completion criteria:** Correct outputs in all three cases, calculated remainder, no manual UI writes, and a reflection explaining the responsibility boundary.

Follow the [complete web exercise brief](../../exercises/day-02/react-web/README.md) for mounting instructions and the expected-output table.

### React Native exercise

- **Objective:** Use the same relationship to describe native UI.
- **Requirements:** Same inputs and calculation; a native container and three text elements. No browser APIs or new libraries.
- **Files:** Modify [native PracticeProgress.tsx](../../exercises/day-02/react-native/PracticeProgress.tsx) and create `reflection.md` beside it.
- **Expected behavior:** The same numerical content as the web task, rendered in the native learning screen.
- **Testing:** Save/reload the same three cases on Android/iOS. Confirm readable content and no error overlay.
- **Completion criteria:** Native building blocks, matching calculated values, and a reflection identifying the shared and platform-specific parts.

Follow the [complete native exercise brief](../../exercises/day-02/react-native/README.md). If either host is unavailable, attempt the source and reflection and report execution as pending rather than passed.

## Section E — Knowledge Check

Answer the [five conceptual questions](questions.md) before opening their collapsible answer section. They cover update responsibility, calculated data, rendering triggers, native portability, and appropriate imperative operations.

## Section F — Daily Summary

- **Key concepts learned:** Imperative UI code commands particular elements; declarative UI code describes an output for data. The renderer coordinates the platform changes when rendering occurs.
- **React/native differences:** Shared calculations and descriptions use different platform elements. Browser DOM operations do not transfer to native screens.
- **Important syntax:** Numeric `const` declarations, subtraction, and `{expression}` inside JSX content.
- **Common pitfalls:** Duplicating calculated data, assuming variables are automatically observed, and manually editing React-managed output.
- **Practical skills gained:** Trace outputs to inputs, predict results before execution, and implement a matching summary on both platforms.
- **Next lecture:** Day 03 — JSX and TSX. It will be generated only when you request it.

Day 01 is recorded as completed based on your confirmation. Day 02 remains Not Started until you report study or exercise progress; generating these files does not count as completing the lesson.
