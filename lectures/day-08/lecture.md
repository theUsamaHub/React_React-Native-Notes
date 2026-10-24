# Day 08 — Rendering and Reconciliation

## Lecture Header

- **Day:** 08
- **Topic:** How a React description becomes displayed UI
- **Learning phase:** Phase 1 — Fundamentals
- **Difficulty:** Beginner conceptual
- **Prerequisites:** Days 01–07; pure function components, JSX and component composition. Review those materials before proceeding if necessary.
- **Estimated study time:** 25–30 minutes reading; 20–35 minutes for both exercises.
- **Learning objectives:** Distinguish rendering from commit and platform drawing; explain React element descriptions and reconciliation; trace custom components to platform output; avoid treating every render as a complete screen rebuild.

This closes the fundamentals phase. We use static examples and reasoning exercises so hooks, events and props are not prerequisites. This is the first of the three newly requested days; previous completion is not inferred from the request.

## Section A — React.js Concept

### 1. WHAT — Three different kinds of work

**Rendering** is React calculating UI output by calling components. **Reconciliation** is React's work to match the next description with the existing tree and determine what can be retained or changed. **Commit** applies the chosen update to the host environment. The browser then performs its own layout and painting work.

React elements are descriptions produced from JSX; they are not DOM nodes. The phrase **virtual DOM** is a useful informal label for this description-and-comparison idea, not a second browser document and not the complete name of React's implementation.

### 2. WHY — Separate calculation from changes

A dashboard might calculate the same title again while another part changes. Re-running its function does not mean the title's actual browser node must be replaced. Separating description from platform mutation lets React coordinate changes while your components stay focused on what should appear.

This does not guarantee that React is faster than any manually written update. Rendering has a cost. Today's goal is correct reasoning, not a performance claim or optimization recipe.

### 3. WHEN — Use this model while debugging

Use the distinction when someone says “the component rendered, so the entire DOM was rebuilt.” Ask what output changed and what was actually committed. It also explains why functions must remain pure: UI calculation may be repeated, and work that is not committed must not have caused unrelated external changes.

### 4. HOW — A conceptual pipeline

```text
Host starts the app or React receives an update request
              |
Render: call components and calculate the next description
              |
Reconcile: match it with the existing tree
              |
Commit: apply needed DOM changes
              |
Browser layout/paint: display the result
```

