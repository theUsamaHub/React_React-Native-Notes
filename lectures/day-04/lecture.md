# Day 04 — Functional Components

## Lecture Header

- **Day:** 04
- **Topic:** Defining, rendering and keeping function components predictable
- **Learning phase:** Phase 1 — Fundamentals
- **Difficulty:** Beginner
- **Prerequisites:** Days 01–03; functions, local variables, return expressions and TSX rules. Complete the JSX lesson first.
- **Estimated study time:** 25–30 minutes reading; 20–35 minutes for both practical tasks.
- **Learning objectives:** Distinguish a component definition from JSX usage; use capitalized names and valid returns; recognize pure rendering; reuse a definition without copying it; apply the same component discipline on native.

This is the second requested catch-up lecture. It does not introduce props, hooks, events or application architecture. We use only the small amount of mounting syntax needed to see a component on screen.

## Section A — React.js Concept

### 1. WHAT — What is a function component?

A function component is a JavaScript function that React uses to calculate a piece of UI. Ours return JSX. React also permits other renderable results, such as `null` when nothing should appear; this lesson uses a visible card.

There are two separate actions: **define** a component with a function, then **use** it in JSX as `<Day04StudyCard />`. A function sitting in a file does not display itself. Capitalized names distinguish your components from lowercase host tags. [React's component guide](https://react.dev/learn/your-first-component).

### 2. WHY — Why make a UI piece a function?

A study-session card has a coherent purpose: present a title, advice and a planned duration. Giving it one named definition makes it easy to find, reason about and use again. Editing its text in one place can update every usage.

The boundary should have a useful purpose, not merely reduce a line count. A tiny unrelated fragment does not automatically deserve a separate abstraction. Today the whole study card is a natural unit.

### 3. WHEN — When should you define one?

Define a component when a piece of UI has a meaningful role or is repeated. A card, banner or summary is a good candidate. Put arithmetic in ordinary local expressions or functions; not every calculation is a component. A component's purpose here is to return a UI description.

### 4. HOW — React calls your definition

```text
Component definition exists in a module
              |
An existing screen includes <Day04StudyCard />
              |
React calls the component during rendering
              |
Local calculation + returned JSX describe the card
```

Use JSX to let React coordinate component rendering, rather than invoking `Day04StudyCard()` yourself as a substitute. Do not assume a render happens only once. React may calculate UI again; development checks can also repeat component execution.

This is why rendering should be **pure**: given the same inputs, calculate the same output without changing pre-existing external data. Local arithmetic is fine. Incrementing a shared counter during rendering is not; its value would depend on how many times the component happened to run. [Keeping components pure](https://react.dev/learn/keeping-components-pure).

### 5. SYNTAX — What each part contributes

`export default function Day04StudyCard() { ... }` defines a function and makes it the module's default export, so the existing host can import it. The empty parentheses mean our example accepts no declared parameters. Props, which provide component inputs, come later.

`return (` places the opening parenthesis on the same line as `return`, grouping multiline JSX. Avoid putting a newline immediately after `return`: JavaScript can interpret it as returning early with no value.

`<Day04StudyCard />` describes a usage of the component. Its self-closing syntax indicates that no nested content is supplied. It does not mean “call exactly once.” TypeScript can infer the return type; neither a `React.FC` annotation nor a hook is required for this simple component.

### 6. COMPLETE EXAMPLE — A study card

Source: [web Day04StudyCard.tsx](../../examples/react-web/Day04StudyCard.tsx).

```tsx
export default function Day04StudyCard() {
  const readingMinutes = 15;
  const practiceMinutes = 20;
  const totalMinutes = readingMinutes + practiceMinutes;

  return (
    <section>
      <h2>Today's study session</h2>
      <p>Read, then practise one concept.</p>
      <p>Planned time: {totalMinutes} minutes</p>
    </section>
  );
}
```

Line by line:

1. Define and export a capitalized component at file scope, outside other functions.
2. Create a local reading duration during this execution.
3. Create a local practice duration.
4. Calculate the total without changing any external value.
5. Separate calculation from output.
6. Begin the return expression on the same line as `return`.
7. Open the section representing the card.
8. Describe a heading; choose heading levels to fit the host page's hierarchy.
9. Describe the reminder.
10. Insert the calculated time into a paragraph.
11. Close the section.
12. Finish the return expression.
13. End the function.

**Run:** Use the [web host instructions](../../examples/react-web/README.md), substituting `Day04StudyCard` for the filename, import and JSX name. Expected total: 35 minutes.

To observe reuse, import this one definition into the learning host's App and use it twice:

```tsx
import Day04StudyCard from './Day04StudyCard';

export default function App() {
  return (
    <main>
      <Day04StudyCard />
      <Day04StudyCard />
    </main>
  );
}
```

The import makes the function available. App returns a main container with two component usages. Both use one definition; both show 35 minutes. This tiny mounting example is enough for today; designing larger component combinations is a later topic. Preserve your actual host bootstrap rather than replacing unrelated application files.

#### Why a shared counter is wrong here

Consider this incomplete diagnostic sketch, not code to paste into your exercise:

```tsx
let visits = 0; // shared outside the component
// Inside a component's body:
// visits += 1;
// return <p>{visits}</p>;
```

If a component changed `visits` while rendering, identical usages could display different numbers depending on call order. A repeated render would change the number even without a user action. Keeping a total in a local calculation avoids that dependence. Real visit tracking is a different task and should not be added to this lesson.

### 7. REAL-WORLD USE

A dashboard may repeat a reminder card across different pages. A single component definition provides a stable place to maintain its text and structure. Later, inputs can allow different content while preserving the component's purpose. Today's static example isolates the definition/rendering relationship first.

### 8. COMMON MISTAKES

- **Lowercase component names:** `<studyCard />` is treated as a host tag, not your `StudyCard` function.
- **Defining without mounting:** A component file alone does not add UI to the screen.
- **Missing return:** Writing JSX in a function without returning it does not provide the intended UI result.
- **Nested component definitions:** Defining a component inside another creates a new function identity on each execution and can cause problems as the app grows. Keep definitions at module scope.
- **External mutation during rendering:** Shared counters, DOM writes or device actions make rendering dependent on side effects.
- **Using a hook only because it is a component:** Static UI needs no hook. Add behavior when the lesson or application requires it.

### 9. BEST PRACTICES

Choose a name that describes the UI's role. Keep rendering predictable and calculations local. Let React render through JSX. Prefer an inferred return type for this small example and avoid annotation ceremony that adds no useful information. Confirm both the definition and its host usage when troubleshooting missing output.

## Section B — React Native Equivalent

### 1. WHAT — A native function component

The same function-component model applies to React Native. It still calculates and returns a React UI description; native core components are the output building blocks. [React Native fundamentals](https://reactnative.dev/docs/intro-react).

### 2. WHY — What changes on mobile?

An Android/iOS UI uses native containers and text rather than browser sections and paragraphs. Function boundaries and pure calculation do not change. The platform determines which elements and capabilities the description can use.

### 3. WHEN — Reusable screen content

A session reminder can be one native component used in a learning screen. It needs neither a navigation route of its own nor a device API simply because it is a component. Reusable UI files should remain separate from a Router's route files.

### 4. HOW — Predictable rendering on both platforms

The host screen includes the card through JSX. React calls its function; local arithmetic computes a total; native components describe the output. Reusing the definition twice describes two instances, not a shared mutable counter. Pure rendering requirements also apply on mobile.

### 5. EXPO IMPLEMENTATION

Follow the [native host instructions](../../examples/react-native/README.md), replacing `Day01Card` with `Day04StudyCard`. Copy the component outside route directories and use it within the learning screen's existing layout. To observe reuse, put two `<Day04StudyCard />` usages inside that existing container. Do not remove navigation, providers or safe-area handling.

No configured React/Expo application or package versions are present in this workspace. The examples use basic existing APIs, but type-checking and actual device compatibility are not claimed. No dependencies or new application scaffolds are needed for the lesson material.

### 6. COMPLETE NATIVE EXAMPLE

Source: [native Day04StudyCard.tsx](../../examples/react-native/Day04StudyCard.tsx).

```tsx
import { Text, View } from 'react-native';

export default function Day04StudyCard() {
  const readingMinutes = 15;
  const practiceMinutes = 20;
  const totalMinutes = readingMinutes + practiceMinutes;

  return (
    <View>
      <Text>Today's study session</Text>
      <Text>Read, then practise one concept.</Text>
      <Text>Planned time: {totalMinutes} minutes</Text>
    </View>
  );
}
```

### 7. LINE-BY-LINE EXPLANATION

1. Import the native Text and View components.
2. Separate the import from the definition.
3. Declare and export the capitalized function at file scope.
4. Define reading minutes locally.
5. Define practice minutes locally.
6. Calculate their sum without external mutation.
7. Separate calculation from JSX.
8. Begin returning the description.
9. Open the native container.
10. Describe the title as Text.
11. Describe the reminder as Text.
12. Insert the local total inside Text.
13. Close the View.
14. Finish the return expression.
15. Close the function.

### 8. MOBILE-SPECIFIC CONSIDERATIONS

Text must remain inside Text components. Preserve the screen's safe area and check readability with larger text settings. A title Text does not automatically acquire the appearance or semantics of a browser heading. Two card usages may appear close together without styling; today's acceptance criterion is correct, repeated content.

Do not trigger device actions from the component body. A component can render more than once, so placing an action there can repeat it unexpectedly. Appropriate event and synchronization mechanisms are later topics.

### 9. COMMON MISTAKES AND BEST PRACTICES

Missing native imports, lowercase names and omitted returns can prevent the intended result. Reuse the same definition through JSX and keep it outside the host screen function. Inspect native output on Android/iOS; successful Expo web output alone does not establish mobile behavior. Keep all render-time work as predictable calculation for this exercise.

## Section C — React vs React Native Comparison

| Aspect | React.js | React Native |
|---|---|---|
| Concept | Function calculates browser UI description | Function calculates native UI description |
| Syntax | `<Day04StudyCard />` | Identical component usage syntax |
| Implementation | Function returns section, heading and paragraphs | Function returns View and Text |
| Behavior | React controls component execution; keep rendering pure | Same requirement on native |
| Use case | Reusable study card on a dashboard | Reusable study card in a mobile screen |
| Types | Simple return can be inferred | Simple return can also be inferred |
| Layout | Host page and browser semantics | Host screen, native layout and safe areas |

The function structure, local calculations, naming and purity reasoning transfer directly. Elements, presentation and platform actions require adaptation.

## Section D — Practical Exercise

### React.js: a study-break card

- **Objective:** Define one predictable component and use it twice.
- **Requirements:** A file-scope function with 4 stretching minutes and 6 walking minutes; calculate the total and display a heading, reminder and time. No external mutation or hooks.
- **Files:** Modify [web PracticeBreakCard.tsx](../../exercises/day-04/react-web/PracticeBreakCard.tsx); create `reflection.md` beside it. Mount in the separate learning host.
- **Expected behavior:** Two cards show the same 10-minute total from one definition.
- **Testing:** Repeat source refresh; totals must not accumulate. Set inputs to 3/5 and expect both cards to show 8; restore 4/6.
- **Completion criteria:** Reused definition, correct output, predictable rendering and a reflection explaining why shared-counter mutation is wrong.

Follow the [full web brief](../../exercises/day-04/react-web/README.md). The starter is unsolved.

### React Native: the same break card

- **Objective:** Apply function-component discipline on mobile.
- **Requirements:** Same calculation and content using one View and three Text elements; no device actions during rendering.
- **Files:** Modify [native PracticeBreakCard.tsx](../../exercises/day-04/react-native/PracticeBreakCard.tsx); create `reflection.md` beside it. Mount in the separate Expo learning screen.
- **Expected behavior:** Two matching cards with a 10-minute total, using native UI.
- **Testing:** Repeat refresh and the 3/5 scenario on Android/iOS; verify text and absence of errors.
- **Completion criteria:** Correct native elements, one reusable definition, no external mutation and completed reflection.

Follow the [full native brief](../../exercises/day-04/react-native/README.md). If hosts are unavailable, record execution pending rather than passed. Manual repeated-render checks support understanding but do not prove every function is pure.

## Section E — Knowledge Check

Attempt the [five conceptual questions](questions.md) before opening the collapsible answers.

## Section F — Daily Summary

- **Key concepts:** A function definition and a JSX usage have different roles. React controls rendering; components calculate output predictably.
- **Platform differences:** Native and web share the function model but return different UI building blocks.
- **Important syntax:** `export default function Name()`, `return (...)`, and `<Name />`.
- **Common pitfalls:** Missing returns, lowercase names, nested component definitions and shared mutation during rendering.
- **Practical skills:** Define a small component, mount it twice and explain why its output should not depend on call count.
- **Next lecture:** Day 05 — Platform UI building blocks. It has not been generated.

Days 03 and 04 remain uncompleted in the tracker until you confirm your study and exercises.
