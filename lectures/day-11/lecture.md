# Day 11 — Conditional Rendering

## Lecture Header

- **Day:** 11
- **Topic:** Choosing UI alternatives from data
- **Learning phase:** Phase 2 — Components and Data
- **Difficulty:** Beginner
- **Prerequisites:** Days 01–10; JSX expressions, typed props and pure rendering. Boolean operators are explained below.
- **Estimated study time:** 25–30 minutes reading; 20–35 minutes practical work across both platforms.
- **Learning objectives:** Select output with if, ternary and boolean guards; return no UI deliberately; represent an empty/completed case; avoid numeric short-circuit bugs; apply the same conditions to native elements.

This is the first of the two requested days. We vary source inputs to inspect cases; no state, event handling or buttons are introduced.

## Section A — React.js Concept

### 1. WHAT — Conditions select descriptions

Conditional rendering means returning different UI descriptions according to data. React uses ordinary JavaScript control flow, not a separate template language. You can return early with `if`, choose one expression with `condition ? first : second`, or include an optional element with a boolean `condition && element`. `null` describes no UI output from that component. [React conditional rendering](https://react.dev/learn/conditional-rendering).

### 2. WHY — Screens have meaningful alternatives

A study summary should not show “lessons remaining” as if work is pending when the count is zero. It should communicate completion. Sometimes the whole panel is irrelevant, or an optional tip should be absent. These are decisions about what belongs in the UI, not simply what color it should have.

### 3. WHEN — Pick the appropriate form

Use an early return when the whole component has a distinct result. Use a ternary for two small alternatives in the same location. Use a boolean guard for one optional element. Avoid deeply nested ternaries; readable branches are easier to check than compressed expressions.

### 4. HOW — Evaluate on each render

The component reads its current inputs, evaluates the condition and returns the chosen description. When a future React update renders it with different data, the selected description may differ and reconciliation handles the host changes. A condition is not a subscription or a mechanism for triggering that update.

Returning null does not mean the component was never called or that it has necessarily been removed from its parent's component tree. It means this render contributes no host content. Likewise, removing a child from returned JSX differs from leaving it present but visually hiding it with styling. Do not infer future state-preservation behavior from a screenshot; identity and state get deeper treatment later.

### 5. SYNTAX — Understand the operators first

| Expression | Meaning |
|---|---|
| `!props.isVisible` | Boolean negation: true when visibility is false |
| `props.remaining === 0` | Strict equality comparison with numeric zero |
| `condition ? a : b` | Evaluate and return one of two expressions |
| `props.showTip && <p>Tip</p>` | Return false or the element, based on the boolean |

`&&` returns an operand; it does not necessarily return a boolean. `0 && <p>Tip</p>` evaluates to `0`, which React can display. Use an explicit comparison such as `count > 0 && ...` when starting from a number. False/null do not produce visible text; zero is different. `if` is a statement, so put it before the JSX return rather than directly inside JSX expression braces.

### 6. COMPLETE EXAMPLE — A study-status panel

Source: [web Day11StudyStatus.tsx](../../examples/react-web/Day11StudyStatus.tsx).

```tsx
type StudyStatusProps = {
  readonly isVisible: boolean;
  readonly remaining: number;
  readonly showTip: boolean;
};

function StudyStatus(props: StudyStatusProps) {
  if (!props.isVisible) {
    return null;
  }

  return (
    <section>
      <h2>Study status</h2>
      {props.remaining === 0 ? (
        <p>All lessons reviewed.</p>
      ) : (
        <p>Lessons remaining: {props.remaining}</p>
      )}
      {props.showTip && <p>Explain one idea in your own words.</p>}
    </section>
  );
}

export default function Day11StudyStatus() {
  return <StudyStatus isVisible={true} remaining={2} showTip={false} />;
}
```

Line by line: 1 opens the props type; 2–4 declare two boolean decisions and a numeric count; 5 ends the type; 6 is spacing; 7 defines the typed child; 8 checks visibility; 9 returns no content when hidden; 10 closes that branch; 11 is spacing. Line 12 starts the visible return; 13 opens section; 14 supplies the heading; 15 tests the count; 16 is the completed branch; 17 switches to the alternative; 18 is the pending branch; 19 closes the ternary expression; 20 conditionally includes the tip; 21–23 close section, return and function. Line 24 is spacing; 25 defines the parent; 26 supplies the demonstration inputs; 27 closes it.

The example assumes remaining is a non-negative integer. TypeScript's number type does not enforce that assumption. Input validation is a separate topic.

**Run:** Follow the [web host instructions](../../examples/react-web/README.md), replacing `Day01Card` with `Day11StudyStatus` in the filename, import and JSX usage. Use a separate configured host; preserve its bootstrap. Change parent literals, save/reload and inspect these cases:

| isVisible | remaining | showTip | Expected result |
|---|---|---|---|
| true | 2 | false | Heading and pending count; no tip |
| true | 0 | true | Heading, completion message and tip |
| false | 2 | true | No output from StudyStatus, including no heading or tip |

Restore the original inputs afterward. Source refresh tests output cases; it does not implement runtime interaction or prove normal-update identity.

### 7. REAL-WORLD USE

A dashboard can show empty-state guidance when nothing is queued and a count when work exists. Later, similar reasoning will choose loading, error and success views. Those future request states are not implemented here.

### 8. COMMON MISTAKES

- Using `remaining && ...` can leave a visible zero instead of omitting output.
- Putting an if statement directly in JSX braces is invalid expression syntax.
- Writing `showTip="false"` passes a string, not the boolean false; use braces for booleans.
- Using several unrelated booleans for mutually exclusive modes can allow contradictory UI. Here visibility and tip are independent choices; completion is derived from the count.
- Thinking hidden UI provides authorization is wrong: UI conditions are presentation decisions, not server-side access controls.

### 9. BEST PRACTICES

List the expected cases before coding and check every branch, including no-output cases. Derive related decisions from existing values instead of separately maintaining duplicate facts. Prefer explicit boolean conditions and short branches. Keep rendering pure and use semantic elements for each result.

## Section B — React Native Equivalent

### 1. WHAT — The same branch logic

React Native uses the same JavaScript conditional expressions. The branches return View/Text rather than browser elements. A null result means no native content from that return.

### 2. WHY — Native text containment changes the risk

The condition mechanism transfers, but raw strings/numbers still belong inside Text. A numeric guard that evaluates to zero beneath View can produce a text-containment error rather than merely unwanted browser text. [Native text containment](https://reactnative.dev/docs/text).

### 3. WHEN — Mobile alternatives and optional content

Use branches for a completed summary, empty state or optional native notice. The condition itself does not dismiss keyboards, manage focus or provide animation. Those platform behaviors require explicit later design.

### 4. HOW — Select native descriptions

The early return runs before the View is described. The ternary picks one Text element, and the boolean tip guard picks Text or false. No branch leaks a bare string/number under View. The parent still controls the input values.

### 5. EXPO IMPLEMENTATION

Copy the native example outside Router route directories and render `Day11StudyStatus` inside the existing learning screen's safe-area/layout container. Follow the [native host instructions](../../examples/react-native/README.md) using this component name. No packages or navigation changes are needed.

### 6. COMPLETE NATIVE EXAMPLE

Source: [native Day11StudyStatus.tsx](../../examples/react-native/Day11StudyStatus.tsx).

```tsx
import { Text, View } from 'react-native';

type StudyStatusProps = {
  readonly isVisible: boolean;
  readonly remaining: number;
  readonly showTip: boolean;
};

function StudyStatus(props: StudyStatusProps) {
  if (!props.isVisible) {
    return null;
  }

  return (
    <View>
      <Text accessibilityRole="header">Study status</Text>
      {props.remaining === 0 ? (
        <Text>All lessons reviewed.</Text>
      ) : (
        <Text>Lessons remaining: {props.remaining}</Text>
      )}
      {props.showTip && <Text>Explain one idea in your own words.</Text>}
    </View>
  );
}

export default function Day11StudyStatus() {
  return <StudyStatus isVisible={true} remaining={2} showTip={false} />;
}
```

### 7. LINE-BY-LINE EXPLANATION

Line 1 imports native primitives; 2 is spacing; 3–7 define the same props contract; 8 is spacing; 9 defines the child; 10 checks visibility; 11 returns null; 12 closes that branch; 13 separates it from the visible path. Line 14 starts return; 15 opens View; 16 displays the heading-role Text; 17 checks zero; 18 describes completion; 19 begins the alternative; 20 describes pending work inside Text; 21 closes the ternary; 22 conditionally describes the tip; 23–25 close View, return and function. Line 26 is spacing; 27–29 define the parent with initial inputs.

### 8. MOBILE-SPECIFIC CONSIDERATIONS

Test all three cases on Android/iOS, not just Expo web. Confirm the hidden case removes all panel output and that zero does not leak beneath View. Preserve safe-area handling and allow text to wrap. Heading roles do not add visual heading styles. A changed native message is not automatically announced in every screen-reader workflow; a full accessibility update pattern comes later.

### 9. COMMON MISTAKES AND BEST PRACTICES

Never rely on numeric truthiness under View. Select Text elements, not bare text strings, for these branches. Keep logic identical across platforms while adapting the host output. No installed React/Expo/TypeScript versions or configured app host were found in this workspace; type/device execution remains unverified.

## Section C — React vs React Native Comparison

| Aspect | React.js | React Native |
|---|---|---|
| Concept | Select UI with JavaScript conditions | Same control flow |
| Syntax | `ready ? <p>Ready</p> : <p>Wait</p>` | `ready ? <Text>Ready</Text> : <Text>Wait</Text>` |
| Implementation | Branches return browser elements | Branches return native elements |
| Behavior | Numeric short circuit can show zero | Raw zero under View violates native text containment |
| Use case | Completed/remaining summary | Same summary on a native screen |
| No output | Return null | Return null |

Boolean reasoning transfers directly; platform elements and valid text placement must be adapted.

## Section D — Practical Exercise

### Web: revision notice

- **Objective:** Implement three intentional output cases.
- **Requirements:** A typed RevisionNotice with isVisible, pending and showHint inputs; early-return null when hidden; show completion at zero or count otherwise; optional hint with a boolean guard.
- **Files:** Modify [web PracticeNotice.tsx](../../exercises/day-11/react-web/PracticeNotice.tsx); create `reflection.md` beside it.
- **Expected behavior:** Hidden, pending and completed outputs match the brief's truth table.
- **Testing:** Change parent literals and save/reload; inspect visible content and absence of a stray zero.
- **Completion criteria:** Correct branches, no numeric guard, valid final types and reflection on output versus update triggers.

Follow the [web brief](../../exercises/day-11/react-web/README.md); no full solution is supplied.

### Native: matching notice

- **Objective:** Apply identical conditions with native containment.
- **Requirements:** Same typed inputs and decisions using View/Text and a title role.
- **Files:** Modify [native PracticeNotice.tsx](../../exercises/day-11/react-native/PracticeNotice.tsx); create `reflection.md` beside it.
- **Expected behavior:** Matching cases without bare text under View.
- **Testing:** Use the same truth table on Android/iOS and inspect errors separately from type diagnostics.
- **Completion criteria:** Valid native branches, correct zero handling and a clear reflection.

Follow the [native brief](../../exercises/day-11/react-native/README.md); record missing-host checks as pending.

## Section E — Knowledge Check

Attempt the [five questions](questions.md) before opening their collapsible answers.

## Section F — Daily Summary

- **Key concepts:** Branches choose UI descriptions from current inputs; null contributes no host output.
- **Platform differences:** Same decisions, different host elements and text containment.
- **Important syntax:** `if`, `!`, `===`, `? :`, boolean `&&`.
- **Pitfalls:** Stray zero, quoted booleans, invalid statements in JSX and assuming a condition triggers updates.
- **Practical skills:** Define cases, implement readable alternatives and verify empty/no-output behavior.
- **Next lecture:** Day 12 — Lists and keys.