Initial rendering creates the needed host output. A later render can produce identical output and require no DOM mutation. Render work can be repeated or discarded; not every function execution guarantees a commit. Ordinary JavaScript variable assignment does not itself request a React update. Later state lessons explain update triggers. [React's render/commit explanation](https://react.dev/learn/render-and-commit).

For a simple tree without explicit keys, compatible element/component types at the same position can retain identity. Changing a type can replace that subtree. Keys provide another identity signal, covered with lists later. These are conceptual rules, not a promise about exact low-level DOM operation counts. [Identity and tree position](https://react.dev/learn/preserving-and-resetting-state).

### 5. SYNTAX — Distinguish description from host output

`<LessonMessage />` describes a custom component usage. React calls that component to obtain its paragraph description. `<p>...</p>` describes a browser element. Neither JSX expression is a command such as `document.createElement` in your component body. Keep the rendering function free of DOM writes and shared counters.

### 6. COMPLETE EXAMPLE — Trace a small tree

Source: [web Day08RenderTrace.tsx](../../examples/react-web/Day08RenderTrace.tsx).

```tsx
function LessonMessage() {
  return <p>Read one concept carefully.</p>;
}

export default function Day08RenderTrace() {
  return (
    <section>
      <h2>Rendering a lesson</h2>
      <LessonMessage />
    </section>
  );
}
```

Line by line: 1 defines the child; 2 returns its paragraph; 3 ends it; 4 separates definitions; 5 defines/exports the entry; 6 starts the return; 7 opens the section; 8 describes a heading; 9 describes the child usage; 10 closes the section; 11 ends the return; 12 closes the entry function.

The custom tree is Day08RenderTrace → LessonMessage. The host output is a section containing an h2 and p; there is no browser LessonMessage tag. Mount using the [web host instructions](../../examples/react-web/README.md), substituting `Day08RenderTrace` for the filename, import and JSX name. Expect a heading and sentence. The existing host provides bootstrap/configuration.

Now reason about three **hypothetical normal React updates**, holding the ancestor structure stable:

| Next description | Expected consequence |
|---|---|
| Same types, positions and text | Calculation may occur without a DOM content change |
| Same p at the same position, new sentence | Existing paragraph can be retained while text changes |
| p changes to div at that position | Different host type means that host subtree is replaced |

You may edit source and refresh to inspect the different resulting structures. **Do not use hot refresh or a full reload as proof of normal update identity**: development tooling can preserve or replace things for its own reasons. A controlled runtime experiment belongs after update mechanisms are taught. Do not add a timer, hook or event just for this lesson.

### 7. REAL-WORLD USE

When a lesson dashboard later updates a progress count, you can reason separately about component calculations and visible text changes. This helps you avoid debugging the wrong layer or assuming a screen flash must accompany every component execution.

### 8. COMMON MISTAKES

- Equating rendering with browser painting conflates calculation with display.
- Treating virtual DOM as HTML stored in a hidden browser is inaccurate; it is a UI description model.
- Counting render-time console output as committed UI updates is unreliable, especially under development checks.
- Assuming every render destroys the tree ignores identity matching.
- Mutating an external counter during render makes repeated calculation observable in unintended ways.

### 9. BEST PRACTICES

Keep rendering pure and distinguish predicted behavior from measured evidence. Inspect the host tree and use appropriate profiling tools later rather than guessing performance from component count. Describe the exact type, position and output change when discussing identity.

## Section B — React Native Equivalent

### 1. WHAT — Same React descriptions, different host

React Native also calculates React element descriptions. Its output target is native UI rather than browser DOM nodes. There is no ordinary browser document to update on Android/iOS.

### 2. WHY — A mobile platform needs its own renderer

Native layout and platform views are not HTML. The conceptual separation between calculating and displaying remains useful, while host implementation details differ. Calling this process a virtual DOM must not imply a hidden DOM on the phone.

### 3. WHEN — Debug native changes precisely

Use the model when a parent screen calculates again or displayed text changes. It helps distinguish JavaScript calculation from native layout/presentation work without claiming that one React component always corresponds to exactly one physical native view.

### 4. HOW — Native rendering terminology

The current native architecture documentation describes render work producing React element and native shadow-tree descriptions, commit preparing the next tree/layout, and mount applying host-view changes. A **shadow tree** is the renderer's internal layout representation, not a browser DOM. View flattening and other implementation choices can affect physical view counts. Threading and exact internal structures are beyond this lesson and may depend on the installed version. [Native render pipeline](https://reactnative.dev/architecture/render-pipeline).

### 5. EXPO IMPLEMENTATION

Use a separate Expo learning host and follow the [native host instructions](../../examples/react-native/README.md), substituting `Day08RenderTrace`. Keep the file outside Router route directories and render it inside the existing screen/safe-area layout. No package installation or bootstrap changes are needed.

### 6. COMPLETE NATIVE EXAMPLE

Source: [native Day08RenderTrace.tsx](../../examples/react-native/Day08RenderTrace.tsx).

```tsx
import { Text, View } from 'react-native';

function LessonMessage() {
  return <Text>Read one concept carefully.</Text>;
}

export default function Day08RenderTrace() {
  return (
    <View>
      <Text accessibilityRole="header">Rendering a lesson</Text>
      <LessonMessage />
    </View>
  );
}
```

### 7. LINE-BY-LINE EXPLANATION

Line 1 imports native primitives; 2 is spacing; 3 defines the child; 4 returns Text; 5 closes it; 6 is spacing; 7 defines/exports the entry; 8 starts its return; 9 opens View; 10 describes the heading-role Text; 11 uses the child; 12 closes View; 13 finishes the return; 14 closes the function. All visible strings end up inside Text.

### 8. MOBILE-SPECIFIC CONSIDERATIONS

Expect native typography, with the title's role affecting accessibility rather than its font size. Verify on Android/iOS and preserve the host's safe area. Repeated native source refresh has the same evidence limitation as web hot refresh: it does not prove how a controlled runtime update preserves identity.

### 9. COMMON MISTAKES AND BEST PRACTICES

Do not search for DOM nodes in a native screen or count JSX wrappers as exact physical view counts. Keep calculation pure and distinguish native mount terminology from browser painting. No installed React/Expo/TypeScript versions or configured app host are present in this repository; device execution and type compatibility remain unverified.

## Section C — React vs React Native Comparison

| Aspect | React.js | React Native |
|---|---|---|
| Concept | Calculate descriptions and reconcile | Same React-level model |
| Syntax | `<p>Message</p>` | `<Text>Message</Text>` |
| Implementation | React DOM applies browser changes | Native renderer prepares/applies platform UI changes |
| Behavior | Rendering need not mutate DOM | Calculation does not imply rebuilding all native UI |
| Use case | Reason about a dashboard text update | Reason about a native screen text update |
| Display work | Browser layout and paint | Native layout and presentation |

Purity, description trees and identity reasoning transfer. Host representations, diagnostics and display work differ.

## Section D — Practical Exercise

### Web: trace a revision notice

- **Objective:** Separate a custom-component tree from its host output.
- **Requirements:** An exported PracticeTrace with a section, heading and file-scope RevisionMessage child returning a paragraph. Use your own revision sentence.
- **Files:** Modify [web PracticeTrace.tsx](../../exercises/day-08/react-web/PracticeTrace.tsx); create `reflection.md` beside it.
- **Expected behavior:** One heading and one message, with no custom-component HTML tag.
- **Testing:** Inspect the DOM; sketch unchanged-output, changed-text and changed-host-type scenarios. Label runtime identity conclusions as predictions.
- **Completion criteria:** Valid static component, correct tree sketch and distinction between render, commit and paint.

See the [web brief](../../exercises/day-08/react-web/README.md). No full solution is provided.

### Native: trace the same notice

- **Objective:** Apply the model without inventing a browser DOM.
- **Requirements:** Same custom tree with View/Text and a heading role; all strings inside Text.
- **Files:** Modify [native PracticeTrace.tsx](../../exercises/day-08/react-native/PracticeTrace.tsx); create `reflection.md` beside it.
- **Expected behavior:** Matching content in native UI.
- **Testing:** Verify Android/iOS output and describe unchanged versus changed text. Explain why JSX alone cannot establish exact physical view counts.
- **Completion criteria:** Correct native containment and reflection on calculation versus host updates.

See the [native brief](../../exercises/day-08/react-native/README.md). Missing host/device checks remain pending.

## Section E — Knowledge Check

Answer the [five questions](questions.md) before opening their collapsible answer section.

## Section F — Daily Summary

- **Key concepts:** Rendering calculates; reconciliation matches descriptions; host updates and drawing are separate work.
- **Platform differences:** Browser DOM versus native renderer structures and views.
- **Important syntax:** Custom component usage versus host-element JSX; no new update API today.
- **Pitfalls:** Equating execution with mutation, counting logs as commits, and using hot refresh as identity proof.
- **Practical skills:** Trace trees and predict update consequences with stated assumptions.
- **Next lecture:** Day 09 — Props, the first lesson in Components and Data.
