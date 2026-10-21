# Day 07 — Component Composition

## Lecture Header

- **Day:** 07
- **Topic:** Building a screen from small components
- **Learning phase:** Phase 1 — Fundamentals
- **Difficulty:** Beginner
- **Prerequisites:** Days 01–06; function components, JSX, platform elements and imports/exports.
- **Estimated study time:** 25–30 minutes reading; 25–40 minutes combined web/native practice.
- **Learning objectives:** Identify parent, child and sibling components; assemble a small UI tree; distinguish tree structure from file structure; assign useful component responsibilities; reuse a definition without unnecessary wrappers or nested definitions.

This lesson completes the requested three-day batch. We compose fixed components with no inputs. Passing props and accepting arbitrary `children` are separate later topics.

## Section A — React.js Concept

### 1. WHAT — Composition builds a larger whole

**Component composition** means building a UI by using components inside other components' returned descriptions. A **parent** includes a **child** component. Children of the same parent are **siblings**. These relationships form a tree: a screen contains sections, and sections contain smaller pieces.

A component can return another component alongside platform elements. The custom component's name does not itself add a DOM wrapper. React follows its description until it reaches the browser elements to display. [React's component model](https://react.dev/learn/your-first-component).

### 2. WHY — Separate useful responsibilities

A study overview has a title and a study plan. The plan contains reading and practice tasks. Keeping those responsibilities named makes the screen easy to read: the overview arranges its parts, while each task describes its own content.

Composition can improve reuse and maintainability, but it is not an automatic performance optimization. Splitting every word into a component adds noise. Choose boundaries that make a reader's understanding simpler.

### 3. WHEN — Identify meaningful parts

Use composition when a screen has distinct sections or repeated UI. A task summary is a meaningful unit; an isolated punctuation mark normally is not. A small static component does not need a separate file immediately. Day 06 introduced file boundaries; today's tree can be expressed in one file so the new relationship stays visible.

### 4. HOW — Read a component tree

```text
Day07StudyOverview
├── OverviewTitle
└── StudyPlan
    ├── ReadingTask
    └── PracticeTask
```

This is a **component tree**, showing our custom component relationships. The browser DOM also includes `section`, `div`, heading and paragraph elements returned by those components. It will not contain a browser element named `StudyPlan` just because that function is used.

All functions are defined at file scope. Returning `<ReadingTask />` from StudyPlan makes it a child in the rendered tree; it does not require defining the ReadingTask function inside StudyPlan. Function nesting and UI nesting are different.

### 5. SYNTAX — Compose through JSX usage

`<ReadingTask />` includes a component in a UI description. `<StudyPlan />` includes a component that itself includes other components. Let React coordinate these usages; do not replace them with direct function calls merely to make the source shorter.

The parent can surround children with a platform container when layout or meaning requires it. A Fragment can group without adding a host container, but it cannot supply section semantics or container layout. This lesson uses section/div intentionally so the output is easy to inspect.

### 6. COMPLETE EXAMPLE — A composed study overview

Source: [web Day07StudyOverview.tsx](../../examples/react-web/Day07StudyOverview.tsx).

```tsx
function OverviewTitle() {
  return <h2>Study overview</h2>;
}

function ReadingTask() {
  return <p>Read the lesson for 10 minutes.</p>;
}

function PracticeTask() {
  return <p>Practise the concept for 20 minutes.</p>;
}

function StudyPlan() {
  return (
    <div>
      <ReadingTask />
      <PracticeTask />
    </div>
  );
}

export default function Day07StudyOverview() {
  return (
    <section>
      <OverviewTitle />
      <StudyPlan />
    </section>
  );
}
```

Line-by-line walkthrough, grouped by function:

1. `function OverviewTitle()` declares the title component; its return describes a heading; its closing brace ends the definition.
2. `function ReadingTask()` declares the reading component; its return describes one instruction paragraph; its closing brace ends the definition.
3. `function PracticeTask()` declares the practice component; its return describes the other instruction; its closing brace ends the definition.
4. `function StudyPlan()` declares the grouping component. `return (` begins its description; `<div>` opens its group; `<ReadingTask />` and `<PracticeTask />` include the two task components; `</div>`, `);` and `}` close the group, return and definition.
5. `export default function Day07StudyOverview()` exposes the entry component. Its `return (` begins the screen description; `<section>` creates the thematic container; `<OverviewTitle />` adds the heading; `<StudyPlan />` includes the plan subtree; the remaining lines close the section, return and definition.

Blank lines separate definitions. Only the entry is exported because only the host needs to import it; helper components are available within this module. A component does not need an export to be used in the same file.

**Run:** Use the [web host instructions](../../examples/react-web/README.md), substituting `Day07StudyOverview` for the filename/import/usage. Expect a title followed by reading and practice instructions. Inspect the DOM: the section contains a heading and a div with two paragraphs. Change the text inside PracticeTask and save/reload; the rendered practice instruction should change without editing the overview.

### 7. REAL-WORLD USE

A course overview might combine a course title, learning plan and revision reminder. Composition lets each part stay understandable while a parent chooses the arrangement. The same pattern can organize account summaries or checkout pages; it does not require a large application or state-management library.

### 8. COMMON MISTAKES

- Defining child functions inside the parent confuses UI nesting with function nesting and creates a new function definition during each parent execution.
- Copying the same component definition just to display it twice defeats reuse; use the existing component twice instead.
- Adding a wrapper at every component boundary creates an unnecessarily deep host tree.
- Treating source-file order as UI order is incorrect: returned JSX determines which children appear and in what order.
- Reaching ahead to dynamic props, lists or generic wrappers makes this small exercise harder than necessary.

### 9. BEST PRACTICES

Give each component one clear UI purpose. Let parent components describe arrangement. Keep definitions at file scope and rendering pure. Split files when that improves navigation or reuse, not because the tree requires one file per node. Preserve meaningful web elements when extracting components.

## Section B — React Native Equivalent

### 1. WHAT — The same component tree

Native UI can use the identical custom component relationships. The title and task components return Text, and the grouping components return View. Composition is a React concept shared across rendering targets.

### 2. WHY — Adapt the leaves and containers

The custom tree expresses responsibilities. Its final platform output expresses native UI. HTML paragraphs must become native text components; browser section semantics are not automatically supplied by View. Reusing the structure does not mean copying web tags unchanged.

### 3. WHEN — Organize mobile screens

Use this approach for small mobile screens with distinct content areas. A study screen can have a title component and a plan component without making each part an Expo route. These are reusable UI pieces, not navigation destinations.

### 4. HOW — Composition versus native layout

React follows the nested component descriptions; native Views and Text elements determine the displayed grouping. A View is a container, not a scrolling surface by default. This example is short; do not assume a much longer screen will scroll automatically. Scrolling and layout are later lessons.

### 5. EXPO IMPLEMENTATION

Copy the native source into a separate Expo learning host's component directory outside Router route folders. Render `<Day07StudyOverview />` inside the existing learning screen and safe-area layout using the [native host instructions](../../examples/react-native/README.md). No new packages or navigation changes are required.

### 6. COMPLETE NATIVE EXAMPLE

Source: [native Day07StudyOverview.tsx](../../examples/react-native/Day07StudyOverview.tsx).

```tsx
import { Text, View } from 'react-native';

function OverviewTitle() {
  return <Text accessibilityRole="header">Study overview</Text>;
}

function ReadingTask() {
  return <Text>Read the lesson for 10 minutes.</Text>;
}

function PracticeTask() {
  return <Text>Practise the concept for 20 minutes.</Text>;
}

function StudyPlan() {
  return (
    <View>
      <ReadingTask />
      <PracticeTask />
    </View>
  );
}

export default function Day07StudyOverview() {
  return (
    <View>
      <OverviewTitle />
      <StudyPlan />
    </View>
  );
}
```

### 7. LINE-BY-LINE EXPLANATION

The import brings native Text and View into scope. OverviewTitle opens a function, returns Text with a heading role, then closes the function. ReadingTask and PracticeTask each open a definition, return one Text instruction and close their definition.

StudyPlan opens its definition and return, opens a View, includes ReadingTask followed by PracticeTask, then closes the View, return and function. Day07StudyOverview opens its default-exported definition and return, opens the outer View, includes OverviewTitle followed by StudyPlan, then closes each structure. Blank lines only improve readability. Every visible string is inside Text, even though its parent knows only the custom component name.

### 8. MOBILE-SPECIFIC CONSIDERATIONS

Keep existing safe-area handling. Check text order and wrapping on Android/iOS, including larger text settings. Native Text titles do not gain browser heading styles, and repeated Views do not automatically produce spacing. The focus is meaningful component responsibility and correct content, not polished layout.

A custom component boundary does not automatically create a focusable accessibility group. Preserve each output element's role rather than assuming the function name supplies semantics.

### 9. COMMON MISTAKES AND BEST PRACTICES

Do not wrap an entire mixed View/Text subtree in Text simply because its children eventually display words. Use appropriate containers at each platform boundary. Keep helper functions at file scope and avoid unnecessary Views. The native runtime and installed versions have not been verified here because this repository still contains no configured app host.

## Section C — React vs React Native Comparison

| Aspect | React.js | React Native |
|---|---|---|
| Concept | Parent components assemble child components | Identical custom-component relationship |
| Syntax | `<StudyPlan />` within returned JSX | Same JSX usage |
| Implementation | Final output uses section/div/h2/p | Final output uses View/Text |
| Behavior | File layout does not dictate the UI tree | Same principle; route directories have separate meaning |
| Use case | Composed study overview on web | Composed study screen in Expo |
| Semantics | Browser elements supply HTML meaning | Native output requires suitable roles and containment |
| Reuse | One definition can appear in several places | Same reuse model |

Responsibility boundaries, composition and pure rendering transfer. Platform containers, semantics and layout behavior need adaptation.

## Section D — Practical Exercise

### Web: revision overview

- **Objective:** Build a small screen from a visible component tree.
- **Requirements:** At file scope, define RevisionTitle, RecallTask, CodingTask and RevisionPlan. The plan includes both tasks; the exported PracticeOverview includes the title and plan. Use semantic web output.
- **Files:** Modify [web PracticeOverview.tsx](../../exercises/day-07/react-web/PracticeOverview.tsx); create `reflection.md` beside it with your component-tree sketch.
- **Expected behavior:** One title and two different revision instructions appear in order.
- **Testing:** Edit only CodingTask's text and refresh; temporarily use the plan twice and confirm both copies update from the same definition, then restore one usage.
- **Completion criteria:** Clear responsibilities, file-scope definitions, correct tree and no duplicated task markup in the parent.

See the [web brief](../../exercises/day-07/react-web/README.md). Solutions are withheld.

### Native: matching revision overview

- **Objective:** Keep the same custom tree with native output.
- **Requirements:** Same named responsibilities using View/Text, all text inside Text, heading role on the title, no hooks/props/list logic.
- **Files:** Modify [native PracticeOverview.tsx](../../exercises/day-07/react-native/PracticeOverview.tsx); create `reflection.md` beside it.
- **Expected behavior:** Matching content and order on a native screen.
- **Testing:** Repeat the text-change and temporary double-plan checks on Android/iOS; restore one plan.
- **Completion criteria:** Correct native containment, shared tree shape and an explanation of component versus platform trees.

See the [native brief](../../exercises/day-07/react-native/README.md). Missing host/device checks remain pending, not passed.

## Section E — Knowledge Check

Attempt the [five conceptual questions](questions.md), then open the collapsible answers.

## Section F — Daily Summary

- **Key concepts:** Composition creates a UI tree from named responsibilities; file structure is a separate choice.
- **Platform differences:** Same custom tree can produce different platform elements and semantics.
- **Important syntax:** Child component usages inside a parent's return, with file-scope definitions.
- **Pitfalls:** Nested definitions, needless wrappers, duplicated markup and confusing source order with rendered order.
- **Practical skills:** Sketch, implement and inspect a small composed screen on both platforms.
- **Next lecture:** Day 08 — Rendering and reconciliation. It has not been generated; request it when ready.

Days 01–04 are recorded as completed based on your confirmation. Days 05–07 await your confirmation after study and practice.
